import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  productList: any[] = [];
  constructor(private productSerivice: ProductService) {}

  ngOnInit(): void {
    this.getAllProductsFromServer();
  }
  public getAllProductsFromServer() {
    this.productSerivice.getAllProducts().subscribe((data: any) => {
      this.productList = data.products;
      console.log(this.productList);
    });
  }
}
