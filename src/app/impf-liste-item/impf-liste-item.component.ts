import { Component, OnInit, Input } from '@angular/core';
import {Vaccination} from "../shared/vaccination";

@Component({
  selector: 'a.is-impf-liste-item',
  templateUrl: './impf-liste-item.component.html',
  styleUrls: []
})
export class ImpfListeItemComponent implements OnInit {

  // Wir benötigen den Decorator @Input() um die Daten zu erhalten
  @Input() vaccination: Vaccination

  constructor() { }

  ngOnInit(): void {
  }

}
