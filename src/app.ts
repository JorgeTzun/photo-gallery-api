import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index'
import path from 'path'
const PORT = process.env.PORT || 3000;
// What is ASP.NET API
const app =  express();

//settings
app.set('port', PORT);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api', indexRoutes);

//this folder for this application will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));
export default app;