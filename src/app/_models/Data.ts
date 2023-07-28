import { Photo } from "./photo";

export interface Data {
    userId: number;
    email?: string;
    username?: string;
   // photo?: string;
    photos?:string[];
    city?:string;          
    knownAs?       :string;
introduction?  :string;
country?       :string;
interests?     :string;
lookingFor?:string;
age?:number;
    creationDate: Date;
    token:string;
}
