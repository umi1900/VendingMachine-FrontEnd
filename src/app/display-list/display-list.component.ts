import { Component, OnInit } from '@angular/core';
import {Report} from "../report";
import {ReportService} from "../reportservice";
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import {formatDate } from '@angular/common';
@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {
  report: Report[];
  constructor(private rps:ReportService,private router: Router) { }

  ngOnInit(): void {
    this.rps.getReportList().subscribe((report)=>
    {   this.report=report; 
         
    
    }
    )    
  }

}
