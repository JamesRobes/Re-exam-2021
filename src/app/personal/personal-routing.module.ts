import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudItemComponent } from '../pages/stud-item/stud-item.component';
import { StudListComponent } from '../pages/stud-list/stud-list.component';
import { PersonalLayoutComponent } from './shared/components/personal-layout/personal-layout.component';

const routes: Routes = [
  {
    path: "",
    component: PersonalLayoutComponent,
    children: [
      {
        path: "", component: StudListComponent,
      },
      {
        path: "item", component: StudItemComponent,
      },
      {
        path: "item/:id", component: StudItemComponent,
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PersonalRoutingModule { }
