import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, AuthRoutingModule, RouterModule,FormsModule],
  exports: [LoginComponent],
})
export class AuthModule {}
