import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { CustomerService, Name } from './customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customerNames: Name[] = [];
  
  constructor(public dialog: MatDialog, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.customerService.getDummyNamesList()
    .subscribe(names => this.customerNames = names);
  }

  openOrderDetails(selectedName: any, width: any, height: any): void {
    console.log('open dialog', selectedName);
    const dialogData = {
      data: selectedName,
      width: width + 'px',
      height: height + 'px',
    };
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: width + 'px',
      height: height + 'px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
