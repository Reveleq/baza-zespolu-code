import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationClient } from 'src/app/clients/authentication.client';
import { GetUsersResponse, User, UserLoginData } from '../models/login-model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.develop';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private tokenKey = 'user';
  islogged = false;
  apiUrl = environment.apiUrl;
  user = new BehaviorSubject<User | null>(null);
  
  constructor(
    private authenticationClient: AuthenticationClient,
    private router: Router,
    private http: HttpClient
  ) {}

  // public login(username: string, password: string): void {
  //   this.authenticationClient.login(username, password).subscribe((token) => {
  //     localStorage.setItem(this.tokenKey, token);
  //     this.islogged = true;
  //     console.log('zalogowano');
  //     console.log(this.islogged);
  //     this.router.navigate(['/baza']);
  //   });
  // }
  login(userData: UserLoginData): Observable<User[]> {
    console.log(this.apiUrl + '/users');
    return this.http.get<GetUsersResponse[]>(`${this.apiUrl}/users`).pipe(
      map((userArr) =>
        userArr.filter(
          (user) =>
            user.username === userData.username &&
            user.password === userData.password
        )
      ),
      map((userArr) => userArr.map((user) => new User(user.email, user.email))),
      tap((userArr) => this.handlaAuthentication(userArr))
    );
  }
  private handlaAuthentication(userArr: User[]) {
    if (userArr.length === 0) {
      return;
    }
    const user: User = userArr[0];
    this.user.next(user);
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/baza']);
  }
  logout() {
    this.user.next(null);
    this.router.navigate(['/logowanie']);
    localStorage.removeItem('user');
  }
  autologin() {
    const userData: { email: string; username: string } = JSON.parse(
      localStorage.getItem('user') as string
    );
    if (!userData) {
      return;
    }
    const user = new User(userData.email, userData.username);
    this.user.next(user);
  }
  public isLoggedIn(): boolean {
    let token = localStorage.getItem(this.tokenKey);
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }
}
