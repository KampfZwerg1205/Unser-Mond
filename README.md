# Unser Mond ❤️

Eine romantische, persönliche Webseite als Geschenk.

## Starten

Einfach `index.html` doppelt anklicken.

Für einen lokalen Webserver (optional):

```powershell
python -m http.server 8000
```

Dann im Browser `http://localhost:8000` öffnen.

## Eigene Fotos

Erstelle:

`assets/photos/`

Lege dort eure Bilder ab und ersetze in `index.html` die `.photo-placeholder`-Blöcke durch `<img>`-Elemente.

## Musik

Lege euer Lied als:

`assets/song.mp3`

ab und ergänze in `index.html` im Audio-Element:

```html
<source src="assets/song.mp3" type="audio/mpeg">
```

Hinweis: Browser blockieren automatisches Abspielen. Die Musik startet deshalb erst nach Klick auf das ♫-Symbol.

## Wichtiges Datum

Die Seite verwendet den 12.08.2026 als Datum für „1 Jahr & 3 Monate“, weil ihr am 12.05.2025 offiziell zusammengekommen seid.

## Inhalte

Die Texte basieren auf deiner erzählten Geschichte. Du kannst sie jederzeit in `index.html` ändern.


## Eingefügte Fotos
Die mitgelieferten Fotos `Erstestreffen.jpg`, `Koblenz.jpg` und `Frankreich.jpg` sind bereits in der Timeline und Galerie eingebaut. Klick auf ein Foto öffnet es groß.
