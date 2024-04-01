import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { EditMemberComponent } from '../../members/components/edit-member/edit-member.component';

export const memberEditFormDeactivateGuard: CanDeactivateFn<
  EditMemberComponent
> = (
  component: EditMemberComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.method) {
    return true;
  } else if (
    component.member.address ||
    component.member.birthday ||
    component.member.class ||
    component.member.email ||
    component.member.email ||
    component.member.name ||
    component.member.phone ||
    component.member.sex ||
    component.member.surname
  ) {
    return window.confirm('Czy napewno chcesz opuścić formularz');
  } else {
    return true;
  }
};
