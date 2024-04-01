import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { AddDocsComponent } from '../../members/components/add-docs/add-docs.component';
import { AddEquipmentComponent } from '../../members/components/add-equipment/add-equipment.component';

export const equipmentFormDeactivateGuard: CanDeactivateFn<
  AddEquipmentComponent
> = (
  component: AddEquipmentComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.method) {
    return true;
  } else if (
    component.memberData.address ||
    component.memberData.birthday ||
    component.memberData.class ||
    component.memberData.email ||
    component.memberData.email ||
    component.memberData.name ||
    component.memberData.phone ||
    component.memberData.sex ||
    component.memberData.surname
  ) {
    return window.confirm('Czy napewno chcesz opuścić formularz');
  } else {
    return true;
  }
};
