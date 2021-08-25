import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../model/category';

@Component({
  selector: 'app-edit-categoey',
  templateUrl: './edit-categoey.component.html',
  styleUrls: ['./edit-categoey.component.css']
})
export class EditCategoeyComponent implements OnInit {
categorys: Category;
id: string;
  constructor(private categoryService: CategoryService,
              private activeRoute: ActivatedRoute,
              private formBuider: FormBuilder) { }
  categoryForm: FormGroup = this.formBuider.group({
    name: new FormControl('',[Validators.required]),

  })

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(sucsess=>{
      // @ts-ignore
      this.id = sucsess.get('id');
      console.log(this.id);
      this.categoryService.getById(this.id).subscribe(result =>{
        // @ts-ignore
        this.categorys =result;
      })
    });
    this.categorys={
      name:'',
    }

  }
  Submit() {
    const category = this.categoryForm.value;
    // @ts-ignore
    this.categoryService.updateCategory(this.categorys.id,category).subscribe(sucssess=>alert('thanh cong'))
  }
}
