import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent {
  @Input() productId!: number;

  // checkBalance() {
  //   if (!this.productId) {
  //     alert('ไม่พบข้อมูล');
  //   } else {
  //     alert('พบข้อมูล');
  //   }
  // }

  // ngOnInit() {
  //   this.checkBalance();
  // }
}
