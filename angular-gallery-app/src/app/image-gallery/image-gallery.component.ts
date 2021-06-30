import {Component, Inject, OnInit, Optional} from '@angular/core';
import {GalleryConfig} from './token';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg',
    'https://elead.com.vn/wp-content/uploads/2020/04/tai-anh-thien-nhien-20-1400x788-3.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAq6OK-zdI8PM94i8eYqncx56qY2UTaze8RA&usqp=CAU',
    'https://internetviettel.vn/wp-content/uploads/2017/05/4-1.jpg',
    'https://internetviettel.vn/wp-content/uploads/2017/05/4-1.jpg',
    'https://internetviettel.vn/wp-content/uploads/2017/05/4-1.jpg',
    'https://internetviettel.vn/wp-content/uploads/2017/05/4-1.jpg',
    'https://internetviettel.vn/wp-content/uploads/2017/05/4-1.jpg',
    // 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    // 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    // 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    // 'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  itemWidth: number | undefined;
  config = 4;
  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit() {
    this.itemWidth = 100 / this.config;
  }
}
