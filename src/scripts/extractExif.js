const fs = require("fs");
const path = require("path");
const mathjs = require("mathjs"); // https://www.npmjs.com/package/mathjs
const ExifImage = require("exif").ExifImage; // https://www.npmjs.com/package/exif
const sharp = require("sharp"); // https://www.npmjs.com/package/sharp

const folderPath = "../imgs/gallery";

let imagesArray = [];

const extractExifData = (imagePath) => {
  return new Promise((resolve, reject) => {
    try {
      new ExifImage({ image: imagePath }, function (error, exifData) {
        if (error) {
          console.log("Error: " + error.message);
          resolve(null);
        } else {
          if (!exifData.exif.ExposureTime) resolve(null);
          resolve(exifData);
        }
      });
    } catch (error) {
      console.log("Error: " + error.message);
      resolve(null);
    }
  });
};

const processFiles = async () => {
  const files = fs.readdirSync(folderPath);
  for (let file of files) {
    file = file.replace(".JPG", ".jpg");
    if (!file.endsWith(".jpg")) continue;
    if (!files.includes(file.replace(".jpg", ".webp"))) {
      console.log(`Webp generated for ${file}`);
      sharp(path.join(folderPath, file))
        .resize(300)
        .webp()
        .toFile(path.join(folderPath, file.replace(".jpg", ".webp")));
    }
    const exifData = await extractExifData(path.join(folderPath, file));
    const imageObject = {};
    imageObject.src = path
      .join(folderPath, file)
      .replace("../imgs/", "./imgs/");
    imageObject.thumbnailSrc = imageObject.src
      .replace(".jpg", ".webp")
      .replace("../imgs/", "./imgs/");
    imageObject.alt = "";
    imageObject.filter = "";
    const data = JSON.parse(
      fs.readFileSync(
        path.resolve(__dirname, "../js/images-array.JSON"),
        "utf8"
      )
    );
    data.forEach((item) => {
      if (item.src === imageObject.src) {
        imageObject.alt = item.alt;
        imageObject.filter = item.filter;
      }
    });
    if (exifData) {
      imageObject.aperture = `f/${exifData.exif.FNumber}`;
      imageObject.shutterSpeed = mathjs
        .fraction(exifData.exif.ExposureTime)
        .toFraction();
      imageObject.iso = exifData.exif.ISO;
      imageObject.focalLength = `${exifData.exif.FocalLength}mm`;
      if (exifData.image.Make === "NIKON CORPORATION")
        imageObject.camera = `${exifData.image.Model}`;
      else
        imageObject.camera = `${exifData.image.Make} ${exifData.image.Model}`;
      imageObject.cameraType = "Digital";
    } else {
      imageObject.aperture = "?";
      imageObject.shutterSpeed = "?";
      imageObject.iso = "?";
      imageObject.focalLength = 58;
      imageObject.camera = "Zenit TTL";
      imageObject.cameraType = "Analog";
      imageObject.filter = "film";
    }
    imagesArray.push(imageObject);
  }
  try {
    console.log(imagesArray);
    fs.writeFileSync("../js/images-array.JSON", JSON.stringify(imagesArray));
  } catch (error) {
    console.log(error);
  }
};

processFiles();

// const extractExifData = async(imagePath) => {
//   try {
//     new ExifImage({ image: imagePath }, function (error, exifData) {
//       if (error) console.log("Error: " + error.message);
//       else console.log(exifData); // Do something with your data!
//     });
//   } catch (error) {
//     console.log("Error: " + error.message);
//   }
// };
//   const files = fs.readdirSync(folderPath);
//   for (let file of files) {
//     console.log(file);
//     if (!file.endsWith(".jpg")) continue;
//     const exifData = extractExifData(path.join(folderPath, file));
//     console.log(exifData);
//     const imageObject = {};
//     imageObject.src = path.join(folderPath, file);
//     imageObject.thumbnailSrc = imageObject.src.replace(".jpg", ".webp");
//     imageObject.alt = "";
//     imageObject.filter = "";
//     imageObject.aperture = `f/${exifData.exif.FNumber}`;
//     imageObject.shutterSpeed = mathjs
//       .fraction(exifData.exif.ExposureTime)
//       .toFraction();
//     imageObject.iso = exifData.exif.ISO;
//     imageObject.focalLength = `${exifData.exif.FocalLength}mm`;
//     imageObject.camera = `${exifData.image.Make} ${exifData.image.Model}`;
//     imageObject.cameraTye = "Digital";
//     console.log(imageObject);
//     imagesArray.push(imageObject);
//     console.log(`✅ ${file}`);
//     console.log(imagesArray);
//   }
//   try {
//     fs.writeFileSync("./src/js/images-array.JSON", JSON.stringify(imagesArray));
//   } catch (error) {
//     console.log(error);
//   }
/* 
Tenhle zakomentovaný kód jsem napsal já a jelikož mi z důvodu asynchronosti ExifImage nefungoval, dal jsem ho github copilotovy ať ho upraví, aby fungoval. 
Dal jsem mu tnhle error:
  WBA-zaverecna-prace-2024\scripts\extractExif.js:32 imageObject.aperture = f/${exifData.exif.FNumber}; ^
  TypeError: Cannot read properties of undefined (reading 'FNumber') at Object. (C:\Users\ondre\OneDrive\Dokumenty\Projekty\WBA-zaverecna-prace-2024\scripts\extractExif.js:32:47) at Module._compile (node:internal/modules/cjs/loader:1369:14) at Module._extensions..js (node:internal/modules/cjs/loader:1427:10) at Module.load (node:internal/modules/cjs/loader:1206:32) at Module._load (node:internal/modules/cjs/loader:1022:12) at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12) at node:internal/main/run_main_module:28:49

A on mi to odpověděl takhle:
  The error message is indicating that exifData is undefined at the time when you're trying to access its exif.FNumber property. This is because extractExifData function is asynchronous and you're not waiting for it to complete before using its result.
  The extractExifData function is currently not returning anything, which is why you're seeing Promise { undefined } when you log exifData. You need to return the exifData from the extractExifData function.
  Here's how you can modify your code to fix these issues:
    kód, který mi vrátil, je použit výše
  In this version of the code, extractExifData returns a Promise that resolves with the exifData. The processFiles function is marked as async, which allows you to use the await keyword to wait for the Promise from extractExifData to resolve before continuing.
*/

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

/* 
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./src/js/images-array.JSON"), "utf8"));
data.forEach((item) => {
  if (item.src === imageObject.src) {
    imageObject.alt = item.alt;
    imageObject.filter = item.filter;
  }
}); 

Tenhle kód mi poradil copilot chat po tom, co jsem vyzkoušel požít fetch, jako ve photography.html souboru a nefungovalo mi to.
*/

/* Když jsem vložil obrázek bez metadat, dostával jsem error, tak jsem se zeptal github copilota, jak to vyřešit.
Tohle mi odpověděl:
The error message "No Exif segment found in the given image" means that the exif library was unable to find any Exif metadata in the image file you're trying to process. Exif metadata is often included in images taken with digital cameras, but not all images will have it.
Here are a few things you could do to handle this error:
  Check if the image should have Exif data: Not all images will have Exif data. For example, images that have been edited or saved with certain software may not have Exif data. If you're expecting the image to have Exif data, you might want to check the source of the image.
  Handle the error in your code: You can modify your extractExifData function to handle this error and continue processing the rest of the images. Here's how you can do it:
    const extractExifData = (imagePath) => {
      return new Promise((resolve, reject) => {
        try {
          new ExifImage({ image: imagePath }, function (error, exifData) {
            if (error) {
              console.log("Error: " + error.message);
              resolve(null); // Resolve with null if there's an error
            } else {
              resolve(exifData);
            }
          });
        } catch (error) {
          console.log("Error: " + error.message);
          resolve(null); // Resolve with null if there's an error
        }
      });
    };
Then, in your processFiles function, you can check if exifData is null before trying to access its properties:
  const exifData = await extractExifData(path.join(folderPath, file));
  if (exifData) {
    // Use exifData...
  } else {
    // Handle the case where there's no Exif data...
  }
This way, your code will continue to run even if some images don't have Exif data.


*/
