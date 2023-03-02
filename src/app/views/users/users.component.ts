import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(public myService:AdminService){} 
  users:any;
  //Calling Api [ngOnInit]
  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      {
        next:(res)=>{
          // console.log(res)
          this.users = res;
          // console.log(this.students)
        }
        ,error(err){console.log(err)}
      }
    )
  }


  deleteUser(id:any){
    var res = confirm("Do you want to delete this product?");
    if(res){
      this.myService.deleteUser(id).subscribe(() => {
        location.reload();
      }, error => {
        console.log(error);
      });
    }
  }
}
