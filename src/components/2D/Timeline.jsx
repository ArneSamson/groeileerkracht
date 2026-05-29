import React from "react";
import useScene from "../../store/useScene";

export default function Timeline() {
  const timelineData = [
    {
      fase: "Fase 1: Verkenning & Analyse",
      datum: "16 september 2025 — 10 december 2025",
      titel: "Opstart ICT-werkgroep en eerste praktijkonderzoeken",
      beschrijving: "De profileringsstage startte met de voorbereiding en uitvoering van de allereerste ICT-vergadering met directeur Jeroen en ICT-verantwoordelijke Steven. In deze eerste maanden brachten we de huidige status van het ICT-beleid in kaart. Naast het overkoepelende beleid dook ik ook direct in de praktijk: zo heb ik op 6 november een hack binnen Bookwidgets onderzocht om de digitale veiligheid en integriteit van onze evaluaties te waarborgen. Daarnaast vonden er tussentijdse vergaderingen plaats op het bureau van de directeur, onder andere over de GRIPA-fiches.",
      bewijzen: [
        "Notulen eerste ICT-vergadering (Screenshot)",
        "Notities onderzoek Bookwidgets hack",
        "Documentatie GRIPA-fiches"
      ]
    },
    {
      fase: "Fase 2: Management & Structuur",
      datum: "6 januari 2026 — 7 januari 2026",
      titel: "Implementatie van Notion en taakverdeling",
      beschrijving: "Tijdens de voorbereiding op de tweede grote ICT-vergadering werd duidelijk dat we een strakker systeem nodig hadden om de deadline van Scholengroep 5 (SGR 5) te halen. Op 7 januari heb ik, direct na de vergadering, de workspace 'Notion' opgesteld en geïmplementeerd voor de werkgroep. Hierin digitaliseerden we de notulen, stelden we harde deadlines op en verdeelden we de actiepunten visueel. Dit was een kantelpunt in de efficiëntie van onze samenwerking.",
      bewijzen: [
        "Notulen tweede ICT-vergadering (Screenshot)",
        "Screenshots van de opgestelde Notion-workspace en taakverdeling"
      ]
    },
    {
      fase: "Fase 3: Internationale Kennisdeling",
      datum: "3 maart 2026 — 7 mei 2026",
      titel: "De OECD Pitch en ontvangst internationale delegatie",
      beschrijving: "Na de derde ICT-vergadering in maart lag de focus op de voorbereiding van een hooggewaardeerd bezoek. Op 7 mei ontvingen we een internationale delegatie van de OECD, de Europese Commissie, en collega's uit Bulgarije en Slowakije. Ik pitchte hier onze didactische aanpak rond ICT-beleid, het gebruik van AI in de klas en de 'pencil metaphor'. Ik toonde concreet lesmateriaal en legde uit hoe we evaluaties (zoals boekbesprekingen en programmeeropdrachten) aanpassen om misbruik van generatieve AI te voorkomen.",
      bewijzen: [
        "LinkedIn-post van Kenniscentrum DigiSprong / internationale delegatie",
        "Verzameld lesmateriaal en presentatie delegatie",
        "Notulen derde ICT-vergadering"
      ]
    },
    {
      fase: "Fase 4: Consolidatie & Beleidsvorming",
      datum: "8 mei 2026 — 28 mei 2026",
      titel: "Het formele beleidsplan en literatuurstudie uitschrijven",
      beschrijving: "Na de succesvolle pitch brak de intensieve schrijffase aan. Geïnspireerd door het plan van GO! Atheneum Heist, werkte ik op 8 mei maar liefst 6 uur lang aan het vormgeven van ons eigen ICT-beleidsplan. Eind mei heb ik het ICT-professionaliseringsplan nagekeken en van gerichte feedback voorzien. Om dit beleid wetenschappelijk en wettelijk te onderbouwen, nam ik de tijd voor een diepgaande literatuurstudie: ik nam de omzendbrief online leren, Vlaams onderzoek rond digitalisering, de SELFIE-tool en de lerarenbevraging omtrent blended learning grondig door.",
      bewijzen: [
        "Conceptversie van het gevormde ICT-beleidsplan",
        "Aantekeningen / comments op het ICT-professionaliseringsplan",
        "Links naar gebruikte bronnen (Omzendbrief, SELFIE-tool, Vlaams onderzoek)"
      ]
    }
  ];

  // Haal de state én de setter uit de store
  const isTimelineOpen = useScene((state) => state.isTimelineOpen);
  const setIsTimelineOpen = useScene((state) => state.setIsTimelineOpen);

  if (!isTimelineOpen) return null;

  return (
    <div className="groeiverslag-html-container">
      {/* De header kreeg een relatieve positie zodat de knop absoluut geplaatst kan worden */}
      <header className="groeiverslag-header" style={{ position: "relative" }}>
        
        {/* SLUIT-KNOP */}
        <button 
            onClick={() => setIsTimelineOpen(false)}
            style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                padding: "8px 20px",
                backgroundColor: "transparent",
                color: "var(--primary-500, #ff5c00)",
                border: "2px solid var(--primary-500, #ff5c00)",
                borderRadius: "30px",
                fontSize: "14px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = "var(--primary-500, #ff5c00)"; e.target.style.color = "white"; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "var(--primary-500, #ff5c00)"; }}
        >
            Sluiten
        </button>

        <h1>Tijdlijn & Logboek</h1>
        <p className="groeiverslag-sub">
          Chronologisch overzicht van mijn profileringsstage (Totaal geregistreerd: xx uur)
        </p>
      </header>

      <section className="timeline-section">
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content competentie-card">
                <div className="card-header">
                  <div>
                    <span className="badge status-excelleren">{item.fase}</span>
                    <h3 style={{ marginTop: "10px" }}>{item.titel}</h3>
                  </div>
                  <div className="timeline-date">{item.datum}</div>
                </div>
                <div className="card-body">
                  <p>{item.beschrijving}</p>
                  
                  <div className="bewijsstukken-container">
                    <strong>Gekoppelde bewijsstukken:</strong>
                    <ul className="bewijsstukken-list">
                      {item.bewijzen.map((bewijs, i) => (
                        <li key={i}>
                          <a href="#" className="bewijs-link">
                            🔗 {bewijs}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}