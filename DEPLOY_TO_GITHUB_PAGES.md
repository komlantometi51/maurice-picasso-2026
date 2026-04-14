# Déploiement sur GitHub Pages

Ce dossier contient maintenant un `index.html` qui redirige vers `vente.html` et un fichier `.nojekyll` pour éviter le traitement Jekyll.

## Étapes pour déployer

1. Installer Git si ce n’est pas déjà fait : https://git-scm.com/downloads
2. Ouvrir un terminal dans le dossier `ventesd`
3. Exécuter :

```bash
git init
git add .
git commit -m "Déploiement site ShopExpress"
```

4. Créer un dépôt GitHub sur ton compte, puis ajouter le remote :

```bash
git remote add origin https://github.com/TON_UTILISATEUR/NOM_DU_DEPOT.git
git branch -M main
git push -u origin main
```

5. Activer GitHub Pages depuis les paramètres du dépôt :
   - `Settings` → `Pages`
   - Source : `main` branch, dossier `/ (root)`

6. Le site sera publié automatiquement sur `https://TON_UTILISATEUR.github.io/NOM_DU_DEPOT/`

## Remarque

Je n’ai pas pu pousser directement vers GitHub depuis cet environnement car `git` n’est pas installé et il n’y a pas de dépôt Git existant.
