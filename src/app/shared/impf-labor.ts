import {Vaccination} from "./vaccination";

export class ImpfLabor {

    static empty(): Vaccination{
        console.log("wir sind im ImpfLabor in der Empty-Methode");
        return new Vaccination(null, new Date(), '' , '', null, new Location(), []);
        //{id: 0, firstname: '', lastname: '', gender: '', svnr: null, phonenumber: null, isvaccinated: false,
        //                 role: '', email: '', password: '', vaccination_id: null }


    }

    static fromObject(rawVaccination: any): Vaccination{
        return new Vaccination(
            rawVaccination.id,
            typeof(rawVaccination.vaccinationdate) === 'string' ?
                new Date(rawVaccination.vaccinationdate) : rawVaccination.vaccinationdate,
            rawVaccination.starttime,
            rawVaccination.endtime,
            rawVaccination.maxparticipants,
            rawVaccination.location,
            rawVaccination.users,
        );
    }
}
