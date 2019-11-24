import { NgModule } from '@angular/core';

import { MatButtonModule, 
         MatButtonToggleModule, 
         MatIconModule,
         MatBadgeModule,
         MatProgressSpinnerModule,
         MatToolbarModule,
         MatListModule } from '@angular/material'

const Materials = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatListModule
]

@NgModule({
  imports: [ Materials ],
  exports: [ Materials ]
})
export class MaterialModule { }
