import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private router:Router, private service:ProductsService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getProductId(+id)
    .subscribe(data=>{
      this.product=data;
    });
}

Guardar(product:Product){
  this.service.updateProduct(product)
  .subscribe(data=>{
    this.product=data;
    alert("Se Actualizo con Exito...!!!");
    localStorage.setItem("id2", this.product.id.toString());
    this.router.navigate(["listar-uno"]);
  });
}
}
