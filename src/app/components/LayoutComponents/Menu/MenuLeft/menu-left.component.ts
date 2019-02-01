import { Component, OnInit, Input } from '@angular/core'
import { Router, NavigationStart } from '@angular/router'
import { filter } from 'rxjs/operators'
import { select, Store } from '@ngrx/store'
import { MenuService } from 'src/app/services/menu.service'
import * as SettingsActions from 'src/app/store/settings/actions'
import * as Reducers from 'src/app/store/reducers'

@Component({
  selector: 'cui-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss'],
})
export class MenuLeftComponent implements OnInit {
  @Input() isMenuCollapsed: boolean = false
  isLightTheme: boolean
  isSettingsOpen: boolean
  isMobileView: boolean
  menuData: any[]
  menuDataActivated: any[]

  constructor(
    private menuService: MenuService,
    private store: Store<any>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.menuService.getLeftMenuData().subscribe(menuData => (this.menuData = menuData))
    this.store.pipe(select(Reducers.getSettings)).subscribe(state => {
      this.isLightTheme = state.isLightTheme
      this.isMobileView = state.isMobileView
    })
    this.setActiveMenuItem(this.router.url)
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.setActiveMenuItem(event.url ? event.url : null)
      })
  }

  setActiveMenuItem(event: any) {
    this.menuDataActivated = this.menuData
    // TODO: set active item
  }

  toggleSettings() {
    this.store.dispatch(
      new SettingsActions.SetStateAction({
        isSettingsOpen: !this.isSettingsOpen,
      }),
    )
  }
}
