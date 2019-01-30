import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { MenuService } from 'src/app/services/menu.service'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'cui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuData: any[]
  isLightTheme: boolean
  isMenuCollapsed: boolean
  isSettingsOpen: boolean

  constructor(private menuService: MenuService, private store: Store<any>) {}

  ngOnInit() {
    this.menuService.getLeftMenuData().subscribe(menuData => (this.menuData = menuData))
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isLightTheme = state.isLightTheme
      this.isMenuCollapsed = state.isMenuCollapsed
      this.isSettingsOpen = state.isSettingsOpen
    })
  }

  toggleSettings() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isSettingsOpen: !this.isSettingsOpen,
      }),
    )
  }

  onCollapse(value: any) {
    if (value !== this.isMenuCollapsed) {
      console.log('triggered') // TODO: change detection wont triggers
      this.store.dispatch(
        new SettingsActions.SetStateAction({
          isMenuCollapsed: value,
        }),
      )
    }
  }
}
