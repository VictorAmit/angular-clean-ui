import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// layputs
import { LayoutLoginComponent } from './layouts/Login/login.component';
import { LayoutMainComponent } from './layouts/Main/main.component';

// dashboard
import { LoginComponent } from './pages/user/login/login.component';
import { ForgotComponent } from './pages/user/forgot/forgot.component';

// dashboard
import { DashboardAlphaComponent } from './pages/dashboard/alpha/alpha.component';
import { DashboardBetaComponent } from './pages/dashboard/beta/beta.component';

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
      { path: 'dashboard/alpha', component: DashboardAlphaComponent },
      { path: 'dashboard/beta', component: DashboardBetaComponent },
    ]
  },
  {
    path: 'user',
    component: LayoutLoginComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'forgot', component: ForgotComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: true,
      }
    )
  ],
  declarations: [...COMPONENTS],
  exports: [RouterModule]
})
export class RoutesModule { }
