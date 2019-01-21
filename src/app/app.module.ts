import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, LOCALE_ID } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
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
  bootstrap: [AppComponent],
})
export class AppModule {}
