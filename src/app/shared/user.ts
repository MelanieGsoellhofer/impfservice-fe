//export {Vaccination} from "./vaccination";
//import {Vaccination} from "./vaccination";

export class User {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public gender: string,
        public svnr: number,
        public phonenumber: number,
        public isvaccinated: boolean,
        public role: string,
        public email: string,
        public password: string,
        public vaccination_id?: number
    )
    {}
}
