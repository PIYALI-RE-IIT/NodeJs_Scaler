const path = require('path')

let ext = path.extname('C:\Users\VLabs_IITKGP2\OneDrive\Desktop\Test files\NodeJsTutorial\NodeJs_Scaler\f1.txt')

let basename = path.basename('C:\\Users\\VLabs_IITKGP2\\OneDrive\\Desktop\\Test files\\NodeJsTutorial\\NodeJs_Scaler\\f1.txt')

console.log(ext)// extension of the current file we are talking about
console.log(basename)//name of the file we are talking about
console.log(__filename)//path of the current folder name
console.log(__dirname)//current directory name