import { Component } from '@angular/core';
import {UserService} from "../../core/user.service";

@Component({
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.scss']
})
export class CrisisCenterComponent {

  constructor(userService:UserService) {}
}
