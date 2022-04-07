//Import du module "fs" de NodeJS
const fs = require("fs");
const cp = require("child_process");

console.log("-->Lancement fichier index.js ok!");

/*****************************
Lire le contenu d'un fichier
*****************************/
// const readFile = "readMe.txt";
// var readMe = fs.readFileSync(`./${readFile}`, "utf8");
// console.log(readMe);

/*****************************
Ecrire le contenu d'un fichier
*****************************/
const writedFile = "writeMe.txt";
// fs.writeFileSync(`./${writedFile}`, readMe);

/*****************************
Lire et Ecrire le contenu d'un fichier
*****************************/
// fs.readFile(`./${readFile}`, "utf8", function (err, data) {
//   fs.writeFile(`./${writedFile}`, data, function (err, result) {
//     if (err) console.log("error", err);
//   });
// });

/*****************************
Lister le contenu d'un dossier
*****************************/
// const dossier = "testUnitaire";
// const files = fs.readdirSync(`./${dossier}`);

// console.log(files);

// cp.exec("dir", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

/*****************************
Créer un dossier
*****************************/
// const dirName = "testCréation";

// const createFolder = () => {
//   if (fs.existsSync(`${dirName}`)) {
//     console.log("Ce dossier existe déjà");
//   } else {
//     fs.mkdir(`${dirName}`, (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`Le dossier "${dirName}" a été créé`);
//     });
//   }
// };

// createFolder();

/*****************************
Créer un fichier
*****************************/
// const fileName = "testFichierCréé";

//  const dirChange = cp.spawn("cd", [pathName]);

// const createFile = () => {
//   if (fs.existsSync(`${fileName}`)) {
//     console.log("Ce fichier existe déjà");
//   } else {
//     fs.appendFile(`./${fileName}`, "blablbal", (err) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`Le fichier "${fileName}" a été créé`);
//     });
//   }
// };

// createFile();

/*****************************
Supprimer un dossier
*****************************/
// const dirDelete = "testCréation";
// fs.rmdir(`./${dirDelete}`, (err) => {
//   if (err) {
//     throw err;
//   }
// });

/*****************************
Supprimer un fichier
*****************************/
// const fileDelete = "testFichier.md";
// fs.unlinkSync(`./testCréation/${fileDelete}`);

/*****************************
Déplacer un fichier
*****************************/
// const fileMove = "testFichier.md";
// fs.rename(`./testCréation/${fileDelete}`);
