import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'
import { WidgetsComponentsModule } from 'src/app/components/kit-widgets/widgets-components.module'
import { NestableModule } from 'ngx-nestable'
import { FormsModule } from '@angular/forms'
import { ChartistModule } from 'ng-chartist'
import { NvD3Module } from 'ng2-nvd3'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'
import { AngularStickyThingsModule } from '@w11k/angular-sticky-things'

import 'd3'
import 'nvd3'

// dashboard
import { DashboardAlphaComponent } from 'src/app/pages/dashboard/alpha/alpha.component'
// import { DashboardBetaComponent } from 'src/app/pages/dashboard/beta/beta.component'
// import { DashboardCryptoComponent } from 'src/app/pages/dashboard/crypto/crypto.component'
// import { DashboardGammaComponent } from 'src/app/pages/dashboard/gamma/gamma.component'

const COMPONENTS = [
  DashboardAlphaComponent,
  // DashboardBetaComponent,
  // DashboardCryptoComponent,
  // DashboardGammaComponent,
]

@NgModule({
  imports: [
    SharedModule,
    DashboardRouterModule,
    WidgetsComponentsModule,
    NestableModule,
    FormsModule,
    ChartistModule,
    NvD3Module,
    PerfectScrollbarModule,
    AngularStickyThingsModule,
  ],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
