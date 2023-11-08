import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []

  constructor( private productService: ProductService, private cartService : CartService,
  private snackbar: MatSnackBarModule ){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  addToCart (product: Product) : void{
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackbar.open ("Added to Cart")
      }
    });
  }

}
