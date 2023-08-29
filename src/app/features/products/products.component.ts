import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Product } from './products.interfaces';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);
  products$!: Observable<Product[]>;
  constructor() {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.products$ = this.productsService.getAll();
  }
}
