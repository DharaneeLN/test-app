import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
@HostListener('window:resize', ['$event'])
export class OrderDetailsComponent implements OnInit {
  dialogData: any;
  constructor(private dialogRef: MatDialogRef<OrderDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) data: any) {
                this.dialogData = data;
  }

  ngOnInit(): void {
  }

  onResize(event: any): void {
    this.dialogRef.updateSize(this.dialogData.width,  this.dialogData.height);
  }


}
