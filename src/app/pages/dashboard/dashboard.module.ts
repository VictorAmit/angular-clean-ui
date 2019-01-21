import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'

// dashboard
import { DashboardAlphaComponent } from 'src/app/pages/dashboard/alpha/alpha.component'
import { DashboardBetaComponent } from 'src/app/pages/dashboard/beta/beta.component'

const COMPONENTS = [DashboardAlphaComponent, DashboardBetaComponent]

@NgModule({
  imports: [SharedModule, DashboardRouterModule],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
