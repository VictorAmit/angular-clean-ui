import { Component } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'cui-topbar-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
})
export class TopbarProfileMenuComponent {
  badgeCount: number = 7

  constructor(public authService: AuthService) {}

  badgeCountIncrease() {
    this.badgeCount = this.badgeCount + 1
  }

  logout() {
    this.authService.SignOut()
  }
}
