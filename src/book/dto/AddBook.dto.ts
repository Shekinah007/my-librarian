import { Prop } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";

export class AddBookDto {
    @Prop()
    @IsNotEmpty()
    title: string;

    @Prop()
    @IsNotEmpty()
    author: string;

    @Prop()
    releaseDate: string = "UNKNOWN";
}