import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobProfileComponent } from './job-profile.component';
import { JobTrackerComponent } from './job-tracker.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
          path: 'jobprofile',
          component: JobProfileComponent,
          data: {
            title: 'Job Profile'
          }
        },
        {
            path: 'trackJob',
            component: JobTrackerComponent,
            data: {
              title: 'track'
            }
         }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule {}
