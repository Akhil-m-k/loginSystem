const multer = require('multer');
const path = require("path"); /// path

const storage = multer.diskStorage({
    destination:'uploads/',
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null,Date.now()+ext);
    },
});

let upload = multer({
    storage:storage,
    filefilter:function(req,file,callback){
        if(file.mimetype == 'image/png'|| file.mimetype == 'image/jpg'){
            callback(null,true);
        }else{
            console.log('only jp and png file supported');
            callback(null,false);
        }
    },
    limits:{
        fileSize:1024*1024*20
    }
});

module.exports=upload;