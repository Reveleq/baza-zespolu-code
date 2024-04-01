import { inject } from '@angular/core';
import {
  CanMatchFn,
  Route,
  Router,
  UrlSegment,
} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuardLoad: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const isLoggedIn = inject(AuthenticationService).isLoggedIn();
  return isLoggedIn ? isLoggedIn : inject(Router).createUrlTree(['/logowanie']);
};
