import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { JobProfileComponent } from './job-profile.component';
import { JobTrackerComponent } from "./job-tracker.component";

import { WorkflowRoutingModule } from './workflow-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  imports: [
    WorkflowRoutingModule,
    ChartsModule,
    BsDropdownModule,
    AgGridModule.withComponents([]),
    TabsModule
  ],
  // entryComponents: [
  //   AddCandidateDialogComponent 
  // ],
  declarations: [ 
    JobProfileComponent , 
    JobTrackerComponent
  ]
})
export class WorkflowModule { }
