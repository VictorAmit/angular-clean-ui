import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { LayoutsModule } from 'src/app/layouts/layouts.module'
import { AppPreloader } from 'src/app/app-routing-loader'

// layouts
import { LayoutLoginComponent } from 'src/app/layouts/Login/login.component'

// user
import { LoginComponent } from 'src/app/pages/user/login/login.component'
import { ForgotComponent } from 'src/app/pages/user/forgot/forgot.component'

const COMPONENTS = [LoginComponent, ForgotComponent]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/alpha',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: 'src/app/pages/dashboard/dashboard.module#DashboardModule',
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
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule {}
