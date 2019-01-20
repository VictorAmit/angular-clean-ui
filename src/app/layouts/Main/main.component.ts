import {
  Component,
} from '@angular/core';

@Component({
  selector: 'layout-main',
  template: `
    MAIN LAYOUT
    <router-outlet></router-outlet>
  `,
})
export class LayoutMainComponent {}