import { IsString } from "class-validator";

export class CreateDivisaDto {

    @IsString()
    currencyUnit: string;
}
