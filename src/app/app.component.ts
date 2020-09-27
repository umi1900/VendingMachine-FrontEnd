import { Observable } from "rxjs";
import { SodaService } from "./sodaservice";
import { Soda} from "./soda";
import {Report} from "./report";
import {ReportService} from "./reportservice";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

import {formatDate } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  sodas: Soda[];
  total: number=0;
  today= new Date();
  todaysDataTime = '';
   report:Report= new Report;
  
  constructor(private sodaService: SodaService,
    private router: Router,private tt:ReportService) {

  

    }

  ngOnInit() {
    
     
    this.sodaService.getSodaList().subscribe((sodas)=>
{   this.sodas=sodas; 
  sodas[0].name="popop";
  
  console.log(sodas[0].name)  ;   
     

}


    )

  }

  getQuarter()
  {
    this.total += 0.25;
  }
  getChange()
  {
    this.total=0;
  }

  soldS1()
  {        if(this.sodas[0].qty<1)
    {
                     alert("Out Of Stock !");
    }

  else  if(this.total>=1.25)
    {
     
      
      this.sodaService.soldSoda(1,this.sodas[0]).subscribe();
      this.sodaService.getSodaList().subscribe((sodas)=>
      {   this.sodas=sodas; 
        
           
      
      });
    
      this.total -= 1.25;
     
      this.save();
      alert("You Successfuly Got the Soda!\n Collect Your Total ="+this.total+"\n Thanks!");
      window.location.reload();
     

    }
   
    else 
    {
      alert("Insert More Quarter !");
    }

  }
  save() {
    this.report = new Report();
     this.report.report="Sold The soda for $ 1.5 "+  formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    this.tt.createReport(this.report).subscribe(data => {
      console.log(data)
      
     
    }, 
    error => console.log(error));
  }
  soldS2()
  {
    if(this.sodas[1].qty<1)
    {
                     alert("Out Of Stock !");
    }

  else 
    if(this.total>=1.25)
    {
      this.total -= 1.25
   
      this.sodaService.soldSoda(2,this.sodas[1]).subscribe();
     
      this.sodaService.getSodaList().subscribe((sodas)=>
      {   this.sodas=sodas; 
        
           
      
      });
      this.save();
      alert("You Successfuly Got the Soda!\n Collect Your Total ="+this.total+"\n Thanks!");
      window.location.reload();

     
      

    }
   
    else 
    {
      alert("Insert More Quarter !");
    }

  }
  soldS3()
  {
    if(this.sodas[2].qty<1)
    {
                     alert("Out Of Stock !");
    }

  else 
    if(this.total>=1.25)
    {
      this.total -= 1.25
     
      this.sodaService.soldSoda(3,this.sodas[2]).subscribe();
      this.sodaService.getSodaList().subscribe((sodas)=>
      {   this.sodas=sodas; 
        
           
      
      });
      this.save();
      alert("You Successfuly Got the Soda!\n Collect Your Total ="+this.total+"\n Thanks!");
      window.location.reload();
      
      
          
      

    }
   
    else 
    {
      alert("Insert More Quarter !");
    }

  }
  soldS4()
  {
    if(this.sodas[3].qty<1)
    {
                     alert("Out Of Stock !");
    }

  else 

    if(this.total>=1.25)
    {
      this.total -= 1.25
     

      this.sodaService.soldSoda(4,this.sodas[3]).subscribe();
      this.sodaService.getSodaList().subscribe((sodas)=>
      {   this.sodas=sodas; 
        
           
      
      }
      
      
          )
          this.save();
          alert("You Successfuly Got the Soda!\n Collect Your Total ="+this.total+"\n Thanks!");
          window.location.reload();
    }
   
    else 
    {
      alert("Insert More Quarter !");
    }

  }
  soldS5()
  {

    if(this.sodas[4].qty<1)
    {
                     alert("Out Of Stock !");
    }

  else 
    if(this.total>=1.25)
    {
      this.total -= 1.25
    
      this.sodaService.soldSoda(5,this.sodas[4]).subscribe();
      this.sodaService.getSodaList().subscribe((sodas)=>
      {   this.sodas=sodas; 
        
           
      
      }
      
      
          )
          this.save();
          alert("You Successfuly Got the Soda!\n Collect Your Total ="+this.total+"\n Thanks!");
          window.location.reload();     

    }
   
    else 
    {
      alert("Insert More Quarter !");
    }

  }

  soldS6()
  {

    if(this.sodas[5].qty<1)
    {
                     alert("Out Of Stock !");
    }

  else 
    if(this.total>=1.25)
    {
      this.total -= 1.25
      this.save();
  

      this.sodaService.soldSoda(6,this.sodas[5]).subscribe();
      this.sodaService.getSodaList().subscribe((sodas)=>
      {   this.sodas=sodas; 
        
           
      
      }
      
      
          )
      
          this.save();
          alert("You Successfuly Got the Soda!\n Collect Your Total ="+this.total+"\n Thanks!");
          window.location.reload();  
    }
   
    else 
    {
      alert("Insert More Quarter !");
    }

  }




         


  

}