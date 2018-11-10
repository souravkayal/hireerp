import { Component } from '@angular/core';
import {Grid} from "ag-grid/main";
import {GridOptions} from "ag-grid-community";

import { ModalDirective } from 'ngx-bootstrap';
import { DialogService } from "ng2-bootstrap-modal";
import { AddCandidateDialogComponent } from "./modal/add-candidate.component";


export interface ConfirmModel {
  title:string;
  message:string;
}


@Component({
  //selector: 'app-dashboard',
  templateUrl: 'job-tracker.component.html'
})
export class JobTrackerComponent {
  
  private gridOptions: GridOptions;
  
  constructor(private dialogService:DialogService) {}

  showConfirm() {
    let disposable = this.dialogService.addDialog(AddCandidateDialogComponent, {
        title:'Confirm title', 
        message:'Confirm message'})
        .subscribe((isConfirmed)=>{
            //We get dialog result
            if(isConfirmed) {
                alert('accepted');
            }
            else {
                alert('declined');
            }
        });
}

  columnDefs = [

    {headerName: 'Date', field: 'Date' , width: 100 },
    {headerName: 'Status', field: 'InterviewStatus' ,  width: 100},
    {headerName: 'Name', field: 'Name' },
    {headerName: 'Mobile', field: 'Mobile' ,width: 120 },
    {headerName: 'Email', field: 'Email' },
    {headerName: 'Skill', field: 'Skill' },
    {headerName: 'Tot Exp', field: 'TotalExp' , width: 80  },
    {headerName: 'Rel Exp', field: 'ReleventExp' , width: 80 },
    {headerName: 'Company', field: 'Company' , width: 120},
    {headerName: 'Location', field: 'Location' , width: 120},
    {headerName: 'Preferred Loc', field: 'PreferredLocation' , width: 120 },
    {headerName: 'C CTC', field: 'CurrentCTC', width: 100  },
    {headerName: 'E CTC', field: 'ExpectedCTC' , width: 100},
    {headerName: 'N P', field: 'NoticePeriod', width: 100 },
];

rowData = [
    { 
      Date : '1-Jan-2017', 
      InterviewStatus : 'Reviewing', 
      Name : 'Sourav Kayal' , 
      Mobile : '9886447043', 
      Email : 'sourav.kayal@yahoo.com',
      Skill : 'c#, .NET, ASP.NET, SQL',
      TotalExp : 6,
      ReleventExp : 4,
      Company : 'Walmart',
      Location : 'Bangalore',
      PreferredLocation : 'Bangalore',
      CurrentCTC : 19,
      ExpectedCTC : 25,
      NoticePeriod : 2
    },
    { 
      Date : '2-Jan-2017', 
      InterviewStatus : 'Rejected', 
      Name : 'Ram Kumar' , 
      Mobile : '1234321458', 
      Email : 'ram.kumar@yahoo.com',
      Skill : 'c#, .NET, ASP.NET, SQL',
      TotalExp : 10,
      ReleventExp : 3,
      Company : 'Walmart',
      Location : 'Bangalore',
      PreferredLocation : 'Delhi',
      CurrentCTC : 9,
      ExpectedCTC : 15,
      NoticePeriod : 2
    },
    { 
      Date : '2-Jan-2017', 
      InterviewStatus : 'Rejected', 
      Name : 'Animesh Banerjee' , 
      Mobile : '7843464639', 
      Email : 'ani@gmail.com',
      Skill : 'c#, .NET, ASP.NET, SQL, Oracle',
      TotalExp : 5,
      ReleventExp : 3,
      Company : 'Walmart',
      Location : 'Delhi',
      PreferredLocation : 'Delhi',
      CurrentCTC : 9,
      ExpectedCTC : 15,
      NoticePeriod : 2
    }
];


}
