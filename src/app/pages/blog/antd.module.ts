import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { BlogRouterModule } from './antd-routing.module'

// blog
import { BlogPostComponent } from 'src/app/pages/blog/post/post.component'

const COMPONENTS = [BlogPostComponent]

@NgModule({
  imports: [SharedModule, BlogRouterModule],
  declarations: [...COMPONENTS],
})
export class BlogModule {}
