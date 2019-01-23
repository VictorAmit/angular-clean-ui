import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'

import { TopbarComponent } from './Topbar/topbar.component'
import { TopbarBitcoinPriceComponent } from './Topbar/BitcoinPrice/bitcoin-price.component'
import { TopbarHomeMenuComponent } from './Topbar/HomeMenu/home-menu.component'
import { TopbarIssuesHistoryComponent } from './Topbar/IssuesHistory/issues-history.component'
import { TopbarLiveSearchComponent } from './Topbar/LiveSearch/live-search.component'
import { TopbarProfileMenuComponent } from './Topbar/ProfileMenu/profile-menu.component'
import { TopbarProjectManagementComponent } from './Topbar/ProjectManagement/project-management.component'
import { MenuComponent } from './Menu/menu.component'
import { FooterComponent } from './Footer/footer.component'
import { BreadcrumbsComponent } from './Breadcrumbs/breadcrumbs.component'

const COMPONENTS = [
  TopbarComponent,
  TopbarBitcoinPriceComponent,
  TopbarHomeMenuComponent,
  TopbarIssuesHistoryComponent,
  TopbarLiveSearchComponent,
  TopbarProfileMenuComponent,
  TopbarProjectManagementComponent,
  MenuComponent,
  FooterComponent,
  BreadcrumbsComponent,
]

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
