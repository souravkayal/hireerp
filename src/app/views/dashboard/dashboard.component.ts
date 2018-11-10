import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

import {IMyDrpOptions} from 'mydaterangepicker';


@Component({
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

  constructor() { 
  }

  myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
};

// For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
// to set initial date range value using the selDateRange attribute.
private model: any = {beginDate: {year: 2018, month: 10, day: 9},
                         endDate: {year: 2018, month: 10, day: 19}};

                         
//pie
pieChartLabels: string[] = ['Engineering', 'Sales', 'Marketing','Other'];
pieChartData: number[] = [300, 500, 100,50 ];
pieChartType = 'pie';


// Doughnut
public doughnutChartLabels: string[] = ['Reviewing', 'Schedule', 'Waiting' , 'Rejected'];
public doughnutChartData: number[] = [350, 450, 100 , 50];
public doughnutChartType = 'doughnut';


 // lineChart
 public lineChartData: Array<any> = [
  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Call History'}
];
public lineChartLabels: Array<any> = ['1-Jan', '2-Jan', '3-Jan', '4-Jan', '5-Jan', '6-Jan', '7-Jan'];
public lineChartOptions: any = {
  animation: false,
  responsive: true
};
public lineChartColours: Array<any> = [
  { // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
public lineChartLegend = true;
public lineChartType = 'line';

//Bar
barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
barChartLabels: string[] = ['Engineering', 'Sales', 'Marketing', 'ITs', 'Other'];
barChartType = 'bar';
barChartLegend = true;

barChartData: any[] = [
  {data: [210, 590, 1200, 211, 560], label: 'Series A'},
  {data: [2800, 3289, 4098, 1900, 8621], label: 'Series B'}
];
  

  
}
