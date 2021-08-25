import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[];
  id: string;

  constructor(private productService: ProductService,
              private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(result => {
      this.products = result;
      console.log(result);
    }, error => {console.log(error); });
    this.activeroute.paramMap.subscribe(paramp =>{
      // @ts-ignore
      this.id = paramp.get('id');
    })
  }

// delete(id: string){
//     this.productService.deleteProduct(this.products.id).subscribe()
// }
}
