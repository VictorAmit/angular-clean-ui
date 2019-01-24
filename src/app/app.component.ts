import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd, ActivatedRoute, ActivationEnd } from '@angular/router'
import { Title } from '@angular/platform-browser'
import { filter, map, mergeMap } from 'rxjs/operators'
import { Store } from '@ngrx/store'
import * as SettingsActions from 'src/app/store/settings/actions'

@Component({
  selector: 'app-root',
  template: `
    <ng-progress></ng-progress>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private store: Store<any>,
  ) {}

  ngOnInit() {
    // set page title from router data variable
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild
          }
          return route
        }),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild
          }
          return route
        }),
        filter(route => route.outlet === 'primary'),
        mergeMap(route => route.data),
      )
      .subscribe(event => this.titleService.setTitle('Clean UI | ' + event['title']))

    // listen url query params and set them to ngrx store
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) => {
        const queryParams = { ...event.snapshot.queryParams }
        const keys = Object.keys(queryParams)
        if (keys.length) {
          keys.forEach(key => {
            this.store.dispatch(
              new SettingsActions.SetStateAction({
                [key]: queryParams[key] === 'true',
              }),
            )
          })
        }
      })
  }
}
