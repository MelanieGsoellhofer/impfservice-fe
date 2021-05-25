import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from "@angular/router";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl} from "@angular/forms";
import { ImpfLabor } from "../shared/impf-labor";
import { ImpfContainerService } from "../shared/impf-container.service";
import { Vaccination } from "../shared/vaccination";
import { ImpfFormErrorMessages} from "./impf-form-error-messages";
import { ImpfValidators} from "../shared/impf-validators";
import { Location} from "../shared/location";

@Component({
  selector: 'is-impf-form',
  templateUrl: './impf-form.component.html',
  styleUrls: []
})
export class ImpfFormComponent implements OnInit {

  impfForm: FormGroup;
  vaccination = ImpfLabor.empty();
  isUpdatingImpfung = false;
  users = FormArray;
  errors: { [key: string]: string } = {};

  constructor(
      private fb: FormBuilder,
      private is: ImpfContainerService,
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void{

/*
Das passiert, wenn wir eine ID haben!
Asynchron! Ich weis nicht, wann ich eine ID übergeben bekomme.
 */
    const id = this.route.snapshot.params["id"];
    // Wenn ID vorhanden ist:
    if (id) {
      this.isUpdatingImpfung = true;
      this.is.getSingle(id).subscribe(vaccination => {
        this.vaccination = vaccination;
        this.initImpfung();
      });
    }

    this.initImpfung();
  }

  /*
  Auslagern der Init-Methode
  Hier wird das Formular initialisiert. (auch wenn keine ID vom REST geliefert wird!
  */

  initImpfung() {
    //this.buildUsersArray();

    // Properties zuweisen:
    this.impfForm = this.fb.group({
      id: [
        this.vaccination.id, [
          Validators.required,
        ], this.isUpdatingImpfung ? null : ImpfValidators.idExists(this.is)
      ],
      vaccinationdate: [this.vaccination.vaccinationdate, Validators.required],
      starttime: [this.vaccination.starttime, Validators.required],
      endtime: [this.vaccination.endtime, Validators.required],
      maxparticipants: [this.vaccination.maxparticipants, [Validators.required,
          Validators.max(30), Validators.min(5)]],
      title: [this.vaccination.location.title, [ Validators.required ]],
      adress: [this.vaccination.location.adress, [ Validators.required]],
      zipcode: [this.vaccination.location.zipcode, [Validators.required]],
      description: [this.vaccination.location.description],
    });

    /*Jedes mal wenn sich etwas tut, dann werden die ErrorMessages upgedated */
    this.impfForm.statusChanges.subscribe(() =>
        this.updateErrorMessages()
    );
  }


  //Subformulare für die User erstellen
  //buildUsersArray() {
    //this.users = this.fb.array([]);
    //console.log(this.users);
   /* for (let user of this.vaccination.users) {
      let fg = this.fb.group({
        User_id: new FormControl(user.id),
        Vorname: new FormControl (user.firstname, [Validators.required]),
        Nachname: new FormControl (user.lastname, [Validators.required]),
        Geschlecht: new FormControl (user.gender, [Validators.required]),
        SVNr: new FormControl (user.svnr, [Validators.required]),
        TelefonNr: new FormControl (user.phonenumber, [Validators.required]),
        Imfpung_Verarbreicht: new FormControl (user.isvaccinated, [Validators.required]),
        Rolle: new FormControl(user.role, [Validators.required]),
        email: new FormControl(user.email, [Validators.required]),
        password: new FormControl(user.password, [Validators.required])
      });
     //this.users.push(fg);
    }
  }

  addUsersControl() {
    //this.users.push(this.fb.group({ vorname:null, nachname:null, geschlecht:null, SVNr: null, Impfung_Verabreicht: null}));
  }*/


  submitForm() {
    console.log(this.impfForm);

    const vaccination: Vaccination = ImpfLabor.fromObject(this.impfForm.value);
    //console.log(formatDate(vaccination.vaccinationdate));
    console.log(vaccination);

    //Wir überspeichern eine bereits bestehende Impfung mit neuen Daten mittels UPDATE
    if (this.isUpdatingImpfung) {
      this.is.update(vaccination).subscribe(res => {
            this.router.navigate(["../../impfungen", vaccination.id], {
              relativeTo: this.route
            });
          }           ,
          err => {
            console.log("Fehler ist passiert", err)
          });

    }  else {

      // Wir erstellen ein neues Buch mittels CREATE
      //console.log(vaccination);
      this.is.create(vaccination).subscribe(res => {
            this.vaccination = ImpfLabor.empty();
            this.impfForm.reset(ImpfLabor.empty());
            this.router.navigate(["../impfungen"], {
              relativeTo: this.route
            });

          },
          err => {
            console.log("Fehler ist passiert", err)
          });

    }

  }

  updateErrorMessages() {
    console.log("Formular invalid? " + this.impfForm.invalid);
    this.errors = {}; // Array wo wir unsere Fehler hineinspeichern

    // Wir gehen alle Error Messages im ImpfFormErrorMessages durch
    for (const message of ImpfFormErrorMessages) {
      const control = this.impfForm.get(message.forControl);

      if (
          control &&                                  // gibt es control überhaupt?
          control.dirty &&                            // dirty = binding zwischen Model und Formular ist nicht aufrecht
          control.invalid &&                          // ist das control invalid?
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }

    }

  }



}


