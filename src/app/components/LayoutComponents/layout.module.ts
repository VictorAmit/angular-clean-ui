import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'

import { TopBarComponent } from './TopBar/topbar.component'
import { MenuComponent } from './Menu/menu.component'
import { FooterComponent } from './Footer/footer.component'
import { BreadcrumbsComponent } from './Breadcrumbs/breadcrumbs.component'

const COMPONENTS = [TopBarComponent, MenuComponent, FooterComponent, BreadcrumbsComponent]

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
