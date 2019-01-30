import { Component, OnInit } from '@angular/core'
import tooltip from 'chartist-plugin-tooltip'

declare var require: any
const data: any = require('./data.json')

@Component({
  selector: 'app-dashboard-alpha',
  templateUrl: './beta.component.html',
})
export class DashboardBetaComponent implements OnInit {
  taskTableData = data.taskTableData
  allChecked = false
  indeterminate = false
  rangeMarks = {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: '70',
    80: '80',
    90: '90',
    100: '100',
  }

  rangeSlider = data.rangeSlider
  weekChartData = data.weekChartData
  weekChartOptions = {
    fullWidth: true,
    showArea: false,
    chartPadding: {
      right: 30,
      left: 0,
    },
    plugins: [
      tooltip({
        seriesName: false,
      }),
    ],
  }

  currentPageDataChange(
    $event: Array<{ name: string; username: number; checked: boolean; disabled: boolean }>,
  ): void {
    this.taskTableData = $event
  }

  refreshStatus(): void {
    const allChecked = this.taskTableData
      .filter(value => !value.disabled)
      .every(value => value.checked === true)
    const allUnChecked = this.taskTableData
      .filter(value => !value.disabled)
      .every(value => !value.checked)
    this.allChecked = allChecked
    this.indeterminate = !allChecked && !allUnChecked
  }

  checkAll(value: boolean): void {
    this.taskTableData.forEach(data => {
      if (!data.disabled) {
        data.checked = value
      }
    })
    this.refreshStatus()
  }
  ngOnInit() {}
}
