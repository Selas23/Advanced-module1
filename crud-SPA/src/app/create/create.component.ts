// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { Product } from '../model/Product';
// import { ProductService } from '../service/product.service';

// @Component({
//   selector: 'app-create',
//   templateUrl: './create.component.html',
//   styleUrls: ['./create.component.css']
// })
// export class CreateComponent implements OnInit {
//   createProductForm!: FormGroup;
//   product: Product = new Product();

//   constructor(
//     private formBuilder: FormBuilder,
//     private productService: ProductService
//   ) {}

//   ngOnInit(): void {
//     this.createProductForm = this.formBuilder.group({
//       name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
//       description: ['', [Validators.required]],
//       price: ['', [Validators.required]],
//       qty: ['', [Validators.required]]
//     });
//   }

//   onSubmit() {
//     if (this.createProductForm.invalid) {
//       return;
//     }

//     this.saveProduct();
//     console.log(this.product);
//   }

//   saveProduct() {
//     this.productService.saveProduct(this.product).subscribe(
//       (data) => {
//         console.log(data);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }
// }
















import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{
  
  product:Product= new Product();

  constructor(private productService:ProductService){}
  ngOnInit(): void {
  }
  //OnInit():void{}
  onSubmit(){
    this.saveProduct();
    console.log(this.product);
  }

  // onSubmit(){
  // }

saveProduct(){
  this.productService.saveProduct(this.product).subscribe(data=>{
    console.log(data);
  },
  error=>console.log(error));
  }


}
