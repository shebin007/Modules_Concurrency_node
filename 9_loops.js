const fs = require('fs');

const files = ['./9_loops.js','./10_unknown.js','./8_eventloop.js'];


files.forEach(file => {
    try{
        const data = fs.readFileSync(file);
        console.log('File data is ', data);
    }
    catch(err){
        if(err.code === 'ENOENT'){
            console.log("FIle not found");
        }
        else if(err.code === 'ERR_INVALID_OPT_VALUE_ENCODING'){
            console.log('File format is not correct');
        }
        else{
            throw err;
        }
       
    }
   
})

