import { Data } from "./Data";

export interface UserByUserName {
    ok:              boolean;
    responseCode:    number;
    responseMessage: string;
    data:            Data;
}


