import { Member } from "./member";

export interface PageModel<T>{
    
    maxPageSize: number;
    pageSize:number;
    currentPage: number;
    totalItems:number;
    TotalPages:number;
    items:T[]
}