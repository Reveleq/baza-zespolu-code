import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './components/members/members.component';
import { NgModule } from '@angular/core';
import { MainTableComponent } from './components/main-table/main-table.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { DocsComponent } from './components/docs/docs.component';
import { AddDocsComponent } from './components/add-docs/add-docs.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { AddEquipmentComponent } from './components/add-equipment/add-equipment.component';
import { authGuardLoad } from '../core/guards/auth-load.guard';
import { documentFormDeactivateGuard } from '../core/guards/document-form-deactivate.guard';
import { memberAddFormDeactivateGuard } from '../core/guards/member-add-form-deactivate.guard';
import { memberEditFormDeactivateGuard } from '../core/guards/member-edit-form-deactivate.guard';
import { equipmentFormDeactivateGuard } from '../core/guards/equipment-form-deactivate.guard';
import { timetableFormDeactivateGuard } from '../core/guards/timetable-form-deactivate.guard';

const routes: Routes = [
  { path: 'baza', component: MembersComponent, canMatch: [authGuardLoad] },
  { path: 'baza/dane', component: MainTableComponent },
  { path: 'baza/dane/:id', component: MoreInfoComponent },
  {
    path: 'baza/dodaj-czlonka',
    component: AddMemberComponent,
    canDeactivate: [memberAddFormDeactivateGuard],
  },
  {
    path: 'baza/edytuj-czlonka/:id',
    component: EditMemberComponent,
    canDeactivate: [memberEditFormDeactivateGuard],
  },
  { path: 'baza/dokumenty', component: DocsComponent },
  {
    path: 'baza/dodaj-dokument',
    component: AddDocsComponent,
    canDeactivate: [documentFormDeactivateGuard],
  },
  {
    path: 'baza/grafik',
    component: TimetableComponent,
    canDeactivate: [timetableFormDeactivateGuard],
  },
  {
    path: 'baza/rekwizyty',
    component: EquipmentComponent,
  },
  {
    path: 'baza/dodaj-rekwizyt',
    component: AddEquipmentComponent,
    canDeactivate: [equipmentFormDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
