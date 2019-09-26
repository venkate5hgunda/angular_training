import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currency: string = 'INR';
  private currencySubject = new BehaviorSubject(this.currency); // new Subject();
  currencyObservable = this.currencySubject.asObservable();

  constructor() { }

  updateCurrency(updatedCurrency: string) {
    this.currency = updatedCurrency;
    this.currencySubject.next(this.currency); // notification
  }
}
