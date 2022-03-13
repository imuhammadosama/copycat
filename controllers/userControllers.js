import multer from 'multer';

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/');
  },
  filename: (req, file, callback) => {
    const ext = file.mimetype.split('/')[1];
    callback(null, `image-${Date.now()}.${ext}`);
  },
});

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(new Error('Only Image is Allowed..'));
  }
};

const upload = multer({
  storage: multerConfig,
  fileFilter: isImage,
});

export let uploadImage = upload.single('photo');

export function uploadFile(req, res) {
  console.log(req.file);
  const url = 'file:///Users/osama/Documents/Projects/copycat/public';
  res.status(200).json({
    success: 'Success',
    file: `${req.file.filename}`,
  });
}