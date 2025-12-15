# Portfolio Website

Een moderne, responsieve portfolio website gebouwd met HTML, CSS (Tailwind) en JavaScript.

## Setup

1. Clone deze repository
2. Kopieer `config.example.js` naar `config.js`:
   ```bash
   cp config.example.js config.js
   ```
3. Vul je persoonlijke informatie in `config.js` in:
   ```javascript
   const CONFIG = {
       name: "Jouw Naam",
       email: "jouw.email@example.com",
       linkedin: "https://www.linkedin.com/in/jouw-profiel/",
       github: "https://github.com/jouwgebruikersnaam"
   };
   ```

## Lokaal draaien

Open `index.html` in je browser of gebruik een lokale server:

```bash
# Met Python
python -m http.server 8080

# Met Node.js http-server
http-server
```

## Deployment

### GitHub Pages
1. Push je code naar GitHub (zonder `config.js` - deze staat in `.gitignore`)
2. Ga naar Settings > Pages
3. Selecteer de branch en map
4. **Belangrijk**: Maak een nieuwe `config.js` file aan via de GitHub interface met je gegevens

### Netlify/Vercel
1. Deploy de repository
2. Voeg een environment variable toe of maak `config.js` aan na deployment

## Privacy

De `config.js` file bevat persoonlijke informatie en wordt **niet** gecommit naar Git.
Andere gebruikers moeten hun eigen `config.js` maken op basis van `config.example.js`.

## Structuur

```
portfolio.olavano/
├── index.html          # Hoofdpagina
├── config.js           # Persoonlijke config (niet in Git)
├── config.example.js   # Voorbeeld config
├── .gitignore         # Git ignore file
├── assets/            # Afbeeldingen en media
└── README.md          # Deze file
```

## Features

- ✅ Responsive design
- ✅ Modern UI met Tailwind CSS
- ✅ Mobile menu
- ✅ Scroll-aware header
- ✅ Project showcases
- ✅ Contact sectie
- ✅ Privacy-vriendelijk (persoonlijke info in config)
