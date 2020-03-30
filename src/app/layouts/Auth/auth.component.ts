import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { select, Store } from '@ngrx/store'
import * as Reducers from 'src/app/store/reducers'
import { slideFadeinUp, slideFadeinRight, zoomFadein, fadein } from '../router-animations'

@Component({
  selector: 'layout-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [slideFadeinUp, slideFadeinRight, zoomFadein, fadein],
})
export class LayoutAuthComponent {
  backgroundNumber = 1
  backgroundEnabled = false
  routerAnimation: string

  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.routerAnimation = state.routerAnimation
    })
  }

  changeBackground(): void {
    this.backgroundEnabled = true
    this.backgroundNumber === 5 ? (this.backgroundNumber = 1) : (this.backgroundNumber += 1)
  }

  toggleBackground(): void {
    this.backgroundEnabled = !this.backgroundEnabled
  }

  routeAnimation(outlet: RouterOutlet, animation: string) {
    if (animation === this.routerAnimation) {
      return outlet.isActivated && outlet.activatedRoute.routeConfig.path
    }
  }
}
