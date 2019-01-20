import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutLoginComponent } from './Login/login.component';
import { LayoutMainComponent } from './Main/main.component';
import { LayoutPublicComponent } from './Public/public.component';

const COMPONENTS = [
  LayoutLoginComponent,
  LayoutMainComponent,
  LayoutPublicComponent,
];

@NgModule({
  imports: [RouterModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutsModule {}
