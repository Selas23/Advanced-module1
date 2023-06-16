import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  saveProduct(product: Product): Observable<Object> {
    return this.http.post("http://localhost:8080/product/api.2.0/create", product);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/product/api.2.0/retrieve/all");
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
