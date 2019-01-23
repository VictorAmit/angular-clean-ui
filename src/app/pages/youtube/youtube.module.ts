import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { YoutubeRouterModule } from './youtube-routing.module'

// youtube
import { YoutubeFeedComponent } from 'src/app/pages/youtube/feed/feed.component'
import { YoutubeViewComponent } from 'src/app/pages/youtube/view/view.component'

const COMPONENTS = [YoutubeFeedComponent, YoutubeViewComponent]

@NgModule({
  imports: [SharedModule, YoutubeRouterModule],
  declarations: [...COMPONENTS],
})
export class YoutubeModule {}
