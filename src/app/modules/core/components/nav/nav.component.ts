import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../models/login-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  constructor(private authenticationService: AuthenticationService) {}
  user!: User | null;
  sub = new Subscription();
  ngOnInit(): void {
    this.sub = this.authenticationService.user.subscribe({
      next: (value) => (this.user = value),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  showFiller = false;
  logout(): void {
    this.authenticationService.logout();
  }
}
