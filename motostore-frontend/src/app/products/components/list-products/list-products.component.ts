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
}
