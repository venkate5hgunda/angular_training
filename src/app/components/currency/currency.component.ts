import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies: string[] = ['INR', 'USD', 'GBP', 'AUD'];
  // @Output() selectedCurrency = new EventEmitter();

  currencySelected(currencySelection) {
    console.log('currency change', currencySelection);
    // this.selectedCurrency.emit({currencySelection}); // Using DataSharingService instead of emitting
    this.cService.updateCurrency(currencySelection);
  }

  constructor(private cService: CurrencyService) { }

  ngOnInit() {
  }

}
