import { Component } from '@angular/core'
declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-ecommerce-dashboard',
  templateUrl: './dashboard.component.html',
})
export class EcommerceDashboardComponent {
  ordersGraph = data.ordersGraph
  amountGraph = data.amountGraph
  ordersInfo = data.ordersInfo
  amountInfo = data.amountInfo
  bestsellersData = data.bestsellersData
  mostViewedData = data.mostViewedData
  newCustomersData = data.newCustomersData
  topCustomersData = data.topCustomersData
  lastOrdersData = data.lastOrdersData
  lastSearchData = data.lastSearchData
  topSearchData = data.topSearchData

  chartistOptions = {
    fullWidth: true,
    showArea: true,
    chartPadding: {
      right: 30,
      left: 0,
    },
  }

  ordersGraphData = {
    labels: this.ordersGraph.labels,
    datasets: [
      {
        label: 'Orders',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.ordersGraph.series,
      },
    ],
  }
  amountGraphData = {
    labels: this.amountGraph.labels,
    datasets: [
      {
        label: 'Amount',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: this.amountGraph.series,
      },
    ],
  }

  lineOptions = {
    legend: {
      display: false,
    },
  }

  ordersSelectValue = 'lastDay'
}
