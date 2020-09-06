import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {


  peoplelist=[
    {
      firstname:"ayoub",
      lastname:"ghozi",
      phone:"00 216 85 129 359"
    },
    {
      firstname:"djingo",
      lastname:"el Damdoum",
      phone:"00 216 30 001 001"
    },
    {
      firstname:"Wajih",
      lastname:"CM",
      phone:"00 216 22 000 022"
    },
    {
      firstname:"kamel",
      lastname:"CJ",
      phone:"00 216 33 033 000"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  delete(i:number){
    this.peoplelist.splice(i,1);
  }

}
