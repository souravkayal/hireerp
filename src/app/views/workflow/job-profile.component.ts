import { Component } from '@angular/core';
import { getStyle } from '@coreui/coreui/dist/js/coreui-utilities';
import { AgGridModule } from 'ag-grid-angular';
import {Grid} from "ag-grid/main";
import {GridOptions} from "ag-grid-community";
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


@Component({
  //selector: 'app-dashboard',
  templateUrl: 'job-profile.component.html'
})
export class JobProfileComponent {
    private gridOptions: GridOptions;
  constructor() { 
  }
  columnDefs = [
    {headerName: 'Company Name', field: 'Company_Name' },
    {headerName: 'Requirement', field: 'Requirement' },
    {headerName: 'Skill Set', field: 'Skill_Set'},
    {headerName: 'Status', field: 'Status'},
    {headerName: 'Total Opening', field: 'Total_Opening'},
    {headerName: 'Budget', field: 'Budget'},
    
];

rowData = [
    { Company_Name : 'Walmart', Requirement : 'Senior .NET Developer', Skill_Set : 'C# . NET, Angular, PGP' , Status : 'Open', Total_Opening : 100, Budget :1000  },
    { Company_Name : 'DELL Technology', Requirement : '.NET Developer', Skill_Set : 'C# . NET, ASP, Angular, PGP' , Status : 'Open', Total_Opening : 20, Budget :1000  },
    { Company_Name : 'Nagaro', Requirement : 'Senior Jave Developer', Skill_Set : 'Java . NET, Angular, PGP' , Status : 'Open', Total_Opening : 10, Budget :15000  },
    { Company_Name : 'Google', Requirement : 'Developer', Skill_Set : 'C# . NET, Angular, PGP' , Status : 'Open', Total_Opening : 100, Budget :1400  },
    { Company_Name : 'Microsoft', Requirement : 'Senior .NET Developer', Skill_Set : 'C# . NET, Angular, PGP' , Status : 'Open', Total_Opening : 100, Budget :6000  }
];
  

}

