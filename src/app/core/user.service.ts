import {Injectable, Optional} from '@angular/core';
import {UserConfig} from "./user-config";

@Injectable()
export class UserService {
  name = 'initial';

  constructor(@Optional() config:UserConfig) {
    console.log('user service construction')
    if (config) {
      this.name = config.name;
    }
  }

  getName() {
    return this.name;
  }

}
