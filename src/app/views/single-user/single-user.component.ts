import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent  implements OnInit{
  ID=0;
  user:any;//undefined
  constructor(myActivated:ActivatedRoute,private myService:AdminService){
    this.ID = myActivated.snapshot.params["_id"];
    console.log(this.ID);
  }

  ngOnInit(): void {
    this.myService.getUserByID(this.ID).subscribe(
      {
        next:(res)=>{
          //console.log(res)
          this.user = res;
        },
        error(err){console.log(err)}
      }
    );

  }
}
