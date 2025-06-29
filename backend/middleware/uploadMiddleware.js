import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");  // store in uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // unique filename
    }
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Only .jpeg, .jpg, .png formats are allowed"), false);
    }
};

const upload = multer({ storage, fileFilter });

export default upload;
