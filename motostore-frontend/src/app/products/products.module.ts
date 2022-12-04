import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ListProductsComponent } from './components/list-products/list-products.component';

@NgModule({
  declarations: [ AddProductComponent, ProductDetailComponent, ListProductsComponent],
  imports: [
    CommonModule
  ]
})
export class ProductsModule { }
