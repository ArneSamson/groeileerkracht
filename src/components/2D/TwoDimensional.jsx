import React from "react";
import TimelineNoInteraction from "./TimelineNoInteraction.jsx";

export default function TwoDimensional() {
const kwaliteiten = [
    {
      titel: "1. Digitaal efficiënt organiseren",
      dlr: "De leraar als organisator",
      praktijk: "In mijn projectmatige SDG+-lessen is organisatie de ruggengraat van een succesvolle les. Omdat leerlingen in gemengde groepen om de vier weken doorschuiven, moet de leeromgeving vanaf minuut één intuïtief en feilloos werken. Ik maak intensief gebruik van digitale hulpmiddelen om rust en structuur te creëren. Observatoren gaven aan dat mijn integratie van gecentraliseerde platformen en visuele timers (zoals Classroomscreen) ervoor zorgt dat de lestiming strak gerespecteerd wordt. Ik automatiseer randzaken en routinetaken, zodat ik in de klas mijn handen en hoofd vrij heb om proactief te begeleiden in plaats van reactief te regelen.",
      beleidLink: "Aan de overlegtafel met Jeroen (directeur) en Steven (ICT-verantwoordelijke) voor het nieuwe ICT-beleid bleek deze hang naar digitale efficiëntie een strategische meerwaarde. We stonden voor de complexe uitdaging om tegen 1 september een overkoepelend ICT-plan voor Scholengroep 5 (SGR 5) klaar te hebben. Ik introduceerde de workspace 'Notion' om notulen te digitaliseren, actiepunten te verdelen en abstracte deadlines visueel en behapbaar te maken.",
      groeiVisie: "Deze ervaring heeft mijn visie op leiderschap veranderd. Goed leiderschap draait niet uitsluitend om vakkennis, maar fundamenteel om het stroomlijnen van processen zodat anderen beter kunnen werken. Die strakke, projectmatige structuur en efficiëntiedrang trek ik nu blijvend door naar het management van mijn eigen leslokaal."
    },
    {
      titel: "2. Doelgerichte media-integratie en AI-bewustzijn",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      praktijk: "Ik zet technologie en media uiterst doelgericht in om leerstof te verankeren, maar ik ben me evengoed bewust van de valkuilen, zoals generatieve AI. In mijn informaticalessen leer ik leerlingen enerzijds hoe ze AI als tool kunnen gebruiken, maar waak ik er anderzijds streng over dat het hun eigen denkproces niet vervangt. Ik houd gericht toezicht op de laptops en heb het snel door wanneer leerlingen AI als sluipweg gebruiken, bijvoorbeeld wanneer ze plots programmeeropdrachten indienen met code of syntax die we in de les nog nooit gezien hebben.",
      beleidLink: "Tijdens het uitschrijven van het ICT-beleid nam ik de snelle, digitale optimalisaties uit handen van de directie. Hierdoor kregen Jeroen en Steven de mentale ruimte om zich te focussen op de strategische aanpak rond AI en evaluatiemethodes. Doordat ik razendsnel overweg kan met de nieuwste software, fungerde ik als de brug tussen de beleidsvisie op technologie en de praktische uitvoering ervan.",
      groeiVisie: "Technologie geeft me de vrijheid om te schakelen, maar vraagt ook om waakzaamheid. Media en AI zijn voor mij geen doelen op zich, maar hulpmiddelen. Ik blijf mezelf trainen in het herkennen van digitaal misbruik, zodat technologie het leerproces ondersteunt en niet ondermijnt."
    },
    {
      titel: "3. Een innovatieve, frisse blik op onderwijs",
      dlr: "Innovator/Onderzoeker & De gepassioneerde leraar (OLR)",
      praktijk: "Ik weiger theorie in een vacuüm te geven. Ik start lessen vanuit actuele situaties die direct aansluiten bij de jongeren. Collega's, maar vooral de leerlingen, waarderen mijn moderne, leefwereldgerichte aanpak. We experimenteren continu met manieren om onze didactiek te wapenen tegen de opmars van AI. Zo vervangen we standaard boekbesprekingen (die een chatbot in 2 seconden genereert) door opdrachten rond minder bekende boeken met zeer specifieke detailvragen. We forceren leerlingen op een positieve manier om de theorie écht tot zich te nemen.",
      beleidLink: "Een absoluut hoogtepunt van mijn profileringsstage was het pitchen van ons didactisch ICT-beleid aan een internationale delegatie van de OECD, de Europese Commissie en Kenniscentrum DigiSprong. Ik had al het werk van mezelf en een collega fysiek afgedrukt om de 'classroom reality' tastbaar te maken voor deze experten. Aan de hand van de 'pencil metaphor' illustreerde ik hoe technologie op BA Pitzemburg ook kwetsbaar is voor mensen die te snel op technologie vliegen en collega's die koppig bij het vetrouwde blijven. Ten slotte deelde ik onze plannen en aanpak rond AI-beleid en evaluatieaanpassingen.",
      groeiVisie: "De mogelijkheid om onze visie op zo'n hoog niveau te delen, en de positieve respons van de delegatie, versterkt mijn drive enorm. Ik zal vastgeroeste processen blijvend in vraag stellen en blijf experimenteren met nieuwe didactische invalshoeken om het onderwijs actueel en fraude-proof te houden."
    },
    {
      titel: "4. Coachend begeleiden",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      praktijk: "Bij intensieve, zelfstandige opdrachten, zoals het bouwen van HTML/CSS-projecten of de studiekeuzecarrousel, neem ik een sterk coachende rol aan. Wanneer een leerling vastloopt, vermijd ik de reflex om het probleem onmiddellijk voor hen op te lossen. Ik pas 'Socratisch doorvragen' toe: via gerichte wedervragen help ik hen hun eigen denkproces te ontleden, zodat ze zelfstandig tot het antwoord komen. Observatoren prezen deze aanpak omdat het een veilige, stimulerende leeromgeving creëert.",
      beleidLink: "Aan de overlegtafel bij Jeroen en Steven, die over decennia aan gecombineerde onderwijservaring beschikken, stelde ik me eveneens ondersteunend op. Ik leerde daar een essentiële managementles: beleid maken (of lesgeven) betekent niet dat je zélf alle antwoorden moet hebben, maar wel dat je de juiste kaders en vragen moet formuleren om samen vooruitgang te boeken.",
      groeiVisie: "Dit diepgewortelde principe is nu meer present in mijn klaspraktijk. Ik weiger het leerproces van de leerlingen 'over te nemen'. Mijn taak is het ontwerpen van krachtige kaders en het stellen van de juiste vragen, zodat zij de vaardigheden ontwikkelen om het uiteindelijk volledig zelf te kunnen."
    },
    {
      titel: "5. Professioneel taalbewustzijn",
      dlr: "Schriftelijke en mondelinge taal",
      praktijk: "Tijdens mijn traject heb ik bewust stappen gezet in mijn taalgebruik. Waar ik door mijn enthousiasme soms in informele spreektaal verviel, let ik er nu veel meer op om een verzorgde instructietaal te hanteren met duidelijke signaalwoorden. Ik merk dat die helderheid de leerlingen helpt. Daarnaast moedig ik leerlingen respectvol aan om ook onderling beleefd te communiceren, wat bijdraagt aan een veilig klasklimaat. Ik leer hier zelf nog elke dag in bij, maar ik zie intussen wel een duidelijke, positieve evolutie.",
      beleidLink: "Het meeschrijven aan het ICT-beleidsplan voor SGR 5 was op dit vlak een erg leerrijke uitdaging. Een beleidstekst vraagt om een heldere, formele formulering zonder ruis. Ook de pitch voor de internationale OECD-delegatie dwong me om ons verhaal zo professioneel en begrijpelijk mogelijk over te brengen. En dat moest dan ook nog eens in het Engels. Het deed me stilstaan bij de impact van een doordachte en afgestemde boodschap.",
      groeiVisie: "Die ervaringen buiten het klaslokaal hebben me geleerd dat heldere communicatie cruciaal is om mensen mee te krijgen. Ik neem dit mee om mijn instructies in de klas steeds beter af te stemmen, met het besef dat professioneel taalbewustzijn een continu leerproces is waar ik als leerkracht blijvend aan wil schaven."
    }
  ];

  const uitdagingen = [
    {
      titel: "1. Zelfvertrouwen als expert (het 'imposter syndrome')",
      dlr: "De leraar als inhoudelijk expert",
      praktijk: "Als leerkracht informaticawetenschappen word ik regelmatig geconfronteerd met bijzonder pittige, technische vragen. Omdat ik de lat voor mezelf extreem hoog leg, twijfel ik soms aan mijn autoriteit wanneer ik niet in een fractie van een seconde een pasklaar antwoord heb. Die interne druk leidde in het verleden soms tot onzekerheid voor de groep.",
      beleidLink: "Dit 'imposter syndrome' bereikte een hoogtepunt in de ICT-werkgroep. Terwijl Jeroen en Steven moeiteloos goochelden met budgetten en campusoverschrijdende protocollen, voelde ik me vaak klein. Toch overwon ik dit gevoel volledig tijdens het bezoek van de OECD en de Europese Commissie. Ik stond daar als startende leerkracht ons didactisch beleid te pitchen. Ik besefte toen dat mijn specifieke blik op de 'classroom reality' voor hen exact de expertise was die ze zochten.",
      groeiVisie: "Die presentatie was een kantelpunt. Het deed me beseffen dat expertise geen statisch einddoel is waarbij je alles weet, maar een continu groeiproces. Ik durf nu ook voor de klas met zelfvertrouwen te zeggen: 'Dat is een ijzersterke vraag, laten we die theorie samen uitspitten.' Leren van anderen is een bewijs van kracht."
    },
    {
      titel: "2. Administratieve discipline",
      dlr: "De leraar als organisator",
      praktijk: "Mijn absolute focus ligt bij de dynamiek in de klas, waardoor de administratieve 'papierwinkel' wel eens in het gedrang komt. Mijn stagebegeleider merkte kritisch op dat mijn stageplanningen en lesvoorbereidingen soms te laat of onvolledig werden ingediend. Het tijdig verbeteren van taken schuif ik nog te vaak voor me uit ten voordele van het lesontwerp zelf.",
      beleidLink: "De realiteit van de profileringsstage was een harde wake-up call. Vanuit SGR 5 kregen we de onbuigzame eis dat het raamwerk voor het ICT-beleid op 1 september geïmplementeerd moet zijn. Bij de directie zag ik dat uitstelgedrag ontwrichtend werkt. Als een protocol te laat is, loopt de werking van een hele school vast. Ik moest 'Notion', maar ook simpele afspraken, inzetten om niet alleen de werkgroep, maar vooral mezelf, in een strak keurslijf te dwingen.",
      groeiVisie: "Ik kan niet van een directie verwachten dat ze een school strak runnen, als ik mijn eigen administratie niet beheer. Ik blokkeer nu vaste uren in mijn weekplanning en gebruik digitale systemen om dit hardnekkige uitstelgedrag structureel te elimineren."
    },
    {
      titel: "3. Visuele concretisering bij instructies",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      praktijk: "Wanneer ik instructies geef voor complexe opdrachten, zoals de syntax van JavaScript of ontwerpprincipes in Canva, ga ik er nog te snel van uit dat mijn mondelinge uitleg onmiddellijk begrepen wordt. Hierdoor haken leerlingen soms halverwege af omdat ze de draad kwijt zijn en geen fysieke of visuele houvast hebben om op terug te vallen.",
      beleidLink: "Dit werkpunt werd me pijnlijk duidelijk tijdens het uitschrijven van het ICT-beleid. Steven drukte me op het hart dat een beleidsdocument voor leerkrachten extreem visueel, stapsgewijs en behapbaar moet zijn. Nieuwe multifactor-authenticatie is voor veel volwassenen immers net zo overweldigend als het schrijven van een eerste script voor mijn leerlingen.",
      groeiVisie: "Als een vluchtige mondelinge uitleg op een personeelsvergadering niet volstaat voor ervaren collega's, is het een illusie te denken dat dit wel werkt voor jongeren. Het is nu mijn absolute vuistregel om complexe theorie altijd te onderbouwen met fysieke stappenplannen of heldere rubrics."
    },
    {
      titel: "4. Helikopterview en circulair werken",
      dlr: "De leraar als opvoeder & Organisator",
      praktijk: "Tijdens zeer actieve werkvormen, zoals de projecten binnen SDG+, heb ik de neiging om me volledig vast te bijten in de begeleiding van één specifiek groepje. Door dat enthousiasme blijf ik te lang stilstaan, waardoor ik het overkoepelende overzicht verlies. Het risico is dat ik daardoor vragen van andere leerlingen mis of storend gedrag in de periferie te laat opmerk.",
      beleidLink: "BA Pitzemburg is slechts één radertje van de acht campussen binnen het Busleyden Atheneum. Jeroen toonde me hoe cruciaal een strategische 'helikopterview' is. Elke lokale beslissing resoneert over de andere campussen heen. Je mag je als directie nooit verliezen in één lokaal detail, maar moet continu de macro-structuur bewaken.",
      groeiVisie: "Die macro-blik van de directie is exact wat ik op microniveau in mijn eigen lokaal moet trainen. Ik verplicht mezelf nu om een actieve, circulaire looproute aan te nemen, fysiek afstand te nemen en letterlijk uit te zoomen om het klasklimaat in zijn totaliteit te bewaken."
    },
    {
      titel: "5. Differentiëren vanaf de opstart",
      dlr: "Begeleider van leer- en ontwikkelingsprocessen",
      praktijk: "De instroom in mijn lessen informatica is bijzonder heterogeen. De verschillen in tempo en voorkennis zijn enorm. Mijn differentiatie-aanpak was lange tijd te reactief: ik voorzag pas een verdiepingsopdracht aan het einde van de les. Dit resulteerde in demotivatie bij snelle werkers die moesten wachten, en stress bij leerlingen die meer verwerkingstijd nodig hadden.",
      beleidLink: "Bij de analysefase van het ICT-beleid werd ik geconfronteerd met de gigantische spreiding in digitale geletterdheid onder het docentencorps zelf. Een beleid dat verwachtingen stelt, moet op maat en gedifferentieerd worden aangeboden, anders verlies je het draagvlak. Een 'one size fits all' benadering voor ICT-opleidingen werkte simpelweg niet voor het personeel.",
      groeiVisie: "Dat inzicht heeft mijn lesontwerp fundamenteel gewijzigd. Ik weiger nog reactief te differentiëren. Ik dwing mezelf om vanaf de allereerste minuut van de instructie een basis- én verdiepingsoptie glashelder aan te bieden (conform de UDL-principes), zodat elke leerling onmiddellijk op eigen niveau wordt uitgedaagd."
    }
  ];

  return (
    <>
      <div className="groeiverslag-html-container">
        
        {/* NIEUWE INTRODUCTIE SECTIE */}
        <section className="intro-section" style={{ gridColumn: "1 / -1", marginBottom: "40px", textAlign: "center", padding: "40px 20px", background: "rgba(0,0,0,0.02)", borderRadius: "30px" }}>
          <h1 style={{ fontSize: "var(--heading2-size)", color: "var(--primary-500)", marginBottom: "15px" }}>Mijn Groeileerkracht</h1>
          <h2 style={{ fontSize: "var(--heading4-size)", fontWeight: "300", color: "var(--neutral-700)", marginBottom: "30px" }}>Profileringsstage: Inzichten uit praktijk en ICT-beleid</h2>
          
          <div style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px", lineHeight: "1.8", color: "var(--neutral-800)" }}>
            <p style={{ marginBottom: "20px" }}>
              Welkom bij mijn reflectieverslag. Als leerkracht op <strong>BA Pitzemburg</strong> sta ik dagelijks voor de uitdaging om theorie en praktijk naadloos te verbinden. Tijdens mijn profileringsstage kreeg ik de unieke kans om mee te werken aan het ICT-beleid van de school, in nauwe samenwerking met directie en IT-verantwoordelijken.
            </p>
            <p>
              In dit verslag neem ik je mee door mijn <strong>5 belangrijkste kwaliteiten</strong> en de <strong>5 uitdagingen</strong> waar ik bewust aan werk. Elk van deze punten verbindt mijn ervaringen op de klasvloer direct met de bredere managementlessen die ik leerde achter de schermen van het beleid. Verderop vind je ook mijn chronologische logboek terug.
            </p>
          </div>
        </section>

        {/* KWALITEITEN (Blijven in hun kolom via CSS) */}
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
                  <p><strong>In de klas:</strong> {item.praktijk}</p>
                  <p><strong>De link met het beleid:</strong> {item.beleidLink}</p>
                  <div className="ict-link">
                    <p><strong>Mijn visie & actie:</strong> {item.groeiVisie}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UITDAGINGEN (Blijven in hun kolom via CSS) */}
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
                  <p><strong>In de klas:</strong> {item.praktijk}</p>
                  <p><strong>De link met het beleid:</strong> {item.beleidLink}</p>
                  <div className="ict-link highlight">
                    <p><strong>Mijn visie & actie:</strong> {item.groeiVisie}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIJDLIJN (Zal onderaan breed over de 2 kolommen verschijnen via CSS) */}
        <TimelineNoInteraction  />
        
      </div>
    </>
  );
}