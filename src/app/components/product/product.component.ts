import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ViewInputProduct } from '../../models/view-input-product';
import { ViewGetProduct } from '../../models/view-get-product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ProductComponent {
  input: ViewInputProduct = { title: '', price: 0, description: '', category: '', image: '' };
  products: ViewGetProduct[] = [];

  constructor(private productService: ProductService) { }

  create() {
    this.productService.create(this.input).subscribe(
      response => {
        console.log('Product created', response);
        this.list();
      },
      error => {
        console.error('Product creation failed', error);
      }
    );
  }

  list() {
    this.productService.list({}).subscribe(
      response => {
        this.products = response;
      },
      error => {
        console.error('Failed to fetch products', error);
      }
    );
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(
      response => {
        console.log('Product deleted', response);
        this.list();
      },
      error => {
        console.error('Product deletion failed', error);
      }
    );
  }
}