import React from "react";

export default function TwoDimensional() {

const kwaliteiten = [
    {
      titel: "1. Digitaal efficiënt organiseren en managen",
      dlr: "De leraar als organisator",
      situatie: "Bij het structureren van klasopdrachten en het bewaken van de lestiming.",
      feedback: "Observatoren gaven aan dat ik zeer efficiënt gebruik maak van digitale hulpmiddelen en timers, wat de klasorganisatie sterk ten goede komt.",
      actie: "Ik zet tools zoals Classroomscreen nu standaard in bij de start van elke groepsopdracht om de verwachtingen glashelder te maken.",
      toekomst: "Ik blijf zoeken naar digitale oplossingen die de klasorganisatie en het management soepeler en visueler maken.",
      ictLink: "Tijdens de werkgroep ICT-beleid merkte ik dat ik een grote management-meerwaarde kon bieden voor Jeroen (directeur) en Steven (IT-verantwoordelijke). Ik introduceerde 'Notion' om onze taken en deadlines voor SGR overzichtelijk te verdelen en te managen. Deze projectmatige, strakke digitale structuur trek ik nu ook door naar de organisatie in mijn eigen leslokaal."
    },
    {
      titel: "2. Doelgerichte media-integratie en vlotte softwarekennis",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      situatie: "Bij het uitleggen van abstracte concepten zoals SDG's, HTML of programmeerlogica.",
      feedback: "Mijn stagebegeleiders zagen dat mijn PowerPoints, Wooclap-sessies en Canva-opdrachten veel structuur en actieve verwerking bieden.",
      actie: "Ik blijf mijn instructies visueel ondersteunen en bouw steeds vaker interactieve momenten in om de theorie direct te laten verwerken.",
      toekomst: "Ik wil blijvend inzetten op actieve werkvormen via de nieuwste technologieën.",
      ictLink: "Tijdens vergaderingen merkte ik dat ik enorm snel overweg kan met de nieuwste software, waardoor ik de 'vervelende' en snelle taakjes vlot uit handen van Jeroen en Steven kon nemen. Diezelfde vlotheid met nieuwe tools stelt me in de klas in staat om media zeer doelgericht en zonder tijdverlies in te zetten voor mijn leerlingen."
    },
    {
      titel: "3. Een 'jonge', frisse blik en innovatieve houding",
      dlr: "Innovator/onderzoeker / OLR (Gepassioneerde leraar)",
      situatie: "Bij het ontwerpen van nieuwe lesmaterialen en het aansluiten bij de leefwereld van jongeren.",
      feedback: "Collega's en stagebegeleiders waarderen mijn enthousiasme en de moderne, projectmatige (SDG+) aanpak die ik in de klas breng.",
      actie: "Ik probeer theorie (zoals economie of informatica) continu te koppelen aan actuele, digitale thema's die bij jongeren spelen.",
      toekomst: "Ik wil deze open houding behouden en blijven experimenteren met nieuwe didactische werkvormen en tools.",
      ictLink: "Aan de bestuurstafel met Jeroen en Steven bracht ik bewust een 'jonge blik' binnen. Ik bekeek processen vanuit een ander, moderner perspectief. Deze bereidheid om vastgeroeste gewoontes uit te dagen en te innoveren, gebruik ik ook dagelijks om mijn lessen aantrekkelijker te maken voor mijn leerlingen."
    },
    {
      titel: "4. Vakinhoudelijke expertise en drang naar verdieping",
      dlr: "De leraar als inhoudelijk expert",
      situatie: "Tijdens lessen informaticawetenschappen (HTML/JS) en het beantwoorden van technische bijvragen.",
      feedback: "Observatoren bevestigden dat ik vragen over aanleunende domeinen vlot, correct en met zelfvertrouwen beantwoord.",
      actie: "Ik put steeds vaker uit actuele IT-ontwikkelingen om de leerstof te verrijken en abstracte code-voorbeelden tastbaar te maken.",
      toekomst: "Ik wil me blijven bijscholen in nieuwe IT-talen en bredere netwerkstructuren om mijn vakkennis breed te houden.",
      ictLink: "Luisteren naar de parate kennis van Jeroen en Steven over softwarepakketten, budgetten en campus-overkoepelende licenties op het BA was een enorme leerschool. Het gaf me een ongefilterde blik op wat er écht achter de schermen van een ASO-school draait, wat mijn theoretische vakkennis als leerkracht informatica enorm heeft verdiept."
    },
    {
      titel: "5. Taalbewustzijn en professionele communicatie",
      dlr: "Schriftelijke en mondelinge taal",
      situatie: "Tijdens klassikale instructiemomenten en in het uitschrijven van lesvoorbereidingen.",
      feedback: "Mijn stagebegeleider prees mijn bewuste aandacht voor verzorgd taalgebruik en de correcte manier waarop ik informele spreektaal probeer te vermijden.",
      actie: "Ik let bewust op formelere instructietaal met duidelijke signaalwoorden, en corrigeer ook respectvol het taalgebruik van leerlingen onderling.",
      toekomst: "Ik blijf werken aan een professionele, heldere en verzorgde uitdrukkingsvaardigheid, zowel mondeling als in mijn lesmateriaal.",
      ictLink: "Het notuleren van vergaderingen op directieniveau en het vertalen van ons actieplan naar een formeel document voor Scholengroep 5 (SGR) dwong me om uiterst professioneel en helder te communiceren. Deze formele, gestructureerde manier van communiceren werpt nu ook zijn vruchten af tijdens mijn instructies voor de klas."
    }
  ];

  const uitdagingen = [
    {
      titel: "1. Zelfvertrouwen als expert en het 'imposter syndrome'",
      dlr: "De leraar als inhoudelijk expert / OLR",
      situatie: "Bij confrontaties met complexe, schoolbrede ICT-problemen of diepgaande technische vragen van sterke leerlingen.",
      feedback: "Ik merk zelf dat ik soms twijfel aan mijn eigen autoriteit en kennis, ondanks een sterke voorbereiding.",
      actie: "Ik probeer te accepteren dat ik als startende leerkracht niet alles direct hoef te weten en durf ook aan leerlingen toe te geven als we iets samen moeten uitzoeken.",
      toekomst: "Ik moet bouwen aan het vertrouwen dat mijn basis sterk is, en dat het oké is om te blijven leren.",
      ictLink: "Tijdens de werkgroep voelde ik me vaak een 'imposter'. Terwijl Jeroen en Steven budgetten en pakketten uit hun hoofd wisten, kon ik enkel luisteren. Dit deed me inzien dat deze onzekerheid ook soms voor de klas opduikt. Ik moet beseffen dat het leren van meer ervaren experts een sterkte is, en geen zwakte."
    },
    {
      titel: "2. Administratieve discipline en uitstelgedrag",
      dlr: "De leraar als organisator",
      situatie: "Bij het tijdig indienen van lesvoorbereidingen, stageplanningen en het verbeteren van documenten.",
      feedback: "Mijn stagebegeleider wees me er streng op dat mijn planning en voorbereidingen soms onvolledig of niet tijdig in orde waren.",
      actie: "Ik ben met een strakkere, digitale agenda en reminders beginnen werken om mijn papierwinkel op orde te houden.",
      toekomst: "Ik moet vaste administratieve blokken inplannen in mijn week om dit hardnekkige uitstelgedrag structureel te doorbreken.",
      ictLink: "Vanuit SGR kregen we de harde eis om tegen 1 september een uitgewerkt plan voor het ICT-beleid te hebben. De introductie van Notion hielp mij om de werkgroep op schema te houden. Dit bewees voor mij zwart op wit dat ik, net als voor de school, ook voor mijn eigen administratie strakke deadlines en systemen móét gebruiken om niet achterop te raken."
    },
    {
      titel: "3. Visuele concretisering bij instructies",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      situatie: "Bij het aanbrengen van complexe theorie (bv. domeinen vs. finaliteiten) of langdurige programmeeropdrachten.",
      feedback: "Ik kreeg te horen dat ik mondeling vaak te snel ga over de theorie en dat leerlingen halverwege de draad kwijtraken zonder papieren houvast.",
      actie: "Ik integreer steeds meer stappenplannen aan het bord, maar het aanbieden van fysieke rubrics ontbreekt nog te vaak.",
      toekomst: "Ik maak er een vuistregel van om bij elke grote opdracht standaard papieren checklists en visuele schema's te voorzien.",
      ictLink: "Voor veel collega's zijn nieuwe ICT-regels net zo abstract en overweldigend als budgetbesprekingen voor mij waren. Het ICT-plan moet visueel en behapbaar zijn. Dit inzicht pas ik toe op de klas: als de leerstof (of het beleid) complex is, moet de visuele ondersteuning en het stappenplan de houvast bieden."
    },
    {
      titel: "4. Helikopterview bewaren en circulair werken",
      dlr: "De leraar als opvoeder / Begeleider",
      situatie: "Tijdens werkvormen waarbij leerlingen in groepjes of duo's werken (zoals de projecten in SDG+).",
      feedback: "Een observator merkte op dat ik de neiging heb om te lang bij één groepje te blijven stilstaan, waardoor ik het algemene overzicht en de rust achterin de klas soms kwijtraak.",
      actie: "Ik probeer me nu fysiek meer te verplaatsen, gebruik een pointer en dwing mezelf om sneller door te schuiven.",
      toekomst: "Ik wil mezelf trainen om continu de hele ruimte te scannen, zelfs als ik in een één-op-één gesprek zit met een leerling.",
      ictLink: "BA Pitzemburg is één van de acht campussen binnen het Atheneum, en leerlingen wisselen vlot tussen campussen. Om een ICT-beleid te schrijven, moet je een enorme overkoepelende helikopterview hebben over de hele structuur. Die brede scan-blik mis ik soms nog op microniveau in mijn eigen lokaal, waar ik me te snel verlies in details."
    },
    {
      titel: "5. Differentiëren vanaf minuut één",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      situatie: "Bij informaticalessen waar de voorkennis en de snelheid van begrip enorm uiteenlopen.",
      feedback: "Mijn differentiatie komt vaak pas op het einde van de les als 'extra opdracht', waardoor snelle werkers te lang wachten en tragere werkers onder druk komen.",
      actie: "Ik dwing mezelf nu om bij de start van de les direct een basis- en verdiepingsoptie helder uit te leggen.",
      toekomst: "Ik wil de principes van Universal Design for Learning (UDL) structureel integreren, zodat elke les standaard op verschillende niveaus vertrekt.",
      ictLink: "Een ICT-beleid uitschrijven voor een volledige school leerde me dat er gigantische verschillen zijn in de digitale vaardigheden van collega's. Wat we van hen verwachten, moet gedifferentieerd worden aangeboden. Dit geldt exact hetzelfde voor mijn leerlingen: een 'one size fits all' instructie werkt niet, de differentiatie moet vanaf de opstart ingebakken zitten."
    }
  ];

  return (
    <div className="groeiverslag-html-container">

      <header className="groeiverslag-header">
        <h1>Groeileerkracht - Profileringsstage</h1>
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