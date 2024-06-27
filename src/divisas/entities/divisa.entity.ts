import { IsString, MinLength } from "class-validator";

export class Divisa {
    
    @IsString()
    @MinLength(4, {
        message:`The amount must contain: greater than 0, and a currency strictly 3 letters`,    
    })
    currency: string;
}
