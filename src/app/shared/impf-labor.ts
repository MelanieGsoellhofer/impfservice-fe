import {Vaccination} from "./vaccination";
import {Location} from "./location";

export class ImpfLabor {

    static empty(): Vaccination{
        console.log("wir sind im ImpfLabor in der Empty-Methode");
        // @ts-ignore
        return new Vaccination(null, new Date(), '', '', null, new Location(null, '', '', ''), [{
            id: 0, firstname: '', lastname: '', gender: '', svnr: null, phonenumber: null, isvaccinated: false,
            role: '', email: '', password: '', vaccination_id: null
        }]);
    }

    static fromObject(rawVaccination: any): Vaccination{
        console.log("wir sind im ImpfLabor in der fromObject-Methode");
        return new Vaccination(
            rawVaccination.id,
            typeof (rawVaccination.vaccinationdate) === 'string' ?
                ImpfLabor.formatDate (new Date(rawVaccination.vaccinationdate)): rawVaccination.vaccinationdate  ,
            rawVaccination.starttime,
            rawVaccination.endtime,
            rawVaccination.maxparticipants,
            rawVaccination.location,
            //rawVaccination.vaccination.location.title,
            //rawVaccination.vaccination.location.adress,
            //rawVaccination.vaccination.location.zipcode,
            //rawVaccination.vaccination.location.description,

        );
    }


    static formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
}

