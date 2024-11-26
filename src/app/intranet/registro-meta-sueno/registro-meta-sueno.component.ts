import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-registro-meta-sueno',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './registro-meta-sueno.component.html',
  styleUrl: './registro-meta-sueno.component.scss'
})
export class RegistroMetaSuenoComponent {

}
