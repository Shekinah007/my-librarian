import { Prop } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";

export class AddBook {
    @Prop()
    @IsNotEmpty()
    title: string;

    @Prop()
    @IsNotEmpty()
    author: string;

    releaseDate: string = "UNKNOWN";
}