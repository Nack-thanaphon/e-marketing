import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  startDate!: Date; // Add the ! to tell TypeScript that this property will be initialized
  endDate!: Date; // Add the ! to tell TypeScript that this property will be initialized

  constructor() {
    this.startDate = new Date(); // Initialize the startDate property in the constructor
    this.endDate = new Date(); // Initialize the startDate property in the constructor
  }

  ngOnInit(): void {}
}
