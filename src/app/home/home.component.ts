import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularMultiSelect } from 'angular2-multiselect-dropdown';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemListForLoader: any[] = [];
  itemListForScroll: any[] = [];
  namesList: string[] = [];
  selectedItemForScroll: any[] = [];
  selectedItemsForLoader: any[] = [];
  settingsForScroll = {
    text: 'Select Items',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    singleSelection: true,
    enableSearchFilter: true,
    lazyLoading: true,
    badgeShowLimit: 4
  };
  settingsForLoader = {
    text: 'Select Items',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    lazyLoading: true,
    tagToBody: true,
    badgeShowLimit: 4
  };
  loading = false;
  indices: any;
  readonly bufferSize: number = 10;
  @ViewChild('dropdownElem', {static: true}) dropdownElem: AngularMultiSelect;
  constructor(private appService: HomeService) { }

  ngOnInit(): void {
    this.itemListForScroll = [];
    this.itemListForLoader = [];
    this.namesList = [];
    this.namesList = this.appService.getSampleNamesList();
    this.namesList.forEach((element, index) => {
      const tempObj = {
        id: index,
        itemName: this.namesList[Math.floor(Math.random() * this.namesList.length)]
      };
      this.itemListForScroll.push(tempObj);
    });
    this.selectedItemForScroll.push(this.itemListForScroll[0]);
    this.selectedItemsForLoader = [];
  }

  onItemSelect(item: any): void {
    console.log(item);
  }
  OnItemDeSelect(item: any): void {
    console.log(item);
  }
  onSelectAll(items: any): void {
    console.log(items);
  }
  onDeSelectAll(items: any): void {
    console.log(items);
    this.dropdownElem.closeDropdown();
  }

  fetchMore(event: any): void {
    console.log('called');
    if (event.endIndex === this.itemListForLoader.length - 1) {
      this.loading = true;
      this.appService.getChunkData(this.itemListForLoader.length, this.bufferSize).then(chunk => {
        this.itemListForLoader = this.itemListForLoader.concat(chunk);
        this.loading = false;
      }, () => this.loading = false);
    }
  }

}
