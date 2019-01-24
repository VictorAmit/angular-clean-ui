import { Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'cui-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  isSettingsOpen: boolean
  isMenuTop: boolean = false
  isMenuCollapsed: boolean = false
  isMenuShadow: boolean = false
  isLightTheme: boolean = false
  isBorderless: boolean = false
  isSquaredBorders: boolean = false
  isFixedWidth: boolean = false

  constructor(private store: Store<any>) {
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isSettingsOpen = state.isSettingsOpen
      this.isMenuTop = state.isMenuTop
      this.isMenuCollapsed = state.isMenuCollapsed
      this.isMenuShadow = state.isMenuShadow
      this.isLightTheme = state.isLightTheme
      this.isBorderless = state.isBorderless
      this.isSquaredBorders = state.isSquaredBorders
      this.isFixedWidth = state.isFixedWidth
    })
  }

  settingChange(event: boolean, setting: string) {
    console.log(123)

    this.store.dispatch(
      new SettingsActions.SetStateAction({
        [setting]: event,
      }),
    )
  }

  toggle() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isSettingsOpen: !this.isSettingsOpen,
      }),
    )
  }

  close() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isSettingsOpen: false,
      }),
    )
  }
}
