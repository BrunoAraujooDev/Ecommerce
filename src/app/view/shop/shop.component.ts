import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];
  auxProdutcs: Product[] = [];

  constructor(
    private service: ProductsService
  ) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(item => {
      this.products = item
      this.auxProdutcs = item
    })
    

  }

  searchProduct(description: string): void{
    
    
    let list = this.products.filter( item => item.name.includes(description))
    console.log('list', list)

    if(list.length !== 0){
      this.products = list
      console.log('oi');
      
    } else {
      this.products = this.auxProdutcs
      console.log('aff');
      
    }
  }

}
