import {User} from "./user";
export {User} from "./user";
export {Location} from "./location";

export class Vaccination {
    constructor(
        public id: number,
        public vaccinationdate: Date,
        public starttime: string,
        public endtime: string,
        public maxparticipants: number,
        public location: Location,
        public users?: User[],
    ){}
}
