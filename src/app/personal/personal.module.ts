import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalLayoutComponent } from './shared/components/personal-layout/personal-layout.component';


@NgModule({
  declarations: [
    PersonalLayoutComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }
