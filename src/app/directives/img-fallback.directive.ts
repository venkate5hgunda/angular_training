import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {
// <img src="iamges/image.jpg" appImageFallback />
  constructor(private elemRef: ElementRef) { }

  @HostListener('error')
  changeImage() {
    const image: HTMLImageElement = this.elemRef.nativeElement;
    image.src = 'assets/350x225.png';
  }
}
