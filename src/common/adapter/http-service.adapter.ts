import { Injectable } from "@nestjs/common";
import { HttpAdapterInterface } from "../interfaces/http-service.interface";

@Injectable()
export class HttpAdapter implements HttpAdapterInterface{

    private http = fetch;
    
    async get(url: string) {
        return await this.http( url );        
    }
    post<T>(url: string, body?: { [argument: string]: T; }): Promise<T> {
        throw new Error("Method not implemented.");
    }
    patch<T>(url: string, body?: { [argument: string]: T; }): Promise<T> {
        throw new Error("Method not implemented.");
    }
    put<T>(url: string, body?: { [argument: string]: T; }): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete<T>(url: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

}