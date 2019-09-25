import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  currentCurrency: string = 'INR';
  @Output() currCode = new EventEmitter();

  collectCurrency(currencyCollected) {
    console.log('currency previous: ', this.currentCurrency, currencyCollected);
    this.currentCurrency = currencyCollected.currencySelection;
    console.log('currency selected: ', this.currentCurrency);
    this.currCode.emit({ data: this.currentCurrency });
  }

}

