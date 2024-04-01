import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersComponent } from './components/members/members.component';
import { MemberRoutingModule } from './members-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainTableComponent } from './components/main-table/main-table.component';
import { MoreInfoComponent } from './components/more-info/more-info.component';
import { AddMemberComponent } from './components/add-member/add-member.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { DocsComponent } from './components/docs/docs.component';
import { AddDocsComponent } from './components/add-docs/add-docs.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { AddEquipmentComponent } from './components/add-equipment/add-equipment.component';
@NgModule({
  declarations: [
    MembersComponent,
    MainTableComponent,
    MoreInfoComponent,
    AddMemberComponent,
    EditMemberComponent,
    DocsComponent,
    AddDocsComponent,
    TimetableComponent,
    EquipmentComponent,
    AddEquipmentComponent,
  ],
  imports: [CommonModule, MemberRoutingModule, SharedModule],
  exports: [MembersComponent],
  providers: [NativeDateAdapter],
})
export class MembersModule {}
