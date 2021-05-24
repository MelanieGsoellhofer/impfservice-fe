import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Vaccination} from "../shared/vaccination";
import {ImpfContainerService} from "../shared/impf-container.service";

@Component({
  selector: 'is-impf-liste',
  templateUrl: './impf-liste.component.html'
})
export class ImpfListeComponent implements OnInit {


    vaccinations: Vaccination[];

    constructor(private is: ImpfContainerService){}

    ngOnInit():void {
       this.is.getAll().subscribe(res => {
            this.vaccinations = res;
            console.log(this.vaccinations);
        });
    }

}
