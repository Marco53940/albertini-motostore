import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../model/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.css']
})
export class FindProductComponent implements OnInit {

  product:Product = new Product();

  constructor(private router:Router, private service:ProductsService) { }

  ngOnInit() {
  }


  Buscar(product){
  this.service.buscarProduct(product.name)
  .subscribe(data=>{
    this.product=data;
    localStorage.setItem("id2", this.product.id.toString());
    this.router.navigate(["listar-uno"]);
  },error => {
    alert("No se encuentran datos");
});  
  }

}
