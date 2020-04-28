import { NgModule } from '@angular/core'
import { NgZorroAntdModule } from 'ng-zorro-antd'
// import { NzButtonModule } from 'ng-zorro-antd/button'
// import { NzIconModule } from 'ng-zorro-antd/icon'
// import { NzGridModule } from 'ng-zorro-antd/grid'

const MODULES = [NgZorroAntdModule]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class AntdModule {}
