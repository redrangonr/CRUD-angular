import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {compareSegments} from '@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  products: Product;
  // productForm: FormGroup;
  id: string;

  constructor(private productService: ProductService,
              private activeRoute: ActivatedRoute,
              private formBuilder: FormBuilder) {
  //   this.activeRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //     // @ts-ignore
  //     this.id = +paramMap.get('id');
  //     this.getProduct(this.id)
  //   });
  }

productForm: FormGroup = this.formBuilder.group({
  name: new FormControl('',[Validators.required]),
  quantity: new FormControl('',[Validators.required]),
  comment: new FormControl('',[Validators.required]),
})


  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(paramap => {
      // @ts-ignore
      this.id = paramap.get('id');
      console.log(this.id);
      this.productService.getById(this.id).subscribe(result => {
        this.products = result;
        console.log(result);
      }, error => {
        console.log(error);
      });
    });
    this.products = {
      name: '',
      quantity: '',
      comment: '',
    }
  }

  // getProduct(id: string) {
  //   return this.productService.getById(this.id).subscribe(result => {
  //     this.productForm = new FormGroup({
  //       name: new FormControl(result.name),
  //       quantity: new FormControl(result.quantity),
  //       comment: new FormControl(result.comment)
  //     });
  //   });
  // }


  Submit() {
const product = this.productForm.value;
console.log(product);
// @ts-ignore
    this.productService.updateProduct(this.products.id,product).subscribe(() =>{
  alert("thanh cong")
})
  }

}
