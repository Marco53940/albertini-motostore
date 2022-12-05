import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Product[];

  constructor(private service:ProductsService, private router:Router) { }

  ngOnInit() {
    this.service.getProducts().subscribe(data => this.products = data)
  }

  Editar(product:Product){
    localStorage.setItem("id", product.id.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(product:Product){
    localStorage.setItem("id", product.id.toString());
    this.service.deleteProduct(product.id).subscribe(data =>
      {
        if(data.message == 'product deleted'){
          alert('Producto borrado');
          this.ngOnInit();
        }
      },
      error => { alert("No se pudo borrar el producto" + error.error.message);});
  }

  EliminarTodos(){
    if(confirm('Esta seguro de borrar todos los productos?')){
      this.service.deleteAllProducts().subscribe(data =>
        {
          if(data.message == 'products deleted'){
            alert('Productos borrados');
            this.ngOnInit();
          }
        },
        error => { alert("No se pudo borrar el producto" + error.message);});
    }
  }
}
