import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AddDocsComponent } from '../../members/components/add-docs/add-docs.component';
export const documentFormDeactivateGuard: CanDeactivateFn<AddDocsComponent> = (
  component: AddDocsComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.method) {
    return true;
  } else if (
    component.newDocs.content ||
    component.newDocs.href ||
    component.newDocs.src
  ) {
    return window.confirm('Czy napewno chcesz opuścić formularz');
  } else {
    return true;
  }
};
