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
  isLightTheme: any
  isCollapsed: any

  constructor(private menuService: MenuService, private store: Store<any>) {}

  ngOnInit() {
    this.menuService.getLeftMenuData().subscribe(menuData => (this.menuData = menuData))
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isLightTheme = state.isLightTheme
      this.isCollapsed = state.isCollapsed
    })
  }

  onCollapse(value: any) {
    if (value !== this.isCollapsed) {
      console.log('triggered') // TODO: chagne detection wont triggers
      this.store.dispatch(
        new SettingsActions.SetStateAction({
          isCollapsed: value,
        }),
      )
    }
  }
}
