export class ErrorMessage {


    constructor (
        public forControl: string,
        public forValidator: string,
        public text : string

    ) {}
}

export const ImpfFormErrorMessages = [

    new ErrorMessage('impfdatum', 'required', 'Ein Impfdatum muss angegeben werden'),
    new ErrorMessage('id', 'required', 'Es muss eine ID angegeben werden'),
    new ErrorMessage('id', 'idExists', "ID existiert bereits"),
    new ErrorMessage('maxTN', 'required', 'Es muss eine maximale Teilnehmeranzahl eingegeben werden'),
    new ErrorMessage('maxTN', 'max', 'Pro Termin können max. 30 Teilnehmer teilnehmen'),
    new ErrorMessage('maxTN', 'min', 'Pro Termin müssen minimum 5 Teilnehmer teilnehmen'),

    new ErrorMessage('ort', 'required', 'Es muss ein Location angegeben werden'),
    new ErrorMessage('adresse', 'required', 'Es muss eine Adresse angegeben werden'),
    new ErrorMessage('hausnummer', 'required', 'Es muss eine Hausnummer angegeben werden'),
    new ErrorMessage('plz', 'required', 'Es muss eine PLZ angegeben werden'),
    new ErrorMessage('startzeitpunkt', 'required', 'Es muss ein Startzeitpunkt angegeben werden'),
    new ErrorMessage('endzeitpunkt', 'required', 'Es muss ein Endzeitpunkt angegeben werden'),

]
