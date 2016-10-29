import {NgModule, ModuleWithProviders, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import {UserService} from "./user.service";
import {UserConfig} from "./user-config";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CoreComponent],
  providers: [UserService]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: UserConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: UserConfig, useValue: config }
      ]
    };
  }


}
