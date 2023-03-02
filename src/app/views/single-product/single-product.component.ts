import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  ID=0;
  product:any;//undefined
  constructor(myActivated:ActivatedRoute,private myService:AdminService){
    this.ID = myActivated.snapshot.params["_id"];
    console.log(this.ID);
  }

  ngOnInit(): void {
    this.myService.getProductByID(this.ID).subscribe(
      {
        next:(res)=>{
          //console.log(res)
          this.product = res;
        },
        error(err){console.log(err)}
      }
    )
  }
}
