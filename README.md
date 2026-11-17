# CartaJiji-site

Site public de **CartaJiji** — flashcards pour réviser en jouant
(multiplications, géographie, langues, histoire), publié via GitHub Pages.

- Site : https://ratithoglys.github.io/CartaJiji-site/
- Domaine prévu : `cartajiji.crealen.com` (voir ci-dessous)
- Appli (repo privé) : `Ratithoglys/CartaJiji`
- Contenu distant (v3) : `Ratithoglys/CartaJiji-Cards` (à créer, chantier C)

## Contenu

Site statique, sans build : `index.html` + `styles.css` + `app.js`.
Charte reprise de l'appli : fond `#fffbeb`, dégradé ambre
`#f59e0b → #ea580c`, Fredoka / Plus Jakarta Sans, carte blanche à
bordure grise, icône livre ouvert (même `icon.svg` que l'appli).

La page contient une démo interactive (6 cartes, retournement 3D,
boîtes Leitner), la liste des 6 leçons de la v2.1.1 (1 732 cartes) et
le téléchargement de l'APK `downloads/CartaJiji-2.1.1.apk`.

## Déploiement

GitHub Pages, source : branche `main`, racine (`/`).
Activation via l'API Pages (`POST /repos/Ratithoglys/CartaJiji-site/pages`).

## Domaine cartajiji.crealen.com (à faire)

1. DNS (crealen.com est chez OVH) : CNAME `cartajiji` →
   `ratithoglys.github.io`.
2. Dans le repo : fichier `CNAME` contenant `cartajiji.crealen.com`
   (ou réglage dans Settings → Pages → Custom domain).
3. Activer « Enforce HTTPS » une fois le certificat émis.

## Mettre à jour le site

Modifier les fichiers à la racine, commiter sur `main` (repo dédié
au site, pas de branche `kev/` : c'est le repo de publication).
Pour une nouvelle version de l'appli : remplacer le fichier dans
`downloads/`, mettre à jour le numéro de version et les compteurs
dans `index.html`, et le lien du bouton de téléchargement.
