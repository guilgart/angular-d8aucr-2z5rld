import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  itemsQ = this.cartService.getItemsQuantity();

  share() {
    window.alert('Gracias por compartir nuestros productos!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor (private cartService: CartService){ }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/