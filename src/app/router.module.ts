import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from './shared.module'
import { AuthService } from './services/auth.service'
import { AuthGuard } from './components/LayoutComponents/Guard/auth.guard'

// layputs
import { LayoutLoginComponent } from './layouts/Login/login.component'
import { LayoutMainComponent } from './layouts/Main/main.component'

// dashboard
import { LoginComponent } from './pages/user/login/login.component'
import { ForgotComponent } from './pages/user/forgot/forgot.component'

// dashboard
import { DashboardAlphaComponent } from './pages/dashboard/alpha/alpha.component'
import { DashboardBetaComponent } from './pages/dashboard/beta/beta.component'

const COMPONENTS = [
  LoginComponent,
  ForgotComponent,
  DashboardAlphaComponent,
  DashboardBetaComponent,
]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/alpha',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'dashboard/alpha',
        component: DashboardAlphaComponent,
        data: { title: 'Dashboard Alpha' },
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard/beta',
        component: DashboardBetaComponent,
        data: { title: 'Dashboard Beta' },
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'user',
    component: LayoutLoginComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login' } },
      { path: 'forgot', component: ForgotComponent, data: { title: 'Restore Password' } },
    ],
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  providers: [AuthService],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class RoutesModule {}
