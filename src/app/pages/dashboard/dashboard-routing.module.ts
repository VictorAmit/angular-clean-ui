import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'
import { AuthGuard } from 'src/app/components/LayoutComponents/Guard/auth.guard'
import { LayoutsModule } from 'src/app/layouts/layouts.module'

// layouts
import { LayoutMainComponent } from 'src/app/layouts/Main/main.component'

// dashboard
import { DashboardAlphaComponent } from 'src/app/pages/dashboard/alpha/alpha.component'
import { DashboardBetaComponent } from 'src/app/pages/dashboard/beta/beta.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'alpha',
        component: DashboardAlphaComponent,
        data: { title: 'Dashboard Alpha' },
        canActivate: [AuthGuard],
      },
      {
        path: 'beta',
        component: DashboardBetaComponent,
        data: { title: 'Dashboard Beta' },
        canActivate: [AuthGuard],
      },
    ],
  },
]

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  providers: [AuthService],
  exports: [RouterModule],
})
export class DashboardRouterModule {}
