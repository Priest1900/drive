import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatTableModule} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  declarations: [
    MainComponent,
  ]
})
export class MainModule { }
