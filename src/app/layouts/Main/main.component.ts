import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class LayoutMainComponent {
  settings$: Observable<any>
  isLightTheme: boolean
  isCollapsed: boolean

  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isLightTheme = state.isLightTheme
      this.isCollapsed = state.isCollapsed
    })
  }

  onCollapse(value: any) {
    if (value !== this.isCollapsed) {
      console.log('triggered') // TODO: detection change wont be triggered
      this.store.dispatch(
        new SettingsActions.SetStateAction({
          isCollapsed: value,
        }),
      )
    }
  }

  toggleTheme() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isLightTheme: !this.isLightTheme,
      }),
    )
  }

  toggleCollapsed() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isCollapsed: !this.isCollapsed,
      }),
    )
  }
}
