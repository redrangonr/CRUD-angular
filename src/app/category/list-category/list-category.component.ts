import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
categorys: Category[];
id: string;
  constructor(private categoryService: CategoryService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(result => {
      this.categorys = result;
      console.log(result);
    }, error => {console.log(error); });
    this.activeRoute.paramMap.subscribe(paramp =>{
      // @ts-ignore
      this.id = paramp.get('id');
    })
  }

}
