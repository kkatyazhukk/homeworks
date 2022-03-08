const fs = require('fs-extra')

fs.ensureDir('./dir_1', () => {
    fs.outputFile('./dir_1/file.txt', 'hello!', callback => {
        fs.ensureDir('./dir_2', callback => {
            fs.move('./dir_1/file.txt', './dir_2/file.txt', callback => {
                fs.remove('./dir_2/file.txt', callback => {
                    fs.remove('./dir_1', callback => {
                        fs.remove('./dir_2')
                    });
                });
            });
        });
    });
  });
  

