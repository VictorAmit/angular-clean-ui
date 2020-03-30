import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'cui-acl',
  templateUrl: './acl.component.html',
  template: `
    <ng-content *ngIf="authorized"></ng-content>
  `,
})
export class ACLComponent implements OnInit {
  @Input() roles: any[] = []
  authorized: Boolean = false
  role: string = ''

  constructor(public authService: AuthService) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user'))
    user.role = 'admin' // TODO: FAKE FIREBASE ROLE, YOU SHOULD ADD IT TO FIREBASE USER MDOEL
    this.authorized = this.roles.includes(user.role)
  }
}
