import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AddMemberComponent } from '../../members/components/add-member/add-member.component';

export const memberAddFormDeactivateGuard: CanDeactivateFn<
  AddMemberComponent
> = (
  component: AddMemberComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.method) {
    return true;
  } else if (
    component.newMember.address ||
    component.newMember.birthday ||
    component.newMember.class ||
    component.newMember.email ||
    component.newMember.email ||
    component.newMember.name ||
    component.newMember.phone ||
    component.newMember.sex ||
    component.newMember.surname
  ) {
    return window.confirm('Czy napewno chcesz opuścić formularz');
  } else {
    return true;
  }
};
