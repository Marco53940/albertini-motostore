import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProductComponent } from "./products/components/add-product/add-product.component";
import { EditProductComponent } from "./products/components/edit-product/edit-product.component";
import { FindProductComponent } from "./products/components/find-product/find-product.component";
import { ListProductsComponent } from "./products/components/list-products/list-products.component";
import { ProductDetailComponent } from "./products/components/product-detail/product-detail.component";

const routes: Routes = [
  { path: "add", component: AddProductComponent },
  { path: "listar", component: ListProductsComponent },
  { path: "listar-uno", component: ProductDetailComponent },
  { path: "buscar", component: FindProductComponent },
  { path: "editar", component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
