# Progressive Web Apps kunst app
Voor deze opdracht heb ik gebruik gemaakt van de rijksmuseum API. Met de API kan je informatie opvragen over schilderijen zoals: titels, datums, afbeeldingen etc. Ik heb een app gemaakt waarbij je kan swipen door verschillede schilderijen van het rijksmuseum. Een functionaliteit die ik heb toegevoegd is dat je de schilderijen kan filteren op kunstenaar.

![image](https://user-images.githubusercontent.com/29665951/157015442-395de83e-26c5-4157-ad50-831a6b8ef4ff.png)

Ik heb de app staan op deze server. https://art-api-147.herokuapp.com/

## Start node server

* Download node https://nodejs.org/en/
* Clone deze repository
* Open the terminal in the editor
* Check of je terminal path klopt ander aanpassen door te navigeren met cd
* Type node app.js
* Om de server te sluiten type ctl n

## Serverside rendering
De app die ik heb gemaakt is omgezet naar Serverside rendering. Het voordeel van het renderen van code op de server is dat de website sneller werkt, Vooral voor mensen die niet de nieuwse aparaten hebben kunnen ze de website bekijken met minder vertraging. Het werkt doordat niet de browser de javascript code gaat uitvoeren maar dat de server dit voor je gaat doen. Voordeel van serverside renderen is dat het voor meerderen mensen beter toegankelijk is te gebruiken. Nadeel is dat dit voor de server meer energie gaat kosten en dus meer geld.

## Service Worker 
Waneer je mijn app voor het eerste bezoekt gaat deze data opslaan in de browser storage. Waneer je opnieuw de app bezoekt hoeft die niet opnieuw data optehallen van de server maar kan dat direct vanuit de browser storage.

## Activity diagram

## Breakdown-graph

Home page

![iPhone 12 Pro Max – 7](https://user-images.githubusercontent.com/29665951/157004752-3c801788-6f47-47fa-b8a7-d2d3fe369745.png)

Menu

![iPhone 12 Pro Max – 8](https://user-images.githubusercontent.com/29665951/157004750-fb5224d2-521b-41ac-9e5a-833e762f575f.png)

## User flow

![iPhone 12 Pro Max – 9](https://user-images.githubusercontent.com/29665951/157010201-88c27901-29a6-426e-863d-ccc4cf6b251d.png)

## Activity diagram

![iPhone 12 Pro Max – 14](https://user-images.githubusercontent.com/29665951/157256361-36206d8b-1d18-40d3-a1a6-cb8bef519d48.png)
