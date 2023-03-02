import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  ID=0;
  order:any;//undefined
  products:any;
  constructor(myActivated:ActivatedRoute,private myService:AdminService){
    this.ID = myActivated.snapshot.params["_id"];
    console.log(this.ID);
  }

  ngOnInit(): void {
    this.myService.getOrderByID(this.ID).subscribe(
      {
        next:(res)=>{
          //console.log(res)
          this.order = res;
          this.products = this.order.productIds;
          console.log(this.order);
        },
        error(err){console.log(err)}
      }
    )
  }
}
