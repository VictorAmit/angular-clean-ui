import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared.module'

import { TopBarComponent } from './TopBar/topbar.component'
import { MenuComponent } from './Menu/menu.component'
import { FooterComponent } from './Footer/footer.component'

const COMPONENTS = [TopBarComponent, MenuComponent, FooterComponent]

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
