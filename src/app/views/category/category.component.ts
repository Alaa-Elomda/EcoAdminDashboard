import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  categoryName: any;
  constructor(public fb: FormBuilder, public myService: AdminService) {
    this.addCategoryForm = this.fb.group({
      categoryName: new FormControl('categoryName', [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  categories: any;
  //Calling Api [ngOnInit]
  ngOnInit(): void {
    this.myService.getCategories().subscribe({
      next: (res: any) => {
        //console.log(res)
        this.categories = res;
        console.log(this.categories);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  delete(id: any) {
    var res = confirm('Do you want to delete this category?');
    if (res) {
      this.myService.deleteCategory(id).subscribe(
        () => {
          location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  addCategory() {
    let newCategory = { category: this.categoryName };
    this.myService.addCategory(newCategory).subscribe(
      () => {
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
