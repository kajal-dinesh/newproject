import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewserviceService } from '../newservice.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private Http:HttpClient,private db:NewserviceService) { }
  UserData:any=[]

  ngOnInit(): void {
    this.db.getItemData().subscribe((result)=>{
      console.log(result);
      this.UserData=result;
      console.log(this.UserData);
    })
  }
//   post(){
//     this.db.postItemData(this.data).subscribe((result)=>{
//       this.UserData.push(result)
//       alert("submit successfully")
    
//     })
// }
// data={
//   rank:'',
//   personName:'',
//   finalWorth:'',
//   gender:'',
//   countryOfCitizenship:'',
//   source:'',

// }

}
