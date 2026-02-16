# 🚀 Portfolio — Mardochée KIKIGBAGBAN

Portfolio personnel de **Mardochée KIKIGBAGBAN**, Lead Développeur Full-stack Python basé à Dakar, Sénégal.

> Site web statique construit en pur HTML / CSS / JavaScript — sans framework.

![Portfolio Preview](assets/preview.png)

---

## ✨ Fonctionnalités

- **Navigation flottante** avec liens sociaux (LinkedIn, GitHub, Email) et accès rapide aux projets
- **Hero section** avec photo de profil, badges flottants (architecture, performance, scalabilité) et statut de disponibilité
- **Section citation** personnalisée
- **Marquee tech stack** avec défilement automatique infini des technologies maîtrisées
- **Section À propos** avec bio détaillée
- **7 projets** présentés avec images réelles, descriptions, tags technologiques et bouton "voir plus"
- **Formation** — ISM (Master) et ESMT (Licence)
- **Expérience professionnelle** — Volkeno (Lead Dev & Backend Dev)
- **8 certifications** — IBM, Coursera (Python, DevOps, Cloud, Agile, etc.)
- **Section contact** avec email, téléphone et liens sociaux
- **Animations** — scroll reveal, hover effects, marquee, floating badges
- **Responsive** — adapté mobile, tablette et desktop

---

## 🛠️ Technologies

| Catégorie | Technologies |
|-----------|-------------|
| Structure | HTML5 sémantique |
| Design | CSS3 (variables, grid, flexbox, animations, media queries) |
| Interactivité | JavaScript vanilla (Intersection Observer, smooth scroll) |
| Typographie | [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts) |

---

## 📁 Structure du projet

```
portfolio-mardochee/
├── index.html          # Page unique du portfolio
├── style.css           # Design system complet + responsive
├── script.js           # Navigation, animations, interactions
├── assets/
│   ├── profile.png     # Photo de profil
│   ├── project-controlfer.png
│   ├── project-excelsis.png
│   ├── project-taf.png
│   ├── project-defaru.png
│   ├── project-niafey.png
│   ├── project-easymarket.png
│   └── project-happypro.png
├── README.md
├── LICENSE
└── .gitignore
```

---

## 🚀 Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/CHRISTMardochee/portfolio-mardochee.git
cd portfolio-mardochee

# Option 1 : Python
python3 -m http.server 8080

# Option 2 : Node.js
npx serve .

# Option 3 : VS Code
# Installer l'extension "Live Server" et cliquer sur "Go Live"
```

Ouvrir ensuite **http://localhost:8080** dans le navigateur.

---

## 🌐 Déploiement

### GitHub Pages (recommandé)

1. Pousser le code sur GitHub
2. Aller dans **Settings → Pages**
3. Source : **Deploy from a branch**
4. Branche : `main` / dossier `/ (root)`
5. Sauvegarder — le site sera disponible à `https://christmardochee.github.io/portfolio-mardochee/`

### Vercel (alternative)

1. Connecter le dépôt GitHub sur [vercel.com](https://vercel.com)
2. Framework : **Other**
3. Déployer — un domaine `.vercel.app` sera attribué automatiquement

### Netlify (alternative)

1. Glisser-déposer le dossier du projet sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Ou connecter le dépôt GitHub pour un déploiement continu

---

## 📝 Personnalisation

| Élément | Fichier | Section |
|---------|---------|---------|
| Informations personnelles | `index.html` | Hero, About, Contact |
| Projets | `index.html` | Projects section |
| Couleurs / Design | `style.css` | Variables CSS (`:root`) |
| Animations | `style.css` | `@keyframes` |
| Certifications | `index.html` | Certifications section |

---

## 📄 Licence

Ce projet est sous licence MIT — voir le fichier [LICENSE](LICENSE).

---

## 👤 Contact

- **Email** : kgmardochee@gmail.com
- **Téléphone** : +221 77 138 53 10
- **LinkedIn** : [linkedin.com/in/mardocheekg](https://www.linkedin.com/in/mardocheekg)
- **GitHub** : [github.com/CHRISTMardochee](https://github.com/CHRISTMardochee)
