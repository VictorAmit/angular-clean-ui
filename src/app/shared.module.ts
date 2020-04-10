import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

// acl
import { ACLComponent } from 'src/app/components/layout/ACL/acl.component'

const MODULES = [CommonModule, RouterModule, NgZorroAntdModule, TranslateModule]

@NgModule({
  imports: [...MODULES],
  declarations: [ACLComponent],
  exports: [...MODULES],
})
export class SharedModule {}
