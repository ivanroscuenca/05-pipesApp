import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  public isUpper: boolean = false;

  public toogleUppercase(): void {
    this.isUpper = !this.isUpper;
  }
}
