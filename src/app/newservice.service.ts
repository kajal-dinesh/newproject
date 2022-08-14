import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {

  constructor(private Http:HttpClient) { 
  }
  // api calling
  getItemData(){
    return this.Http.get<any>('https://forbes400.herokuapp.com/api/forbes400/')

  }
  postItemData(data:any){
    return this.Http.post<any>('https://jsonplaceholder.typicode.com/users',data)


  }
  // local storage
  public database:any={
    1000:{ fname: "kajal", lname:"TD", address: "theruparambil", phn: 6235478952,dist : "thrissur", userid: 1000, password: "kajal1000"},
    1001:{fname:'abc',lname:'abc',address:'abcd',phn:4585956258,dist:"abcd",userid:1001,password:'abc'}
};
userData:any=[];
isloggin:boolean=false;

    
  
  getData(){
    return <any>(this.database)
  }
  saveData() {
    if (this.database) {
      localStorage.setItem("database", JSON.stringify(this.database));
    }
  }
  submit(lname:any,fname:any,address:any,phn:any,dist:any,userid:any,password:any){
    let db=this.database
    if(userid in db){
      return false

    }
    else{
      db[userid]=[
        fname,
        lname,
        address,
        phn,
        dist,
        userid,
        password
      ]
      console.log(db)
      this.saveData();
      return true
    }
    

    }
    login(userid:any,password:any){
      this.userData=localStorage.getItem(this.database);
      JSON.parse(this.userData).foreach((element:any)=>{
        if(userid==element.userid && password==element.password){
          this.isloggin=true;
        }
        else{
          this.isloggin=false;
        }
      });
      }
  
    }
     
  



