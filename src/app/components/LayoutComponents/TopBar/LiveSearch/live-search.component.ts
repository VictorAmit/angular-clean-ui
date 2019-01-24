import { Component, ViewChild, ElementRef } from '@angular/core'

@Component({
  selector: 'cui-topbar-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.scss'],
})
export class TopbarLiveSearchComponent {
  @ViewChild('liveSearchInput') liveSearchInput: ElementRef

  showSearch: boolean = false

  constructor() {
    document.addEventListener('keydown', this.handleKeyDown.bind(this), false)
  }

  setVisible() {
    this.showSearch = true
    this.liveSearchInput.nativeElement.focus()
  }

  setHidden() {
    this.showSearch = false
  }

  handleKeyDown(event: any) {
    if (this.showSearch) {
      const key = event.keyCode.toString()
      if (key === '27') {
        this.setHidden()
      }
    }
  }
}
