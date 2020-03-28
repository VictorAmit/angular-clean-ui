import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { SharedModule } from 'src/app/shared.module'
import { WidgetsComponentsModule } from 'src/app/components/kit-widgets/widgets-components.module'

import { TopbarComponent } from './Topbar/topbar.component'
import { TopbarHomeMenuComponent } from './Topbar/HomeMenu/home-menu.component'
import { TopbarIssuesHistoryComponent } from './Topbar/IssuesHistory/issues-history.component'
import { TopbarLiveSearchComponent } from './Topbar/LiveSearch/live-search.component'
import { TopbarProfileMenuComponent } from './Topbar/ProfileMenu/profile-menu.component'
import { TopbarProjectManagementComponent } from './Topbar/ProjectManagement/project-management.component'
import { MenuLeftComponent } from './Menu/MenuLeft/menu-left.component'
import { MenuTopComponent } from './Menu/MenuTop/menu-top.component'
import { FooterComponent } from './Footer/footer.component'
import { BreadcrumbsComponent } from './Breadcrumbs/breadcrumbs.component'
import { SidebarComponent } from './Sidebar/sidebar.component'
import { SupportChatComponent } from './SupportChat/support-chat.component'

const COMPONENTS = [
  TopbarComponent,
  TopbarHomeMenuComponent,
  TopbarIssuesHistoryComponent,
  TopbarLiveSearchComponent,
  TopbarProfileMenuComponent,
  TopbarProjectManagementComponent,
  MenuLeftComponent,
  MenuTopComponent,
  FooterComponent,
  BreadcrumbsComponent,
  SidebarComponent,
  SupportChatComponent,
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    WidgetsComponentsModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutModule {}
