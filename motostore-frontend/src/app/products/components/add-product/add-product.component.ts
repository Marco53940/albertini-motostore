import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private router:Router, private service:ProductsService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.createProduct(this.product).subscribe(data=>{
      alert("Se Agrego con Exito..!!");
      this.service.buscarProduct(this.product.name)
    .subscribe(data=>{
      this.product=data;
      localStorage.setItem("id2", this.product.id.toString());
      this.router.navigate(["listar-uno"]);
    },error => {
      alert("No se encuentran datos");
  });
    },
    error => {
      alert("No se pudo crear producto" + error.error.message);
    });
    
  }

}
