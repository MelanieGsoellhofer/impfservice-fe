import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vaccination} from "../shared/vaccination";
import { ImpfContainerService} from "../shared/impf-container.service";
import { ActivatedRoute, Router} from "@angular/router";
import { ImpfLabor} from "../shared/impf-labor";
import { subscribeOn} from "rxjs/operators";
import { AuthenticationService} from "../shared/authentication.service";


@Component({
  selector: 'is-impf-details',
  templateUrl: './impf-details.component.html',
  styleUrls: []
})
export class ImpfDetailsComponent implements OnInit {

  //@Input() vaccination: Vaccination
  vaccination:Vaccination = ImpfLabor.empty();

  constructor(
      private is: ImpfContainerService,
      private route: ActivatedRoute,
      private router: Router,
      private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.is.getSingle(params['id']).subscribe(i => this.vaccination = i);
  }

  removeImpfung(){
    if (confirm('Impfung löschen? Sicher?')){
      this.is.remove(this.vaccination.id)
          .subscribe(res => this.router.navigate(['../'], { relativeTo:
            this.route }));
    }
  }





}
