import { Component } from '@angular/core';
import { SaleService } from '../../services/sale.service';
import { ViewInputSale } from '../../models/view-input-sale';
import { ViewGetSale } from '../../models/view-get-sale';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class SaleComponent {
  input: ViewInputSale = { saleNumber: 0, customer: '', date: new Date(), branch: '', saleItems: [] };
  sales: ViewGetSale[] = [];

  constructor(private saleService: SaleService) { }

  create() {
    this.saleService.create(this.input).subscribe(
      response => {
        console.log('Sale created', response);
        this.list();
      },
      error => {
        console.error('Sale creation failed', error);
      }
    );
  }

  list() {
    this.saleService.list({}).subscribe(
      response => {
        this.sales = response;
      },
      error => {
        console.error('Failed to fetch sales', error);
      }
    );
  }

  delete(id: number) {
    this.saleService.delete(id).subscribe(
      response => {
        console.log('Sale deleted', response);
        this.list();
      },
      error => {
        console.error('Sale deletion failed', error);
      }
    );
  }
}