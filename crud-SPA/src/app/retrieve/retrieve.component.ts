import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  router: any;

  constructor(private services: ProductService){}
  products: Product[]=[];

  ngOnInit(): void {
    this.products= this.getProducts();
  }

  getProducts():any{
    this.services.getProducts().subscribe((products)=>{
    this.products = products;
  });
}

// navigateToUpdatePage(productid: number): void {
//   this.router.navigate(['/update', productid]);
// }

}
