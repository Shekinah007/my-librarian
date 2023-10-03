import { } from "@nestjs/common"
import { Prop } from "@nestjs/mongoose";

export class Book {
    @Prop()
    title: string;

    @Prop()
    author: string;

    @Prop()
    releaseDate: string;
}