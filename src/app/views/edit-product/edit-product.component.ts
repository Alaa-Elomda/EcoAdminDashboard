import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  //editProductForm: FormGroup;
  ID = 1;
  Name = '';
  Price = 0;
  Sale = 0;
  Quantity = 0;
  Description = '';
  Category = '';
  inStock = '';
  Image: any;
  product: any;
  changePhoto = false;
  choosen = false;
  submitted = false;
  image: any;
  editProductForm: FormGroup;
  categories: any;

  constructor(
    public fb: FormBuilder,
    myActivated: ActivatedRoute,
    private myService: AdminService,
    private router: Router
  ) {
    this.ID = myActivated.snapshot.params['_id'];
    this.editProductForm = this.fb.group({
      name: new FormControl('Name', [
        Validators.required,
        Validators.minLength(3),
      ]),
      price: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+(.[0-9]{1,2})?$'),
      ]),
      sale: 0,
      quantity: new FormControl(0, [
        Validators.required,
        Validators.pattern('^[0-9]+?$'),
      ]),
      description: [''],
      category: new FormControl('', [Validators.required]),
      productImage: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.myService.getProductByID(this.ID).subscribe({
      next: (res: any) => {
        console.log(res);
        // console.log(res.inStock)
        this.product = res;
        this.Name = res.name;
        this.Price = res.price;
        this.Sale = res.sale;
        this.Quantity = res.quantity;
        this.Description = res.description;
        this.Category = res.category;
        this.Image = res.imgURL;
        this.inStock = res.inStock;
        console.log(this.inStock);
      },
      error(err) {
        console.log(err);
      },
    });

    this.myService.getCategories().subscribe({
      next: (res: any) => {
        // console.log(res)
        this.categories = res;
        console.log(this.categories);
      },
      error(err) {
        console.log(err);
      },
    });
    this.getSelectedCateory(event);
  }

  Edit(
    name: any,
    price: any,
    sale: any,
    quantity: any,
    description: any,
    inStock: any,
    category: any
  ) {
    let product = {
      name,
      price,
      sale,
      quantity,
      description,
      inStock,
      category,
    };
    this.myService.UpdateProductByID(this.ID, product).subscribe(() => {
      this.router.navigate(['/products']);
    });
    console.log(this.Category);
  }

  openFile() {
    document.getElementById('input_file')!.click();
  }
  fileChoosen(event: any) {
    if (event.target.value) {
      this.image = <File>event.target.files[0];
      this.choosen = true;
      this.submitPhoto();
      // document.getElementById('route')!.click();
    }
  }

  submitPhoto() {
    let fd = new FormData();
    this.submitted = true;
    if (this.image) {
      fd.append('productImage', this.image, this.image.name);
      this.myService.UpdateProductImage(this.ID, fd).subscribe(() => {
        location.reload();
      });
    }
    console.log(fd);
  }

  getSelectedCateory(event: any) {
    if (event.target.value) {
      this.editProductForm.get('category')!.setValue(event.target.value);
    } else {
      this.editProductForm.get('category')!.setValue(this.Category);
    }

    console.log(this.editProductForm);
  }

  getStock(event: any) {
    this.editProductForm.get('inStock')!.setValue(event.target.value);
    console.log(this.editProductForm);
  }

  onSubmit() {
    if (this.editProductForm.invalid) return;
  }
  get nameValid() {
    return this.editProductForm.controls['name'].valid;
  }

  get priceValid() {
    return this.editProductForm.controls['price'].valid;
  }
  get quantityValid() {
    return this.editProductForm.controls['quantity'].valid;
  }
  get categoryValid() {
    return this.editProductForm.controls['category'].valid;
  }

  get imageValid() {
    return this.editProductForm.controls['productImage'].valid;
  }
}
