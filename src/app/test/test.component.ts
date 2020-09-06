import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  name='ghassen';
  constructor(private userService:UserService){}
  userList=[];
  booklist=[];
  mycondition=false;

  ngOnInit(): void {
    this.userService.getallusers().subscribe(
      result=>{this.userList=result;},
      error=>{console.log(error);}
    )
  }
  hello(myname:string){
    alert('hello '+myname)
  }
}
