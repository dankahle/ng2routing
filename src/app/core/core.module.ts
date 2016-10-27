import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {UserService} from "./user.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent],
  providers: [UserService]
})
export class CoreModule { }
