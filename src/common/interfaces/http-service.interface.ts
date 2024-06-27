type Body<T> = {
    [argument: string]: T
}

export interface HttpAdapterInterface {
    get       ( url: string ): any;
    post<T>   ( url: string, body?: Body<T>): Promise<T>;
    patch<T>  ( url: string, body?: Body<T>): Promise<T>;
    put<T>    ( url: string, body?: Body<T>): Promise<T>;
    delete<T> ( url: string):                 Promise<T>;
}