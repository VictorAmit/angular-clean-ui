import { Component, OnInit } from '@angular/core'

declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-dashboard-alpha',
  templateUrl: './alpha.component.html',
})
export class DashboardAlphaComponent implements OnInit {
  chartCardData = data.chartCardData
  chartCardGraphOptions: object
  paymentAccountsData = data.paymentAccountsData
  paymentCardsData = data.paymentCardsData
  paymentTransactionsData = data.paymentTransactionsData
  pricingItemData = data.pricingItemData
  progressCardsData = data.progressCardsData
  referalsData = data.referalsData
  constructor() {
    this.chartCardGraphOptions = {
      options: {
        axisX: {
          showLabel: false,
          showGrid: false,
          offset: 0,
        },
        axisY: {
          showLabel: false,
          showGrid: false,
          offset: 0,
        },
        showArea: true,
        high: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        chartPadding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
        fullWidth: true,
        height: '110px',
        showPoint: false,
      },
      low: 20,
      type: 'Line',
    }
  }
  ngOnInit() {}
}
