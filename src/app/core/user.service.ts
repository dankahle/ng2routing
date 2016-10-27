import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  count = 0;

  constructor() {
    console.log('user service construction')
  }

}
