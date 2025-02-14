// files

const fs = require ('fs')

// // reading a file

// let filecount = fs.readFileSync('f1.txt')

// console.log('data of file 1->' + filecount)

// // write
// fs.writeFileSync('f2.txt', 'This is File 2')

// //append data
// fs. appendFileSync('f3.txt','I am a File, generated on 14th Feb,2025')

// // //delete 
// // fs.unlinkSync('f2.txt')

// Directories
// create directories

// fs.mkdirSync('myDirectory')

// check the content of the directory

// const fpath = 'C:\\Users\\VLabs_IITKGP2\\OneDrive\\Desktop\\Test files\\NodeJsTutorial\\NodeJs_Scaler\\myDirectory'

// const Fcontent = fs.readdirSync(fpath)

// console.log(Fcontent)

// check existance of a directory

// let existance = fs.existsSync('myDirectory')

// console.log(existance)

// check existance of a file

let existance = fs.existsSync('os.js')

console.log(existance)

// delete always empty directory

fs.rmdirSync('myDirectory')