import { Component, Input } from '@angular/core';
import { Citta } from './citta.model';

@Component({
  selector: 'app-citta',
  templateUrl: './citta.component.html',
  styleUrls: ['./citta.component.css']
})
export class CittaComponent {
  @Input() citta:Citta;

}
