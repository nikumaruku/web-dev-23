import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter website url:",
    },
  ])
  .then((answers) => {
    console.log("User Input:", answers);
    const url = answers.url;

    const qrCode = qr.image(url, { type: "png" });
    qrCode.pipe(fs.createWriteStream("qrcode.png"));
    const qrFilePath = "./QR Code Generator"
    console.log(`QR code saved as ${qrFilePath}`);

    fs.writeFile("qr-code.txt", url, (err) => {
      if (err) throw err;
      console.log("The URL has been saved!");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
