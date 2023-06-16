import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productId: number = 0;
  product: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  retrieveProductById(): void {
    this.productService.getProductById(this.productId).subscribe(
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













// import { Component, OnInit } from '@angular/core';
// import { Product } from '../model/Product';
// import { ProductService } from '../services/product.service';

// @Component({
//   selector: 'app-update',
//   templateUrl: './update.component.html',
//   styleUrls: ['./update.component.css']
// })
// export class UpdateComponent implements OnInit {

//   product:Product= new Product();
//   constructor(private productService:ProductService){}
//   ngOnInit(): void {
//   }

  //OnInit():void{}

//   onSubmit(){
//     this.getProductByid({this.productid});
//     console.log(this.product);
//   }

//   // onSubmit(){
//   // }

//   getProductByid(){
//   this.productService.getProductByid(this.product.productid).subscribe(data=>{
//     console.log(data);
//   },
//   error=>console.log(error));
//   }

// }
