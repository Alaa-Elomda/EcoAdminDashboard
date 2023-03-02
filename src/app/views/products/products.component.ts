import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { catchError, tap, throwError } from 'rxjs';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  faSearch = faSearch;
  products:any;
  x:any;
  constructor(public myService:AdminService){} 

  ngOnInit(): void {
    this.myService.getAllProducts().subscribe(
      {
        next:(res)=>{
          // console.log(res)
          this.products = res;
          // console.log(this.students)
        }
        ,error(err){console.log(err)}
      }
    )
  }

  filter(str:any){
    console.log(this.x);
    this.x=str;
  }

  delete(id:any){
    var res = confirm("Do you want to delete this product?");
    if(res){
      this.myService.deleteProduct(id).subscribe(() => {
        location.reload();
      }, error => {
        console.log(error);
      });
    }
  }

}
