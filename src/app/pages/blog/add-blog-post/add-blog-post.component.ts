import { Component } from '@angular/core'

@Component({
  selector: 'app-blog-feed',
  templateUrl: './add-blog-post.component.html',
})
export class BlogAddBlogPostComponent {
  listOfOption = [
    {
      label: 'Travel',
      value: 'travel',
    },
    {
      label: 'Lifestyle',
      value: 'lifestyle',
    },
  ]
}
