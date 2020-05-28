import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import { AuthService } from 'src/app/services/firebase.auth.service'

@Component({
  selector: 'cui-system-login-page',
  templateUrl: './login.component.html',
})
export class LoginPage {}
