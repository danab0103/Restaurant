import { Component } from '@angular/core';

interface Item{
  src:string;
  alt:string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']})
export class GalleryComponent {
  constructor() { };
  ngOnInit(): void{};
  photos : Item[] = [  { src: 'assets/images/1.jpg', alt: 'Description of photo 1' }, 
              { src: 'assets/images/2.jpg', alt: 'Description of photo 2' },
              { src: 'assets/images/3.jpg', alt: 'Description of photo 3' },
              { src: 'assets/images/4.jpg', alt: 'Description of photo 4' }, 
              { src: 'assets/images/5.jpg', alt: 'Description of photo 5' }, 
              { src: 'assets/images/6.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/7.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/8.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/9.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/10.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/11.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/12.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/13.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/14.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/15.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/16.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/17.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/18.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/19.jpg', alt: 'Description of photo 6' },
              { src: 'assets/images/20.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/21.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/22.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/23.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/24.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/25.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/26.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/27.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/28.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/29.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/30.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/31.JPG', alt: 'Description of photo 6' },
              { src: 'assets/images/32.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/33.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/34.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/35.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/36.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/37.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/38.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/39.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/40.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/41.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/42.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/43.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/44.jpeg', alt: 'Description of photo 6' },
              { src: 'assets/images/45.jpeg', alt: 'Description of photo 6' }
            ];
   previewImage = false;
   showMask = false;
   currentImage:Item=this.photos[0];
   currentIndex=0;
   controls=true;
   showCount=false;
   totalImage = this.photos.length;
  openDialog(index:number): void {
    this.showMask = true;
    this.previewImage = true;
    this.showCount = true;
    this.currentIndex = index;
    this.currentImage = this.photos[index];
  }

  closePreview():void{
    this.showMask=false;
    this.previewImage=false;
  }
  // Function to navigate to the previous image
  previousImage():void {
    this.currentIndex=this.currentIndex-1;
    if(this.currentIndex<0)
    this.currentIndex=this.totalImage-1;
  this.currentImage=this.photos[this.currentIndex ];
  }
  
  // Function to navigate to the next image
  nextImage() {
    this.currentIndex=this.currentIndex+1;
    if(this.currentIndex>this.totalImage-1)
    this.currentIndex=0;
  this.currentImage=this.photos[this.currentIndex ];
  }
          }


