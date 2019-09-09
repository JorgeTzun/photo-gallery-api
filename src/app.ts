import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index'
import path from 'path'
import cors from 'cors'

const PORT = process.env.PORT || 3000;

const app =  express();

//settings
app.set('port', PORT);

//middleware
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());

//routes
app.use('/api', indexRoutes);

//this folder for this application will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));
export default app;