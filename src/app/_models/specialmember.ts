import { SpecialData } from "./specialdata";

export interface SpecialMember {
    ok:              boolean;
    responseCode:    number;
    responseMessage: string;
    data:            SpecialData;
}


