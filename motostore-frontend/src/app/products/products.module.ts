import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddProductComponent } from "./components/add-product/add-product.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ListProductsComponent } from "./components/list-products/list-products.component";
import { FindProductComponent } from './components/find-product/find-product.component';
import { FormsModule } from "@angular/forms";
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductDetailComponent,
    ListProductsComponent,
    FindProductComponent,
    EditProductComponent
  ],
  imports: [CommonModule,FormsModule],
  exports: [AddProductComponent, ProductDetailComponent, ListProductsComponent],
})
export class ProductsModule {}
