import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversion'
})
export class ConversionPipe implements PipeTransform {

  transform(value: number, code: string = 'INR'): number {
    if (isNaN(value)) {
      return value;
    }
    return this.convertPrice(value, code);
  }

  convertPrice(price: number, code: string) {
    switch (code) {
      case 'USD': price /= 70; break;
      case 'GBP': price /= 87; break;
      case 'EUR': price /= 87; break;
      case 'AUD': price /= 51; break;
    }
    return price;
  }

}
