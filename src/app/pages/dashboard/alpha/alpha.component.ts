import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-dashboard-alpha',
  template: `<div>Dashboard Alpha</div>`,
})
export class DashboardAlphaComponent implements OnInit {
  ngOnInit() {
    console.log(123)
  }
}