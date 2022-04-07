"use strict";
/* eslint-env node */
/* eslint-disable no-console */

//Import du module "fs" de NodeJS
const fs = require("fs");
//Import du paquet express
const express = require("express");
//Import du module childprocess
const cp = require("child_process");

//Création de l'application express
const app = express();

//Création d'une route pour la page d'acceuil '/'
app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/fontaina/ESTIAM/ESTIAM_Cours/DFS_Back_Spé/Projet/index.html"
  );
});

/*****************************
Lire le contenu d'un fichier
*****************************/
//Création d'une route pour "Lire un fichier"
//Route : /api/readFile?nomFichier
app.get("/api/readFile", (req, res) => {
  //Récupération du nom du fichier à lire
  const nomFichier = req.query.nomFichier;
  console.log(`Le fichier lu est : ${req.query.nomFichier}`);
  //Lire le contenu d'un fichier
  const readFile = fs.readFileSync(`./${nomFichier}`, "utf8");
  console.log(readFile);
});

/*****************************
Lister le contenu d'un dossier
*****************************/
//Création d'une route pour "Lister le contenu d'un dossier"
//Route : /api/listContentFolder?nomDossier
app.get("/api/listContentFolder", (req, res) => {
  //Récupération du nom du dossier
  const nomDossier = req.query.nomDossier;
  console.log(req.query);
  console.log(`Le dossier parcouru est : ${req.query.nomDossier}`);
  //Lister le contenu d'un dossier
  const contentFolder = fs.readdirSync(`./${nomDossier}`);
  console.log(contentFolder);
});

/*****************************
Créer un dossier
*****************************/
const createFolder = (newDirName) => {
  if (fs.existsSync(`${newDirName}`)) {
    console.log("Ce dossier existe déjà");
  } else {
    fs.mkdir(`${newDirName}`, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Le dossier "${newDirName}" a été créé`);
    });
  }
};

//Création d'une route pour "Créer un dossier"
//Route : /api/createFolder?nomDossier
app.get("/api/createFolder", (req, res) => {
  //Récupération du nom du dossier à créer
  const nomDossier = req.query.nomDossier;
  console.log(req.query);
  console.log(`Le dossier à créer est : ${req.query.nomDossier}`);
  //Créer un dossier
  createFolder(nomDossier);
});

/*****************************
Créer un fichier
*****************************/
const createFile = (pathName, newFileName) => {
  if (fs.existsSync(`${newFileName}`)) {
    console.log("Ce fichier existe déjà");
  } else {
    fs.appendFile(`./${newFileName}`, "", (err) => {
      if (err) {
        throw err;
      }
      console.log(`Le fichier "${newFileName}" a été créé`);
    });
  }
};

//Création d'une route pour "Créer un fichier"
//Route : /api/createFile?nomFichier
app.get("/api/createFile", (req, res) => {
  //Récupération du nom du fichier à créer
  const nomFichier = req.query.nomFichier;
  console.log(req.query);
  console.log(`Le fichier à créer est : ${req.query.nomFichier}`);
  //Créer un fichier
  createFile(nomFichier);
});

/*****************************
Supprimer un dossier
*****************************/
const delFolder = (newDelFolder) => {
  if (fs.existsSync(`${newDelFolder}`)) {
    fs.rmdir(`./${newDelFolder}`, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`Le dossier "${newDelFolder}" a été supprimé`);
      }
    });
  } else {
    console.log(`Le dossier "${newDelFolder}" n'existe pas`);
  }
};

//Création d'une route pour "Supprimer un fichier"
//Route : /api/deleteFolder?nomFichier

/* ----------------------------------
------------------------------------- */
const PORT = 5400;

app.listen(PORT, () => {
  console.log(`Application démarre à l\'adresse http://localhost:${PORT}`);
});
