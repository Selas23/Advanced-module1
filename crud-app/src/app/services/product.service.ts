import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../model/Product' 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/product/api.2.0/retrieve/all");
  }

  saveProduct(product: Product): Observable<Object> {
    return this.http.post("http://localhost:8080/product/api.2.0/create", product);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/product/api.2.0/retrieve/${id}`);
  }

  updateProduct(product: Product): Observable<Object> {
    return this.http.put(`http://localhost:8080/product/api.2.0/update/${product.productid}`, product);
  }

 

  deleteproduct(id:number):Observable<Object>{
    return this.http.delete(`http://localhost:8080/product/api.2.0/delete/${id}`);
   }

}











// import { Injectable } from '@angular/core';

// import { HttpClient } from '@angular/common/http'

// import { Product } from '../model/Product'
// import { Observable } from 'rxjs/internal/Observable';


// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   private baseUrl = 'http://localhost:8080/product/api.2.0/retrieve';

//   constructor(private http: HttpClient ) { }


// getProducts(){
//   return this.http.get<Product[]>("http://localhost:8080/product/api.2.0/retrieve/all")
// }

// saveProduct(product:Product):
//   Observable<Object>{
//     return this.http.post("http://localhost:8080/product/api.2.0/create",
//     product);
//   }

// getProductByid(productid: number): Observable<any>{
//   const url = `${this.baseUrl}/${productid}`;
//   return this.http.get<Product[]>(url);
// }

// updateProduct(){
//   Observable<Object>{
//     return this.http.put("http://localhost:8080/product/api.2.0/update",
//     product);
// }

// updateProduct(data: any): Observable<any> {
//   const url1 = `${this.baseUrl}/${data.id}`;
//   return this.http.put(url1, data);
// }

// }