import { } from "@nestjs/common"
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty } from "class-validator";


@Schema()
export class Book {
    @Prop()
    @IsNotEmpty()
    title: string;

    @Prop()
    @IsNotEmpty()
    author: string;

    @Prop()
    releaseDate: string = "UNKNOWN";
}

export const BookSchema = SchemaFactory.createForClass(Book)