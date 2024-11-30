[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Y0f03qEq)
# Instruktioner

Denna uppgift går ut på att du bygga vidare uppgift u01 - Portfoliosida utifrån designskiss med Javascript. Du är nu fri att ändra till egen design / layout, samt eget innehåll. Det är dock viktigt att du behåller en sektion för CV ("About me") och en sektion med projekt ("Projects") eftersom du ska vidareutveckla sidan med Javascript på dessa sektioner. 

## Vad du ska göra

Du ska bygga vidare på  u01 - Portfoliosida utifrån designskiss med Javascript. och se till att du följer följande kravställningar: 

### CV i en fil:
Dina egna utbildningar och tidigare arbetsplatser ska nu ersätta "About me"-sidan. Ta med så mycket som möjligt att ditt "riktiga CV", men iallafall minst tre poster av varje.
Vilka utbildningar du läst och vilka tidigare arbeten du haft ska ligga i en separat fil i JSON-format. Denna JSON-fil ska läsas och och generera ditt CV på den tidigare motsvarigheten av "About me" sidan.


### Interaktiva scripts:
Din CV-sida ska innehålla minst två interaktiva JavaScript. Exempel kan vara en modal, slideshow, scroll-effekt, dölja/visa element, o.s.v

### Portfolio:
 Du publicerar minst två uppgifter / projekt från tidigare eller nuvarande studier / arbete inom HTML /CSS

### 👉  VG-krav

Din portfolio ska utökas så att den hämtar in publika projekt som finns i din egen Github via API. Den ska visa dessa projekt i din portfolio med namn och beskrivning.

Du får gärna ha både dessa projekt och andra som genereras utifrån JSON-data om du känner för det, eller så ersätter du projekten så det bara är dina Github-projekt. Eventuellt kan du behöva komplettera datan från Github API med t.ex bilder ifrån JSON-datan.

När hämtningen av projekten sker ska det finnas information om att projekten håller på att ladda in så att besökaren inte undrar varför sidan först är tom.



### Tekniska krav:
* Validerad med 0 fel på https://validator.w3.org
* Inga errors i Console

### Sammantfattning av projekt + teoretiska frågor

1. Du sammanfattar ditt projekt i README.md och reflekterar kring styrkor och ev brister. Max 500 ord.
2. Du svarar på dessa frågor (max 800 ord):

Vad kan man utveckla m.h.a av Javascript inom frontend?
Vad är JSON och hur används det inom frontend?
Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

## Sammanfattning 

# Projektets styrkor:
Jag har valt att hämta data från en JSON-fil för att enkelt kunna uppdatera innehållet utan att behöva ändra själva HTML-strukturen. Jag tycker att detta är en av de största styrkorna med projektet, eftersom det gör sidan flexibel och lätt att underhålla samt att jag lagt mycket tid på att verkligen förstår asynkrona funtioner.
Jag har också lagt mycket fokus på användarupplevelsen genom att inkludera funktioner som en kontaktmodal, smidig scroll-funktionalitet och animeringar som aktiveras vid scroll. Jag tror att dessa detaljer hjälper till att göra sidan mer engagerande och användarvänlig. Designen är responsiv och fungerar lika bra på mobiler som på större skärmar vilket också är extremt viktigt för engagemanget.

# Projektets svagheter:
Jag känner att jag verkligen behöver öva mer och inte ligger på den nivå jag skulle velat. Var tvungen att skala ned projektet rätt mycket och utgå ifrån den gamla designen istället för att göra en ny då jag hade influensa i ca två veckor och knappt kunde sitta vid datorn under denna tid. Detta är också varför jag valde att bara uppfylla G-kraven. Had det inte voorit för detta hade jag definitivt siktat på ett VG och gjort en egen design utformad för vilka funktioner jag velat ha med.

# Vad kan man utveckla m.h.a av Javascript inom frontend?
Med JavaScript kan man bygga en mängd olika funktioner som förbättrar webbplatser och applikationer, man kan skapa interaktiva användargränssnitt genom modal-fönster, animerade knappar, och dolda element som kan visas eller döljas baserat på användarens interaktion. JavaScript används för att skapa visuella effekter, såsom animerade övergångar mellan olika sektioner av en webbplats.
Det är ett ovärderligt kodspråk när det gäller att hantera och presentera data. Med hjälp av API-anrop kan man hämta data från externa källor och dynamiskt visa den på en sida.
Verktyg och ramverk som React och Vue gör det möjligt att bygga Single Page Applications (SPA), där innehåll laddas dynamiskt utan att användaren behöver navigera till nya sidor.

# Vad är JSON och hur används det inom frontend?
JSON, står för JavaScript Object Notation är ett dataformat bestående av objekt och arrayer som andvänds för att representera strukturerad information utan att behöva ändra i HTML-strukturen. I frontendutveckling används JSON ofta för att hämta och hantera data från API:er eller från lokala resurser som lagras i projektet.Ett vanligt användningsområde för JSON är att skicka och ta emot data mellan klienten och servern via API-anrop. När en användare exempelvis laddar en sida som visar väderdata, skickar klienten en förfrågan till servern som svarar med väderinformation i JSON-format. På detta sätt kan dynamiskt innehåll presenteras utan att sidan behöver laddas om. JSON används också för att generera innehåll dynamiskt på en webbplats, som i detta projekt. Det används även inom webbläsarlagring, exempelvis med localStorage eller sessionStorage, för att spara och hantera data som behövs mellan olika sessioner. 

# Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?
HTTP, eller Hypertext Transfer Protocol, är ett grundläggande protokoll som styr hur data överförs mellan klienter (vanligtvis webbläsare) och servrar på internet. Det är det viktigaste kommunikationsprotokollet på webben och spelar en central roll i att möjliggöra datautbyte mellan användare och applikationer. För en frontendutvecklare är det viktigt att ha en god förståelse för HTTP eftersom det påverkar hur webbplatser och applikationer fungerar. En viktig del av HTTP är metoder som GET, POST, PUT och DELETE, vilka används för att hämta, skicka, uppdatera eller ta bort data från en server. Förståelsen av HTTP-statuskoder, som 200 (OK), 404 (sidan hittades inte) och 500 (serverfel), är också avgörande för att kunna felsöka problem. Ett annat relevant område är säkerhet och Cross-Origin Resource Sharing (CORS), som reglerar hur resurser delas mellan olika domäner. För frontendutvecklare är det särskilt viktigt att förstå detta när man arbetar med API:er från externa källor. Genom att ha kunskap om HTTP och dess protokoll kan frontendutvecklare optimera sina applikationer.

## Kriterier för bedömning


Icke Godkänd (IG), Godkänd (G) eller Väl Godkänd (VG)

### Godkänd (G)
Din portfolio-sida uppfyller alla krav enligt kravspecifikationen.
Du visar att du kan utan allvarliga brister eller missar utveckla denna portfoliosida enligt kraven
Du sammanfattar ditt projekt samt ger ett översiktligt och korrekt svar på frågorna


### Väl Godkänd (VG)

Din portfolio-sida uppfyller alla krav enligt kravspecifikationen samt VG-kraven
Du uppvisar en mer avancerad förståelse för Git genom att jobba med en developer-branch som du sedan mergar i main
Du visar att du kan utan brister, eller bara i sådan omfattning att de knappt märks eller påverkar slutresultatet


### Börja uppgift / Din inlämning
* Du börjar och lämnar in din uppgift genom Github Classroom på denna länk.
* Återkoppling ges i Canvas











# 
