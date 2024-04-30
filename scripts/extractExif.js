const fs = require("fs");
const path = require("path");
const mathjs = require("mathjs");

const folderPath = "../src/imgs/gallery";

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  for (let file of files) {
    if (!file.endsWith(".jpg")) continue;
    const imageObject = {};
    imageObject.src = path.join(folderPath, file);
    imageObject.thumbnailSrc = imageObject.src.replace(".jpg", ".webp");

    var ExifImage = require("exif").ExifImage;

    try {
      new ExifImage({ image: imageObject.src }, function (error, exifData) {
        if (error) {
          console.log("Error: " + error.message);
        } else {
          imageObject.aperture = `f/${exifData.exif.FNumber}`;
          imageObject.shutterSpeed = mathjs
            .fraction(exifData.exif.ExposureTime)
            .toFraction();
          imageObject.iso = exifData.exif.ISO;
          imageObject.focalLength = `${exifData.exif.FocalLength}mm`;
          imageObject.camera = `${exifData.image.Make} ${exifData.image.Model}`;
          imageObject.cameraTye = "Digital";
          console.log(imageObject);
        }
      });
    } catch (error) {
      console.log("Error: " + error.message);
    }
  }
});
