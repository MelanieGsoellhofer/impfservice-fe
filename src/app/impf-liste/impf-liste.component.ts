import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Vaccination} from "../shared/vaccination";
import {ImpfContainerService} from "../shared/impf-container.service";

@Component({
  selector: 'is-impf-liste',
  templateUrl: './impf-liste.component.html'
})
export class ImpfListeComponent implements OnInit {

    // wir speichern uns die Impfungen in eine Variable
    vaccinations: Vaccination[];

    constructor(private is: ImpfContainerService){}

    // mit der Methode getAll() holen wir uns alle Imfpungen
    ngOnInit():void {
       this.is.getAll().subscribe(res => {
            this.vaccinations = res;
            console.log(this.vaccinations);
        });
    }

}
