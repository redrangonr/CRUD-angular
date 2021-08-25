import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
categoryForm: FormGroup = this.formBuilder.group({
  name: new FormControl('',[Validators.required]),
})

  constructor(private categoryService: CategoryService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }
Create(){
  const category = this.categoryForm.value;
  this.categoryService.createCategory(category).subscribe(sucssecc =>alert('thnah cong'))
}
}
