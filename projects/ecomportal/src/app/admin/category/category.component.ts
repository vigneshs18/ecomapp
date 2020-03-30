import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { CategoryService } from '../../shared/service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catList: any;
  constructor(private categoryService: CategoryService,
              private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      if (result.status === 'success') {
        this.catList = result.data;
      }
    });
  }

  saveCategories(category: any) {
    this.categoryService.postCategories(category).subscribe((result) => {
      // console.log(result);
      this.snackbar.open(result.message, 'Category', {
        duration: 1000
      });
      this.loadCategories();
    });
  }

}
