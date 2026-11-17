# CartaJiji-site

Site public de **CartaJiji** — flashcards pour réviser en jouant
(multiplications, géographie, langues, histoire).

- Site : https://cartajiji.crealen.com/
- Appli (repo privé) : `Ratithoglys/CartaJiji`
- Contenu distant (v3) : `Ratithoglys/CartaJiji-Cards` (à créer, chantier C)

## Contenu

Site statique, sans build : `index.html` + `styles.css` + `app.js`.
Charte reprise de l'appli : fond `#fffbeb`, dégradé ambre
`#f59e0b → #ea580c`, Fredoka / Plus Jakarta Sans, carte blanche à
bordure grise, icône livre ouvert (même `icon.svg` que l'appli).

- Page d'accueil + démo interactive (6 cartes, retournement 3D,
  boîtes Leitner, drapeaux sur les cartes concernées).
- Les 6 leçons de la v2.1.1 (1 732 cartes), avec drapeaux et blasons
  repris de l'appli (`assets/flags/`, `assets/blasons/`).
- Téléchargement de l'APK : `downloads/CartaJiji-2.1.1.apk`.
- `sitemap.xml`, `robots.txt`, `CNAME`, `.nojekyll`.

## Déploiement

GitHub Pages, source « GitHub Actions » (`.github/workflows/pages.yml`) :
chaque push sur `main` redéploie le site automatiquement.

## Domaine

`cartajiji.crealen.com` (en ligne depuis le 17/11/2026) :

1. DNS chez OVH : CNAME `cartajiji` → `ratithoglys.github.io`.
2. Fichier `CNAME` à la racine du repo.
3. Domaine déclaré dans Settings → Pages (vérification DNS OK).
4. HTTPS : certificat valide ; « Enforce HTTPS » à activer dès que
   la case devient disponible dans les réglages Pages.

## Mettre à jour le site

- Nouvelle version de l'appli : remplacer le fichier dans
  `downloads/`, mettre à jour le numéro de version, les compteurs
  (leçons / cartes) et le lien du bouton dans `index.html`,
  puis mettre à jour `lastmod` dans `sitemap.xml`.
- Nouvelle leçon : ajouter sa carte dans `index.html` (avec ses
  images dans `assets/`) et ajuster les compteurs.
- Les images ont leurs largeurs fixées en attributs HTML : elles ne
  débordent jamais, même si la CSS en cache est l'ancienne.

## Licence

CC BY-SA 4.0 — voir [LICENSE](LICENSE).
