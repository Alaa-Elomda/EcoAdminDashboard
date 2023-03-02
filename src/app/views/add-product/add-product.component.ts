import { Component, isDevMode, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm: FormGroup;
  categories:any;
  selectedCategory:any;
  //productAdded:boolean=false;
  constructor(public fb: FormBuilder,private myService: AdminService,private router: Router){
    // this. addProductForm = this.fb.group({
    //   name: [''],
    //   price: 0,
    //   sale: 0,
    //   quantity:0,
    //   description: [''],
    //   category: [''],
    //   productImage: [null],
    // });

    this. addProductForm = this.fb.group({
      name:  new FormControl("Name",[Validators.required,Validators.minLength(3)]),
      price: new FormControl(0,[Validators.required,Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')]),
      sale: 0,
      quantity:new FormControl(0,[Validators.required,Validators.pattern('^[0-9]+?$')]),
      description: [''],
      category: new FormControl("",[Validators.required]),
      productImage:new FormControl("",[Validators.required]),
    });
  }

  //  validateProductForm = new FormGroup({
//    name: new FormControl("Name",[Validators.required,Validators.minLength(3)]),
//     price: new FormControl(null,[Validators.required]),
//     quantity: new FormControl(null,[Validators.required]),
//     description: new FormControl(null,[Validators.required]),
//     image: new FormControl(null,[Validators.required]),
//  })

  ngOnInit(): void {
    this.myService.getCategories().subscribe(
      {
        next:(res:any)=>{
          // console.log(res)
          this.categories = res;
          console.log(this.categories);
        }
        ,error(err){console.log(err)}
      }
    )
   this.getSelectedCateory(event);
  }

  uploadFile(event:any) {
    const file = (event.target as HTMLInputElement).files![0];
    this. addProductForm.patchValue({
      productImage: file,
    });
    this.addProductForm.get('productImage')!.updateValueAndValidity();
  }
  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append('name', this. addProductForm.get('name')!.value);
  //   formData.append('price', this. addProductForm.get('price')!.value);
  //   formData.append('sale', this. addProductForm.get('sale')!.value);
  //   formData.append('quantity', this. addProductForm.get('quantity')!.value);
  //   formData.append('description', this. addProductForm.get('description')!.value);
  //   formData.append('category', this. addProductForm.get('category')!.value);
  //   formData.append('productImage', this. addProductForm.get('productImage')!.value);
  //   this.myService.AddNewProduct(formData).subscribe({
  //       next: (response:any) => console.log(response),
  //       error: (error:any) => console.log(error),
  //     });
  // }

  async submitForm() {
    try {
      const formData: any = new FormData();
      formData.append('name', this.addProductForm.get('name')!.value);
      formData.append('price', this.addProductForm.get('price')!.value);
      formData.append('sale', this.addProductForm.get('sale')!.value);
      formData.append('quantity', this.addProductForm.get('quantity')!.value);
      formData.append('description', this.addProductForm.get('description')!.value);
      formData.append('category', this.addProductForm.get('category')!.value);
      formData.append('productImage', this.addProductForm.get('productImage')!.value);
  
     
      const result = await new Promise<void>((resolve, reject) => {
      //   if(this.nameValid && this.priceValid && this.quantityValid && this.categoryValid&& this.imageValid)
      //  {
        this.myService.AddNewProduct(formData).subscribe({
          next: () => {
            // Resolve the Promise when form submission is successful
            resolve();
          },
          error: (error) => {
            // Reject the Promise when form submission fails
            reject(error);
          },
        });
  //    }
      });
    
    
  
      // Redirect to the products page after the Promise resolves
      this.router.navigate(['/products']);
  
    } catch (error) {
      console.log(error);
    }
  }

  getSelectedCateory(event: any) {
    this.addProductForm.get('category')!.setValue(event.target.value);
    console.log(this.addProductForm);
  }


onSubmit(){
  if(this.addProductForm.invalid)
  return;
}
  get nameValid(){
    return this.  addProductForm.controls["name"].valid;
  }

  get priceValid(){
    return this.  addProductForm.controls["price"].valid;
  }
  get quantityValid(){
    return this.  addProductForm.controls["quantity"].valid;
  }
  get categoryValid(){
    return this.  addProductForm.controls["category"].valid;
  }

  get imageValid(){
    return this.  addProductForm.controls["productImage"].valid;
  }

}

