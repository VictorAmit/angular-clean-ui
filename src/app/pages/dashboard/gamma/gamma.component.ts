import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-dashboard-crypto',
  templateUrl: './gamma.component.html',
  styles: [
    `
      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
      }

      .carousel-wrapper {
        /*width: 200px;*/
        position: relative;
      }
    `,
  ],
})
export class DashboardGammaComponent implements OnInit {
  array = [1, 2, 3, 4]

  ngOnInit() {}
}
