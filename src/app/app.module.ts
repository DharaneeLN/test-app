import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

import { HomeComponent } from './home/home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CustomerService } from './customers-list/customer.service';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomersListComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularMultiSelectModule
  ],
  providers: [CustomerService, HomeService],
  entryComponents: [OrderDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
