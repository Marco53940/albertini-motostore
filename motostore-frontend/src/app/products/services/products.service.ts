import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient, private cookies: CookieService) { }

  Url='http://localhost:3000';

  getProducts(){
    return this.http.get<Product[]>(this.Url + '/allproducts');
  }

  createProduct(Product:Product){
    return this.http.post<Product>(this.Url + '/product',Product);
  }

  buscarProduct(name:String){
    return this.http.get<Product>(this.Url+"/products/name/"+name);
  }
  
  getProductId(id:number){
    return this.http.get<Product>(this.Url+"/products/"+id);
  }

  updateProduct(Product:Product){
    return this.http.put<Product>(this.Url+"/product/"+Product.id,Product);
  }

  deleteProduct(id:number) {
    return this.http.delete<any>(this.Url + '/product/'+id);
  }

  deleteAllProducts() {
    return this.http.post<any>(this.Url + '/product/all',null);
  }


}
