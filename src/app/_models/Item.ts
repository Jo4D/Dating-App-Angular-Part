import { Photo } from "./photo";

export interface Item {
    id: number;
    email: string;
    username: string;
    photo: Photo[];
    creationDate: Date;
}
