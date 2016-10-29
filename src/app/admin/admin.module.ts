import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageCrisesComponent } from './manage-crises/manage-crises.component';
import { ManageHeroesComponent } from './manage-heroes/manage-heroes.component';

import { adminRouting } from './admin.routing';
import {UserService} from "../core/user.service";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule,
    adminRouting
  ],
  declarations: [AdminDashboardComponent, AdminComponent, ManageCrisesComponent, ManageHeroesComponent]
})
export class AdminModule {

  constructor() {
    console.log('admin module const');
  }
}
