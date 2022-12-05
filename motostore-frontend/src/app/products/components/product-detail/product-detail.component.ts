import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;

  constructor(private router:Router, private service:ProductsService) { }

  ngOnInit(): void {
    this.Cargar();
    
  }

Cargar(){
  let id=localStorage.getItem("id2");
  this.service.getProductId(+id)
  .subscribe(data=>{
    this.product=data;
    console.log("data  id recibida");
  });
}

Editar(product:Product){
  localStorage.setItem("id2", product.id.toString());
  this.router.navigate(["editar"]);
}

Eliminar(product:Product){
  localStorage.setItem("id", product.id.toString());
  this.service.deleteProduct(product.id).subscribe(data =>
    {
      if(data.message == 'product deleted'){
        alert('Producto borrado');
        this.router.navigate(["listar"]);
      }
    },
    error => { alert("No se pudo borrar el producto" + error.error.message);});
}

}
