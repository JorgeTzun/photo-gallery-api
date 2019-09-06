import { Request, Response, response } from 'express'
import path from 'path';
import fs from 'fs-extra';
import Photo from '../models/Photo';


async function getPhotos(req: Request, res: Response): Promise<Response> {
    const photos = await Photo.find();
    return res.json(photos);
}
async function getPhoto(req: Request, res: Response): Promise<Response> {
    console.log(req.params)
    const photo = await Photo.findById(req.params.id);
    return res.json(photo);
}

async function createPhoto(req: Request, res: Response): Promise<Response> {

    const { title, description } = req.body;
    const newPhoto = {
        title: title,
        description: description,
        imagePath: req.file.path
    }

    const photo = new Photo(newPhoto);
    await photo.save();

    return res.json({
        message: 'Photo successfully saved',
        photo: photo
    });
}

async function deletePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const photo = await Photo.findByIdAndDelete(id);
    if (photo) {
        await fs.unlink(path.resolve(photo.imagePath));
    }
    return res.json({ message: 'Photo deleted' });
}

async function updatePhoto(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, description } = req.body;

    console.log(id, title, description);

    const updatedPhoto = await Photo.findByIdAndUpdate(id, {
        title,
        description
    }, { new: true })

    return res.json({
        message: 'Photo successfully updated',
        updatedPhoto
    });
}

export {
    createPhoto,
    getPhotos,
    getPhoto,
    deletePhoto,
    updatePhoto
}