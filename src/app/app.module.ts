import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { ConversionPipe } from './pipes/conversion.pipe';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ModelDrivenComponent } from './forms/model-driven/model-driven.component';
import { ZipCodeDirective } from './directives/zip-code.directive';

@NgModule({
  declarations: [
    // Components, Directives, Pipes
    AppComponent,
    DemoComponent,
    ProductComponent,
    ProductListComponent,
    CurrencyComponent,
    ConversionPipe,
    TemplateDrivenComponent,
    ModelDrivenComponent,
    ZipCodeDirective
  ],
  imports: [
    // Register Modules whose functionality needs to be used
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // Services
  ],
  bootstrap: [AppComponent] // Bootstrap means setting up/initializing the project
})
export class AppModule { }
