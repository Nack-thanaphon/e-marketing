import { Component, OnInit } from '@angular/core';
import { AdsPaymentApi } from '../../service/ads-payment/ads-payment.component';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  percentage: number = 90;
  public data: any;

  constructor(private apiService: AdsPaymentApi) {}

  ngOnInit() {
    this.apiService.getSomeData().subscribe((data: any) => {
      this.data = data.data;
      console.log(data);
    });
  }
}
