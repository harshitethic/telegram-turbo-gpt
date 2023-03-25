const Jimp = require('jimp');

function imageConverter(pathToJPG) {

    Jimp.read(pathToJPG)
        .then(image => {

            const pathToPNG = pathToJPG.slice(0, -4) + '.png';
            return image.write(pathToPNG);

        })
        .catch(error => {

            console.log('converterError:' + error);

        });

}

module.exports = {

    imageConverter: imageConverter

}