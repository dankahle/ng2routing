import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisService } from './crisis.service';
import { CrisisCenterHomeComponent } from './crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { crisisCenterRouting } from './crisis-center.routing';
import {CrisisDetailResolve} from './crisis-detail-resolve.service';
import {UserService} from "../core/user.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    crisisCenterRouting
  ],
  declarations: [CrisisCenterComponent, CrisisCenterHomeComponent, CrisisListComponent, CrisisDetailComponent],
  providers: [CrisisService, CrisisDetailResolve, UserService]
})
export class CrisisCenterModule { }
