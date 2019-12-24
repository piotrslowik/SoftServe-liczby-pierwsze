const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('image');

const Datauri = require('datauri');
const dUri = new Datauri()
const path = require('path');

const cloudinary = require('cloudinary');



const dataUri = req => dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

router.post('/images',  upload, async (req, res) => {
  try {
    const file = dataUri(req).content;
    const result = await cloudinary.v2.uploader.upload(file);
    res.send(result.url);
  }
  catch (error) {
    console.error('Uploading image failed', error);
    res.status(500).send({ error: 'Uploading image failed!' });
  }
});
  
module.exports = router;