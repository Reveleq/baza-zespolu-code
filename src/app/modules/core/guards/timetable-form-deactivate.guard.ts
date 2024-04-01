import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { TimetableComponent } from '../../members/components/timetable/timetable.component';
export const timetableFormDeactivateGuard: CanDeactivateFn<
  TimetableComponent
> = (
  component: TimetableComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  if (component.method) {
    return true;
  } else if (component.date.name) {
    return window.confirm('Czy napewno chcesz opuścić formularz');
  } else {
    return true;
  }
};
