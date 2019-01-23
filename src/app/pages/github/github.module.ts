import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { GithubRouterModule } from './github-routing.module'

// github
import { GithubDiscussComponent } from 'src/app/pages/github/discuss/discuss.component'
import { GithubExploreComponent } from 'src/app/pages/github/explore/explore.component'

const COMPONENTS = [GithubDiscussComponent, GithubExploreComponent]

@NgModule({
  imports: [SharedModule, GithubRouterModule],
  declarations: [...COMPONENTS],
})
export class GithubModule {}
