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

## Critical Rendering Path

### Lighthouse
Tijdens het draaien van lighthouse op heroku kreeg ik een melding Something broke! De server was daarna helemaal niet meer berijkbaar en het opnieuw deployen werkt ook niet meer.


![image](https://user-images.githubusercontent.com/29665951/161924172-e58608a9-1718-4c6d-af89-f83b54bb933d.png)

![image](https://user-images.githubusercontent.com/29665951/161923933-08a7c974-fc57-47e7-bf0b-71c3a38e7a02.png)

Het probleem zat niet in lighthouse maar dat de api die ik gebruikt een nieuw schilderij heeft toegevoegd zonder afbeelding. Mijn code had geen fallback daarom kreeg ik de error. De oplossing was een if statement er om heen  te plaatsen dat check of een afbeelding bestaat.

<% if(data.artObjects[i].webImage != null){ %>

Nadat de code was opgelost is dit mijn lighthouse report.

![image](https://user-images.githubusercontent.com/29665951/161938614-5d49c7da-d9db-4302-b239-cac8469328f2.png)

Ik heb kleine aanpassingen gedaan in de code waardoor de score omhoog is gegaan. De app heeft nu ook een groen vinkje bij PWA. Bij Performance kon ik de afbeeldingen aanpassen naar een betere versie om 100% te krijgen maar omdat de afbeelding van een api afkomt is kan ik dit niet makelijk doen.

![image](https://user-images.githubusercontent.com/29665951/161955140-51e2f188-61e2-4d61-91e2-691c11b73e4c.png)

### Kleine images ophalen
img.src = data.artObjects[0].webImage.url.slice(0, -3)+"=s1000";
 
#### Uitleg code
Wanneer je de url hebt van een afbeelding eindigt dit met =s0.
s0: de grootste afbeelding
s1000: normaal formaat
 
url.slice(0, -3) zorgt er voor dat de laatste letters van de url verwijdert worden en + "=s1000" plaatst tekst achter de url.



## Breakdown-graph

Home page

![iPhone 12 Pro Max – 7](https://user-images.githubusercontent.com/29665951/157004752-3c801788-6f47-47fa-b8a7-d2d3fe369745.png)

Menu

![iPhone 12 Pro Max – 8](https://user-images.githubusercontent.com/29665951/157004750-fb5224d2-521b-41ac-9e5a-833e762f575f.png)

## User flow

![iPhone 12 Pro Max – 9](https://user-images.githubusercontent.com/29665951/157010201-88c27901-29a6-426e-863d-ccc4cf6b251d.png)

## Activity diagram

![iPhone 12 Pro Max – 15](https://user-images.githubusercontent.com/29665951/161968873-00f9f7ca-94d2-46e1-9fb7-2e769ff7f0fc.png)

## Wat ik nog willen doen
* Wanneer je een pagina gaat laaden deze opgeslagen word in de cache
* Minifying css, js en html.
* Meer verdiepen in optimaliseren van code
* Stylen van offline pagina
* Style van pagina niet gevonden


