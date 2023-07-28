import { Photo } from "./photo";
  export interface Member {
    userRoles:            null;
    createdBy:            null;
    createdOn:            Date;
    updatedBy:            null;
    updatedOn:            null;
    ipAddress:            null;
    photos:               Photo[];
    id:                   number;
    userName:             string;
    normalizedUserName:   string;
    email:                string;
    normalizedEmail:      string;
    emailConfirmed:       boolean;
    passwordHash:         string;
    securityStamp:        string;
    concurrencyStamp:     string;
    phoneNumber:          null;
    phoneNumberConfirmed: boolean;
    twoFactorEnabled:     boolean;
    lockoutEnd:           null;
    lockoutEnabled:       boolean;
    accessFailedCount:    number;
    city:string;
    knownAs:string;
}


