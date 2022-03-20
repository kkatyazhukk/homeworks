const fs = require('fs-extra')

//Create directory_1 
const dir = './dir_1'
fs.ensureDirSync(dir)

//Create file
const file = './dir_1/file.txt'
fs.outputFileSync(file, 'hello!')

//Create directory_2
const dir2 = './dir_2'
fs.ensureDirSync(dir2)

//Move file
fs.moveSync('./dir_1/file.txt', './dir_2/file.txt')

//Delete file
fs.removeSync('./dir_2/file.txt')

//Delete directories
fs.removeSync('./dir_1')
fs.removeSync('./dir_2')