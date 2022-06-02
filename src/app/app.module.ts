import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CustomerService } from './customers-list/customer.service';

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
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [CustomerService],
  entryComponents: [OrderDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
