export class ErrorMessage {


    constructor (
        public forControl: string,
        public forValidator: string,
        public text : string

    ) {}
}

export const ImpfFormErrorMessages = [

    new ErrorMessage('vaccinationdate', 'required', 'Ein Impfdatum muss angegeben werden'),
    new ErrorMessage('id', 'required', 'Es muss eine ID angegeben werden'),
    new ErrorMessage('id', 'idExists', "ID existiert bereits"),
    new ErrorMessage('maxparticipants', 'required', 'Es muss eine maximale Teilnehmeranzahl eingegeben werden'),
    new ErrorMessage('maxparticipants', 'max', 'Pro Termin können max. 30 Teilnehmer teilnehmen'),
    new ErrorMessage('maxparticipants', 'min', 'Pro Termin müssen minimum 5 Teilnehmer teilnehmen'),

    new ErrorMessage('title', 'required', 'Es muss ein Location-Titel angegeben werden'),
    new ErrorMessage('starttime', 'required', 'Es muss ein Startzeitpunkt angegeben werden'),
    new ErrorMessage('endtime', 'required', 'Es muss ein Endzeitpunkt angegeben werden'),
    new ErrorMessage('title', 'required', 'Es muss ein Location Titel angegeben werden'),
    new ErrorMessage('adress', 'required', 'Es muss eine Adresse angegeben werden'),
    new ErrorMessage('zipcode', 'required', 'Es muss eine PLZ angegeben werden'),

]
