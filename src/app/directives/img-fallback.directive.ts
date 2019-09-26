import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {
// <img src="images/image.jpg" appImageFallback />
// <img src="images/image.jpg" appImageFallback="default.jpg" />
// <img src="images/image.jpg" [appImageFallback]="default.jpg" />

  @Input() appImgFallback: string;

  constructor(private elemRef: ElementRef) { }

  @HostListener('error')
  changeImage() {
    const image: HTMLImageElement = this.elemRef.nativeElement;
    image.src = this.appImgFallback || 'assets/350x225.png';
  }
}
