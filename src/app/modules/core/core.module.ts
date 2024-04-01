import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, SharedModule, RouterModule],
  exports: [NavComponent, FooterComponent],
})
export class CoreModule {}
