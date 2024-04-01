import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './modules/core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'baza-zespolu';
  constructor(private authService: AuthenticationService) {
    
  }
  ngOnInit(): void {
    this.authService.autologin()
  }
}
