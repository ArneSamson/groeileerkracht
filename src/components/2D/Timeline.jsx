import React, { useState } from "react";
import useScene from "../../store/useScene";

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("chronologie"); // 'chronologie' of 'bewijsstukken'

  const timelineData = [
    {
      fase: "Fase 1: Verkenning & Analyse",
      datum: "16 september 2025 — 17 september 2025",
      titel: "Opstart ICT-werkgroep en eerste analyses",
      beschrijving: "De profileringsstage startte met de voorbereiding en uitvoering van de allereerste ICT-vergadering met directeur Jeroen en ICT-verantwoordelijke Steven. Ik begon met het onderzoeken van de bestaande ICT-visietekst, het maken van een SWOT-analyse en het doornemen van eerdere teambevragingen. Tijdens de vergadering zelf legden we de basis: wat is een ICT-beleid, waarom moeten we het opstellen, en hoe beginnen we eraan?",
      bewijzen: [
        { titel: "SWOT-analyse", type: "image", url: "/images/static/swotAnalyse.png" },
        { titel: "Notulen eerste ICT-vergadering", type: "image", url: "/images/static/notulenVergadering1.png" },
        { titel: "Presentatie eerste ICT-vergadering", type: "link", url: "https://www.canva.com/design/DAGtbqhkjeI/U-vrBQUmog6bHRfJYG0TQQ/view?utm_content=DAGtbqhkjeI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h77e7098e47#1" }
      ]
    },
    {
      fase: "Fase 2: Vakwerkgroep & Didactiek",
      datum: "17 oktober 2025",
      titel: "Campusoverkoepelend ICT-overleg",
      beschrijving: "Een volledige dag vergaderen met de vakwerkgroep ICT van Buseleyden Atheneum. In de voormiddag onderzochten we digitale platformen zoals Cisco voor professionalisering, maar ook wat de opties kunnen zijn voor leerlingen. In de namiddag lag de focus op de lespraktijk: welke leerstof moeten leerlingen gezien hebben en hoe pakken collega's op andere campussen dit aan? We bespraken ook de integratie van Smartschool (voor projectevaluaties) en de mogelijkheid om eigen platformen te coderen afhankelijk van didactische noden. Dit alles was zeer interessant om mee te nemen naar het beleidsplan, omdat het een duidelijk beeld gaf van de huidige praktijk en de wensen van collega's. Het was ook een mooie kans om te netwerken en ideeën uit te wisselen met andere ICT-verantwoordelijken binnen de overkoepelende school.",
      bewijzen: [
        { titel: "Vakwerkgroep ICT BA", type: "image", url: "/images/static/vakwerkgroep.png" }
      ]
    },
    {
      fase: "Fase 3: Praktijk, Veiligheid & Lijn Uitzetten",
      datum: "6 november 2025 — 10 december 2025",
      titel: "Veiligheid, GRIPA en enquêtes",
      beschrijving: "Tijdens vergaderingen op het bureau van de directeur bespraken we de aanmaak van een enquête voor het schoolteam en een visualisatie (pencil metaphor) voor leerkrachten. We verdiepten ons in de 'GRIPA-fiches' en de verdeling van de beleidsrollen. We bespraken ook de aanmaak van een 'Wiki-vak' op Smartschool. Daarnaast dook ik in de digitale veiligheid door de beruchte 'Bookwidgets hack' te onderzoeken: hoe garanderen we de integriteit van evaluaties en wat nemen we hierover op in ons beleid?",
      bewijzen: [
        { titel: "Voorbeeld van een GRIPA-fiche", type: "pdf", url: "https://gripatest.dlearning.nl/gripa/uploads/Basis%201/O6.%20Infofiche-%20Maak%20een%20inventaris%20van%20alle%20applicaties.pdf" },
        { titel: "Link naar GRIPA platform", type: "link", url: "https://gripa.be/" },
        { titel: "Notities onderzoek Bookwidgets hack", type: "image", url: "/images/static/bookwidgetsHack.png" }
      ]
    },
    {
      fase: "Fase 4: Management & Structuur",
      datum: "6 januari 2026 — 4 maart 2026",
      titel: "Implementatie van Notion en prioriteiten",
      beschrijving: "Tijdens de tweede grote ICT-vergadering (januari) lijsten we de verplichtingen per onderwerp op (cybersecurity, digitale inclusie, infrastructuur). Om de deadline van Scholengroep 5 (SGR 5) te halen, stelde ik direct na de vergadering de workspace 'Notion' op. Hierin digitaliseerden we alle taken en deadlines visueel. Tijdens de derde vergadering (maart) rondden we dit af door concrete kaders te ontwikkelen rond AI, mediawijsheid en inclusie.",
      bewijzen: [
        { titel: "Notulen tweede ICT-vergadering", type: "image", url: "/images/static/notulenVergadering2.png" },
        { titel: "Screenshots van de Notion-workspace", type: "image", url: "/images/static/notion.png" },
        { titel: "Presentatie tweede ICT-vergadering", type: "link", url: "https://www.canva.com/design/DAG6XZtv3wY/Dqm0YvC1DWIE_AMNV6ofSQ/view?utm_content=DAG6XZtv3wY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2120b568c1" },
        { titel: "Presentatie derde ICT-vergadering", type: "link", url: "https://www.canva.com/design/DAHBA-Fd6ZI/71_t44IlekNEw0otU6Ka2w/view?utm_content=DAHBA-Fd6ZI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0bf5451da9" }
      ]
    },
    {
      fase: "Fase 5: Internationale Kennisdeling",
      datum: "6 mei 2026 — 7 mei 2026",
      titel: "De OECD Pitch en ontvangst internationale delegatie",
      beschrijving: "Een absoluut hoogtepunt. Na de voorbereiding, waarbij ik uitgewerkt didactisch materiaal verzamelde en vertaalde, ontvingen we een delegatie van de OECD, de Europese Commissie en collega's uit Bulgarije/Slowakije. Ik pitchte ons didactisch ICT-beleid, het gebruik van AI in de klas en voerde inspirerende gesprekken over hoe digitalisering in het buitenland wordt aangepakt.",
      bewijzen: [
        { titel: "LinkedIn-post van Kenniscentrum DigiSprong", type: "link", url: "https://www.linkedin.com/feed/update/urn:li:activity:7458234896172343297/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEK7YqcB-jCGIOnE2vNM2P-ijvdKaWqPm3U" },
        { titel: "Foto presentatie delegatie", type: "image", url: "/images/static/linkedin.jpg" }
      ]
    },
    {
      fase: "Fase 6: Consolidatie & Beleidsvorming",
      datum: "8 mei 2026 — 30 mei 2026",
      titel: "Het formele beleidsplan en literatuurstudie uitschrijven",
      beschrijving: "Na de pitch brak de intensieve schrijffase aan. Geïnspireerd door het plan van GO! Atheneum Heist vormde ik ons eigen ICT-beleidsplan en voorzag ik het professionaliseringsplan van gerichte feedback. De laatste dagen van mei investeerde ik hevig in een diepgaande literatuurstudie om ons plan wetenschappelijk en wettelijk te onderbouwen. Ik analyseerde onder andere de omzendbrief online leren, de Europese SELFIE-scan, het ICILS-onderzoek naar digitale competenties van 2e jaars en de bevraging over blended learning. Tot slot verwerkte ik dit alles tot heldere, bruikbare beleidsteksten.",
      bewijzen: [
        { titel: "Notities tijdens de literatuurstudie (SELFIE, ICILS, Omzendbrieven)", type: "image", url: "/images/static/onderzoek.jpg" },
        { titel: "Conceptversie ICT-beleidsplan (Screenshot)", type: "image", url: "/images/static/conceptPlan.png" },
        { titel: "Feedback op ICT-Professionaliseringsplan", type: "image", url: "/images/static/feedbackProfPlan.png" }
      ]
    }
  ];

  // Hardcoded lijst van de 12 officiële bewijsstukken voor de lijstweergave
  const officieleBewijzen = [
    { id: 1, titel: "Bewijsstuk 1: SWOT-analyse", type: "image", url: "/images/static/swotAnalyse.png" },
    { id: 2, titel: "Bewijsstuk 2: Notulen eerste ICT-vergadering", type: "pdf", url: "/PDF/Notities vergadering 1. 17-09-2025.pdf" },
    { id: 3, titel: "Bewijsstuk 3: Presentatie eerste ICT-vergadering", type: "link", url: "https://www.canva.com/design/DAGtbqhkjeI/U-vrBQUmog6bHRfJYG0TQQ/view?utm_content=DAGtbqhkjeI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h77e7098e47#1" },
    { id: 4, titel: "Bewijsstuk 4: Groepsindeling vakwerkgroep ICT BA", type: "image", url: "/images/static/vakwerkgroep.png" },
    { id: 5, titel: "Bewijsstuk 5: Notities onderzoek Bookwidgets hack", type: "pdf", url: "/PDF/logboek Bookwidgets-hack.pdf" },
    { id: 6, titel: "Bewijsstuk 6: Voorbeeld GRIPA-fiche", type: "pdf", url: "https://gripatest.dlearning.nl/gripa/uploads/Basis%201/O6.%20Infofiche-%20Maak%20een%20inventaris%20van%20alle%20applicaties.pdf" },
    { id: 7, titel: "Bewijsstuk 7: Notulen tweede ICT-vergadering", type: "pdf", url: "/PDF/Notities vergadering 2. 07-01-2026.pdf" },
    { id: 8, titel: "Bewijsstuk 8: Presentatie tweede ICT-vergadering", type: "link", url: "https://www.canva.com/design/DAG6XZtv3wY/Dqm0YvC1DWIE_AMNV6ofSQ/view?utm_content=DAG6XZtv3wY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2120b568c1"},
    { id: 9, titel: "Bewijsstuk 9: Screenshots Notion-workspace", type: "image", url: "/images/static/notion.png" },
    { id: 10, titel: "Bewijsstuk 10: Notulen derde ICT-vergadering", type: "pdf", url: "/PDF/Notities vergadering 3. 04-03-2026.pdf" },
    { id: 11, titel: "Bewijsstuk 11: Presentatie derde ICT-vergadering", type: "link", url: "https://www.canva.com/design/DAHBA-Fd6ZI/71_t44IlekNEw0otU6Ka2w/view?utm_content=DAHBA-Fd6ZI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0bf5451da9" },
    { id: 12, titel: "Bewijsstuk 12: LinkedIn-post (foto in post)", type: "link", url: "https://www.linkedin.com/feed/update/urn:li:activity:7458234896172343297/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEK7YqcB-jCGIOnE2vNM2P-ijvdKaWqPm3U" },
    { id: 13, titel: "Bewijsstuk 13: Conceptversie ICT-beleidsplan", type: "image", url: "/images/static/conceptPlan.png" },
    { id: 14, titel: "Bewijsstuk 14: Feedback op ICT-Professionaliseringsplan", type: "image", url: "/images/static/feedbackProfPlan.png" },
    { id: 15, titel: "Bewijsstuk 15: Notities tijdens literatuurstudie", type: "image", url: "/images/static/onderzoek.jpg" },
    { id: 16, titel: "Bewijsstuk 16: Digitalisering van notities tijdens literatuurstudie", type: "pdf", url: "/PDF/Map digitalisering.pdf" }
  ];

  const isTimelineOpen = useScene((state) => state.isTimelineOpen);
  const setIsTimelineOpen = useScene((state) => state.setIsTimelineOpen);

  if (!isTimelineOpen) return null;

return (
    // De buitenste div is de donkere "backdrop" (zoals bij de kwaliteiten overlay)
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999, background: "rgba(0, 0, 0, 0.4)", display: "flex", justifyContent: "center", alignItems: "center", backdropFilter: "blur(4px)" }}>
      
      {/* Dit is de daadwerkelijke "kaart" van de tijdlijn */}
      <div className="groeiverslag-html-container" style={{ 
          position: "relative", 
          width: "90%", 
          maxWidth: "1200px", /* Dit zorgt ervoor dat hij niet het hele scherm vult op grote schermen */
          height: "85vh", 
          background: "rgba(253, 253, 252, 0.95)", 
          overflowY: "auto",
          borderRadius: "30px", /* Mooie afgeronde hoeken zoals de rest van je UI */
          padding: "40px",
          boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
          display: "block" /* Forceer block display zodat de CSS grid hierbinnen NIET toegepast wordt en breekt */
      }}
      onPointerDown={(e) => e.stopPropagation()} /* Zorgt ervoor dat klikken binnen de kaart niet de backdrop klikt */
      onPointerUp={(e) => e.stopPropagation()} /* Zorgt ervoor dat klikken binnen de kaart niet de backdrop klikt */
      onClick={(e) => e.stopPropagation()} /* Zorgt ervoor dat klikken binnen de kaart niet de backdrop klikt */
      onWheel={(e) => e.stopPropagation()} /* Zorgt ervoor dat scrollen binnen de kaart niet de backdrop scrollt */
      >
        
        <header className="groeiverslag-header" style={{ position: "relative", marginBottom: "20px", textAlign: "center" }}>
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
                  zIndex: 10,
                  transition: "all 0.3s ease"
              }}
              onMouseOver={(e) => { e.target.style.backgroundColor = "var(--primary-500, #ff5c00)"; e.target.style.color = "white"; }}
              onMouseOut={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "var(--primary-500, #ff5c00)"; }}
          >
              Sluiten
          </button>

          <h1>Tijdlijn & Logboek</h1>
          <p className="groeiverslag-sub">
            Chronologisch overzicht van mijn profileringsstage (Totaal geregistreerd: 51u40min)
          </p>
          
          {/* TAB NAVIGATION */}
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" }}>
            <button
              onClick={() => setActiveTab("chronologie")}
              style={{
                padding: "10px 25px",
                borderRadius: "30px",
                fontSize: "15px",
                fontWeight: "bold",
                border: "1px solid var(--neutral-1000, #000)",
                backgroundColor: activeTab === "chronologie" ? "var(--neutral-1000, #000)" : "transparent",
                color: activeTab === "chronologie" ? "white" : "var(--neutral-1000, #000)",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              🗓️ Chronologische Tijdlijn
            </button>
            <button
              onClick={() => setActiveTab("bewijsstukken")}
              style={{
                padding: "10px 25px",
                borderRadius: "30px",
                fontSize: "15px",
                fontWeight: "bold",
                border: "1px solid var(--neutral-1000, #000)",
                backgroundColor: activeTab === "bewijsstukken" ? "var(--neutral-1000, #000)" : "transparent",
                color: activeTab === "bewijsstukken" ? "white" : "var(--neutral-1000, #000)",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              📂 Officiële Bewijsstukken
            </button>
          </div>
        </header>

        {/* CHRONOLOGISCHE WEERGAVE */}
        {activeTab === "chronologie" && (
          <section className="timeline-section" style={{ marginTop: "40px" }}>
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
                        <ul className="bewijsstukken-list" style={{ display: "flex", flexDirection: "column", gap: "15px", listStyle: "none", paddingLeft: 0 }}>
                          {item.bewijzen.map((bewijs, i) => (
                            <li key={i}>
                              {bewijs.type === "link" || bewijs.type === "pdf" ? (
                                <a href={bewijs.url} target="_blank" rel="noopener noreferrer" className="bewijs-link" style={{ display: "inline-block", padding: "10px 15px", background: "rgba(255, 92, 0, 0.1)", borderRadius: "8px", textDecoration: "none", color: "var(--primary-500, #ff5c00)", fontWeight: "bold" }}>
                                  {bewijs.type === "pdf" ? "📄" : "🔗"} {bewijs.titel}
                                </a>
                              ) : (
                                <div style={{ marginTop: "10px" }}>
                                  <span style={{ display: "block", fontSize: "14px", color: "var(--neutral-700)", marginBottom: "5px" }}>📸 {bewijs.titel}</span>
                                  <img src={bewijs.url} alt={bewijs.titel} style={{ maxWidth: "100%", borderRadius: "12px", border: "1px solid var(--neutral-500)" }} />
                                </div>
                              )}
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
        )}

        {/* ENKELE KOLOM BEWIJSSTUKKEN LIJST */}
        {activeTab === "bewijsstukken" && (
          <section className="evidence-overview-section" style={{ padding: "20px 0", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px", color: "var(--primary-500)" }}>Logboek Bewijsmateriaal</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {officieleBewijzen.map((bewijs) => (
                <div key={bewijs.id} className="competentie-card" style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0", background: "rgba(0,0,0,0.02)" }}>
                  <h4 style={{ margin: 0, fontSize: "16px", color: "var(--neutral-1000)" }}>{bewijs.titel}</h4>
                  <a 
                    href={bewijs.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bewijs-link" 
                    style={{ 
                      display: "inline-block", 
                      padding: "10px 15px", 
                      background: "rgba(255, 92, 0, 0.1)", 
                      borderRadius: "8px", 
                      textDecoration: "none", 
                      color: "var(--primary-500, #ff5c00)", 
                      fontWeight: "bold", 
                      minWidth: "140px", 
                      textAlign: "center",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {bewijs.type === "pdf" ? "📄 Bekijk PDF" : bewijs.type === "image" ? "📸 Bekijk Foto" : "🔗 Open Link"}
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}