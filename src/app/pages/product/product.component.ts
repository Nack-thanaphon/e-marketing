import { Component } from '@angular/core';
import { ProductService } from '../../service/product/product.component';
import { environment } from '../../../app/environment/environment';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  public products: any;
  public apiUrl = environment.imgUrl;

  constructor(private apiService: ProductService) { }

  ngOnInit() {
    this.apiService.getProducts().subscribe((data: any[]) => {
      this.products = data;
      // console.log(this.products);
    });
  }
}
