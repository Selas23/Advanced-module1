import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // productId: number = 0;
  // productId: number | undefined ;
  productid!: number;
  // product: any;

  product: Product = new Product();

  constructor(private productService: ProductService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //this.productId = +this.route.snapshot.paramMap.get('productId') ?? 0;
  const productidParam = this.route.snapshot.paramMap.get('productid');
  this.productid = productidParam ? +productidParam : 0;
  this.retrieveProductById();
  }

  retrieveProductById(): void {
    this.productService.getProductById(this.productid).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }

  saveUpdatedProduct(): void {
    this.productService.saveProduct(this.product).subscribe(
      (response) => {
        console.log('Product updated successfully');
      },
      (error) => {
        console.log('Error updating product:', error);
      }
    );
  }


}