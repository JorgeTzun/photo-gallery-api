import { Schema, model, Document } from 'mongoose';

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String
});

interface IPhoto extends Document {
    titile: string;
    description: String,
    imagePath: string
}

export default model<IPhoto>('photo', schema);