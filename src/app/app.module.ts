import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NZ_I18N, NZ_ICONS, en_US } from 'ng-zorro-antd'
import { IconDefinition } from '@ant-design/icons-angular'
import * as AllIcons from '@ant-design/icons-angular/icons'
import { NgProgressModule } from '@ngx-progressbar/core'
import { NgProgressRouterModule } from '@ngx-progressbar/router'
import { NgProgressHttpModule } from '@ngx-progressbar/http'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// config angular i18n
import { registerLocaleData } from '@angular/common'
import en from '@angular/common/locales/en'
registerLocaleData(en)

// map antd icons
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition
}
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyAE5G0RI2LwzwTBizhJbnRKIKbiXQIA1dY',
  authDomain: 'cleanui-72a42.firebaseapp.com',
  databaseURL: 'https://cleanui-72a42.firebaseio.com',
  projectId: 'cleanui-72a42',
  storageBucket: 'cleanui-72a42.appspot.com',
  messagingSenderId: '583382839121',
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      thick: true,
      spinner: false,
      color: '#0190fe',
    }),
    NgProgressRouterModule,
    NgProgressHttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent],
})
export class AppModule {}
