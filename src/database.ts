import {connect} from 'mongoose';

export async function startConnection(){

    await connect('mongodb://localhost/photo-gallery', {
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log('Database is connected');
}