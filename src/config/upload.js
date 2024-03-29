import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const nome = path.basename(file.originalname, ext);

            cb(null, `${nome}-${Date.now()}${ext}`);
        }
    }),
};