import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
productForm: FormGroup = this.formBuilder.group({
  name: new FormControl('',[Validators.required]),
  quantity: new FormControl('',[Validators.required]),
  comment: new FormControl('',[Validators.required]),
})
  constructor(private productSerivce: ProductService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
Create(){
  const product = this.productForm.value;
  this.productSerivce.createProduct(product).subscribe(success =>alert('thanh cong'))
}
}
