import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup
  title = '123'

  constructor(private fb: FormBuilder) {}

  submitForm(): void {
    for (const i of this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty()
      this.validateForm.controls[i].updateValueAndValidity()
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['admin@mediatec.org', [Validators.required]],
      password: ['cleanui', [Validators.required]],
    })
  }
}
