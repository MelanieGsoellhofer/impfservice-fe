import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {ImpfContainerService} from "./impf-container.service";
import {map} from 'rxjs/operators';

export class ImpfValidators {

    static idExists(is: ImpfContainerService) {
        return function (control: FormControl): Observable<{ [error: string]: any }> {
            return is.check(control.value)
                .pipe(map(exists => !exists ? null : {idExists: {valid: false}}));


        }
    }
}
