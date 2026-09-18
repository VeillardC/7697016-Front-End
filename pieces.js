//récupération des pièces depuis fichier JSON
const response = await fetch("pieces-autos.json");
const pieces = await response.json();

//création des balises
const article = pieces[0];

//image
const imageElement = document.createElement("img");
imageElement.src = article.image;
//titre / nom
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
//prix
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
document.body.appendChild(prixElement);
//catégorie
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

//rattachement
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
