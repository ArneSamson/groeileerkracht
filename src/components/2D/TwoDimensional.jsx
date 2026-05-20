import React from "react";

export default function TwoDimensional() {

  const kwaliteiten = [
    {
      titel: "1. Doelgerichte media-integratie",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      situatie: "Bij het uitleggen van abstracte concepten zoals SDG's, HTML of programmeerlogica.",
      feedback: "Vanuit mijn stage-observaties kreeg ik te horen dat mijn PowerPoints en digitale tools (zoals Wooclap en Canva) veel structuur, houvast en afwisseling bieden voor de leerlingen.",
      actie: "Ik blijf mijn instructies visueel ondersteunen en bouw steeds vaker interactieve digitale momenten in om de theorie direct te laten verwerken.",
      toekomst: "Ik wil blijvend inzetten op actieve werkvormen via technologie in plaats van passieve presentaties.",
      ictLink: "Door mijn rol in het vormen van het ICT-beleid zie ik nu het grotere plaatje van hardware/software integratie op school. Hierdoor weet ik nog beter welke tools duurzaam en veilig inzetbaar zijn in de klas, zonder afhankelijk te zijn van kortstondige hypes."
    },
    {
      titel: "2. Coachende begeleiding en stimuleren van autonomie",
      dlr: "De leraar als begeleider / Specifiek voor onze opleiding (OLR)",
      situatie: "Tijdens zelfstandig werk en actieve werkvormen zoals de studiekeuzecarrousel.",
      feedback: "Mijn vakcollega merkte op dat ik leerlingen de ruimte geef om zelf na te denken en hun eigen interesses te verwoorden zonder de antwoorden voor te kauwen.",
      actie: "Ik pas 'Socratisch doorvragen' toe: in plaats van een oplossing te geven, stel ik wedervragen waardoor de leerling zelf tot het inzicht komt.",
      toekomst: "Ik wil leerlingen nog meer eigenaarschap geven over hun eigen leerproces door hen keuzes te bieden in opdrachten.",
      ictLink: "Binnen het ICT-beleid is het cruciaal om collega's te coachen en te overtuigen in plaats van tools top-down op te dringen. Deze coachende, ondersteunende vaardigheid vertaal ik nu ook direct naar mijn aanpak bij de leerlingen."
    },
    {
      titel: "3. Digitaal efficiënt organiseren",
      dlr: "De leraar als organisator",
      situatie: "Tijdens de klaspraktijk, bij het bewaken van de lestiming en het structureren van opdrachten.",
      feedback: "Docenten gaven aan dat ik zeer efficiënt gebruik maak van digitale timers gecombineerd met geprojecteerde instructies (zoals via Classroomscreen), wat de lestiming ten goede komt.",
      actie: "Ik zet deze digitale hulpmiddelen nu standaard in bij de start van elke groepsopdracht om de verwachtingen en timing glashelder te maken.",
      toekomst: "Ik blijf zoeken naar digitale oplossingen die de klasorganisatie en het klasmanagement soepeler en visueler maken.",
      ictLink: "Tijdens mijn profileringsstage onderzoek ik welke platformen en systemen de school het best kan implementeren voor een vlottere organisatie. Deze helikoptervisie op digitale efficiëntie heeft mijn eigen klasorganisatie aanzienlijk versterkt."
    },
    {
      titel: "4. Vakinhoudelijke expertise",
      dlr: "De leraar als inhoudelijk expert",
      situatie: "Tijdens lessen informaticawetenschappen (HTML/JS) en SDG+ projecten over economie.",
      feedback: "Observatoren bevestigden dat ik vragen over aanleunende domeinen vlot, correct en met zelfvertrouwen beantwoord.",
      actie: "Ik durf nu ook steeds vaker te putten uit mijn eigen studie- en werkervaringen om de leerstof te koppelen aan de leefwereld van de leerlingen.",
      toekomst: "Ik wil me blijven bijscholen in nieuwe IT-talen en economische trends om mijn vakkennis scherp te houden.",
      ictLink: "Mijn functie in de ICT-werkgroep dwingt me om up-to-date te blijven met de nieuwste educatieve technologieën en privacy-wetgevingen. Deze brede IT-kennis verrijkt mijn vakkennis direct wanneer leerlingen technische vragen stellen."
    },
    {
      titel: "5. Taalbewustzijn en verbindend klasklimaat",
      dlr: "Schriftelijke en mondelinge taal / De leraar als opvoeder",
      situatie: "Tijdens instructiemomenten en in de omgang tussen leerlingen onderling.",
      feedback: "Mijn stagebegeleider prees mijn aandacht voor verzorgd taalgebruik en het corrigeren van onbeleefd of informeel taalgebruik bij leerlingen.",
      actie: "Ik let bewust op formelere instructietaal met duidelijke signaalwoorden, en spreek leerlingen onmiddellijk aan op ongepast taalgebruik.",
      toekomst: "Ik wil blijvend inzetten op een respectvolle, veilige omgeving waar heldere communicatie centraal staat.",
      ictLink: "Het uitschrijven van formele ICT-protocollen en beleidsteksten voor directie en collega's heeft me getraind in helder, formeel en onomwonden communiceren. Dit taalbewustzijn pas ik nu ook veel strikter toe tijdens het lesgeven."
    }
  ];

  const uitdagingen = [
    {
      titel: "1. Administratieve discipline en uitstelgedrag",
      dlr: "De leraar als organisator",
      situatie: "Bij het tijdig indienen van lesvoorbereidingen, stageplanningen en het verbeteren van taken.",
      feedback: "Ik werd er door mijn stagebegeleider streng op gewezen dat mijn stageplanning en lesvoorbereidingen soms onvolledig of niet tijdig in orde waren.",
      actie: "Ik heb direct de ontbrekende documenten in orde gebracht en ben met een digitale agenda en reminders beginnen werken.",
      toekomst: "Ik wil vaste administratieve 'blokken' inplannen in mijn werkweek om uitstelgedrag structureel tegen te gaan.",
      ictLink: "In een beleidsfunctie rond ICT is punctualiteit cruciaal; als een protocol te laat is, loopt de school vast. Het beheren van dit beleid heeft me doen inzien dat ik mijn eigen administratieve discipline net zo strak moet organiseren als de ICT-infrastructuur."
    },
    {
      titel: "2. Consequent klasmanagement en leiderschap",
      dlr: "De leraar als opvoeder",
      situatie: "Bij het binnenkomen van de klas of tijdens de opstart van de les waarbij rumoer heerst.",
      feedback: "Observatoren gaven aan dat ik soms te veel 'chiroleider' ben, mijn eigen afspraken niet altijd consequent opvolg en het overzicht verlies.",
      actie: "Ik dwing nu meer rust af door een vaste klasschikking te hanteren, de leerlingen geordend binnen te laten en te wachten op absolute stilte voor ik start.",
      toekomst: "Ik moet de grens tussen toegankelijke begeleider en de autoriteit van een leerkracht vanaf minuut één scherper stellen en bewaken.",
      ictLink: "Een nieuw ICT-beleid invoeren eist dat je regels (bijv. rond correct laptopgebruik) streng afdwingt bij leerlingen én collega's. Dit inzicht uit mijn profileringsstage helpt me om ook in mijn eigen lokaal sterker en consequenter op te treden."
    },
    {
      titel: "3. Visuele ondersteuning bij instructies",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      situatie: "Bij complexe of langdurige opdrachten, zoals de Canva- of HTML-projecten.",
      feedback: "Ik kreeg te horen dat ik mondeling vaak te snel ga over de theorie en dat leerlingen halverwege de draad kwijtraken omdat er geen papieren houvast is.",
      actie: "Ik ben me bewuster geworden van het projecteren van instructies en probeer stappenplannen aan te bieden.",
      toekomst: "Ik wil er een routine van maken om bij complexe werkvormen standaard papieren checklists, rubrics en visuele schema's aan het bord te voorzien.",
      ictLink: "Net zoals we in het ICT-beleid toegankelijke 'how-to' handleidingen schrijven voor docenten die vastlopen met technologie, moet ik dit soort visuele, stapsgewijze handleidingen ook standaard voor mijn leerlingen voorzien."
    },
    {
      titel: "4. Helikopterview bewaren tijdens groepswerk",
      dlr: "De leraar als opvoeder / Begeleider",
      situatie: "Tijdens werkvormen waarbij leerlingen in groepjes of duo's werken (zoals de SDG-projecten).",
      feedback: "De vakcollega merkte op dat ik soms te lang bij één groepje blijf stilstaan, waardoor andere groepen onrustig worden of ik storend gedrag achterin de klas mis.",
      actie: "Ik probeer bewuster een 'circulaire' looproute in de klas aan te nemen en vaker achteraan in het lokaal te gaan staan met een pointer.",
      toekomst: "Ik wil mezelf aanleren om fysiek de ruimte beter te benutten en continu de klas te scannen, ook al ben ik in gesprek met één leerling.",
      ictLink: "Een beleidsmaker moet het overzicht over de héle school behouden en mag zich niet verliezen in één lokaal detailprobleem. Deze strategische 'helikopterview' uit mijn PS oefen ik nu ook fysiek in de klasruimte."
    },
    {
      titel: "5. Differentiëren vanaf de opstart",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      situatie: "Bij lessen waar de leerverschillen groot zijn, zoals bij het aanleren van programmeren (JavaScript/Python).",
      feedback: "Feedback toonde aan dat mijn differentiatie pas aan het einde van de les kwam als extraatje, waardoor snelle werkers de motivatie verloren en tragere werkers vastliepen.",
      actie: "Ik probeer nu basis- en verdiepingsopties (zoals bonusopdrachten) klaar te leggen voor de les start.",
      toekomst: "Ik wil differentiatie veel structureler inbouwen (UDL principes) door van bij de instructie de keuze te geven uit verschillende moeilijkheidsgraden of tempo's.",
      ictLink: "Bij het uitwerken van het ICT-beleid ervaar ik hoe sterk de digitale vaardigheden van leerkrachten onderling verschillen. Dit beleid moet gedifferentieerd zijn, en dat geldt des te meer voor de leerlingen in mijn klas."
    }
  ];

  return (
    <div className="groeiverslag-html-container">

      <header className="groeiverslag-header">
        <h1>Mijn Groeileerkracht — Profileringsstage</h1>
        <p className="groeiverslag-sub">
          Traject: Verkorte Educatieve Bachelor | Inzichten uit praktijk, groei en ICT-beleid
        </p>
      </header>

      <section className="groeiverslag-section">
        <h2>Mijn 5 Kwaliteiten</h2>
        <div className="card-container">
          {kwaliteiten.map((item, index) => (
            <div className="competentie-card excelleren" key={index}>
              <div className="card-header">
                <h3>{item.titel}</h3>
                <span className="badge status-excelleren">DLR: {item.dlr}</span>
              </div>
              <div className="card-body">
                <p><strong>Situatie:</strong> {item.situatie}</p>
                <p><strong>Feedback/Inzicht:</strong> {item.feedback}</p>
                <p><strong>Actie:</strong> {item.actie}</p>
                <p><strong>Toekomst:</strong> {item.toekomst}</p>
                <div className="ict-link">
                  <p><strong>Link Profileringsstage (ICT-beleid):</strong> {item.ictLink}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="groeiverslag-section">
        <h2>Mijn 5 Uitdagingen</h2>
        <div className="card-container">
          {uitdagingen.map((item, index) => (
            <div className="competentie-card remedieren" key={index}>
              <div className="card-header">
                <h3>{item.titel}</h3>
                <span className="badge status-remedieren">DLR: {item.dlr}</span>
              </div>
              <div className="card-body">
                <p><strong>Situatie:</strong> {item.situatie}</p>
                <p><strong>Feedback/Inzicht:</strong> {item.feedback}</p>
                <p><strong>Actie:</strong> {item.actie}</p>
                <p><strong>Toekomst:</strong> {item.toekomst}</p>
                <div className="ict-link highlight">
                  <p><strong>Link Profileringsstage (ICT-beleid):</strong> {item.ictLink}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}