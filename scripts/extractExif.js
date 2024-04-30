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
    imageObject.alt = "";
    imageObject.filter = "";

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
/* 
Moje otázka:
how to convert decimal number to fraction in javascript with some

Chat GPT:
Yes, there are libraries available in JavaScript that can simplify the process of converting decimal numbers to fractions. One popular library is `mathjs`, which provides a wide range of mathematical functions, including the ability to work with fractions. Here's how you can use `mathjs` to convert a decimal number to a fraction:
First, include `mathjs` in your project. You can either download it and include it directly in your HTML file or install it via npm:
  ```bash
  npm install mathjs
  ```
Then, you can use it in your JavaScript code like this:
  ```javascript
  // Import the mathjs library
  const math = require('mathjs');
  // Function to convert decimal to fraction
  function decimalToFraction(decimal) {
      // Use the mathjs function toFraction to convert decimal to fraction
      return math.fraction(decimal).toString();
  }
  // Example usage:
  const decimal = 3.14159;
  console.log(decimalToFraction(decimal)); // Output: 628318/200000 (exact fraction for pi)
  ```
This approach is simpler and more robust than implementing the conversion logic yourself, as it leverages the functionality provided by the `mathjs` library. 
*/
