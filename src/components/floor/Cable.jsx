import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function WavyCable({ 
    start = [0, 0, 0], 
    end = [10, 0, 0], 
    amplitude = 0.5,  // Hoe breed de golf uitslaat
    frequency = 3,    // Hoeveel golven er tussen start en eind zitten
    radius = 0.1,     // Dikte van de kabel
    color = "#51a4de" // Kleur
}) {
    
    // We gebruiken useMemo zodat deze zware wiskunde enkel wordt 
    // berekend wanneer de begin- of eindpunten écht veranderen.
    const curve = useMemo(() => {
        const vStart = new THREE.Vector3(...start);
        const vEnd = new THREE.Vector3(...end);
        
        const points = [];
        const resolution = 50; // Hoeveel puntjes we berekenen (bepaalt de gladheid)

        // 1. Bereken de richting en de totale lengte
        const direction = new THREE.Vector3().subVectors(vEnd, vStart);
        const length = direction.length();
        direction.normalize(); // Maak de vector exact 1 eenheid lang

        // 2. Zoek een 'loodrechte' richting om de kabel naar te buigen
        // We proberen de standaard 'Omhoog' (Y) as.
        let up = new THREE.Vector3(0, 1, 0);
        // Als onze kabel al recht naar boven gaat, gebruiken we de X-as als buigrichting
        if (Math.abs(direction.y) > 0.99) {
            up.set(1, 0, 0);
        }
        // Het kruisproduct geeft ons een vector die haaks op de kabel staat
        const perpendicular = new THREE.Vector3().crossVectors(direction, up).normalize();

        // 3. Loop over de lijn en voeg de sinusgolf toe
        for (let i = 0; i <= resolution; i++) {
            const t = i / resolution; // Een percentage van 0.0 tot 1.0
            
            // Vind de positie op de kaarsrechte lijn
            const basePos = new THREE.Vector3().copy(vStart).add(
                direction.clone().multiplyScalar(length * t)
            );

            // Bereken de uitslag van de golf
            // t * Math.PI * 2 * frequency zorgt voor het gewenste aantal volledige golven
            const waveOffset = Math.sin(t * Math.PI * 2 * frequency) * amplitude;
            
            // Duw het punt opzij langs onze loodrechte as
            basePos.add(perpendicular.clone().multiplyScalar(waveOffset));
            
            points.push(basePos);
        }

        // 4. Maak een vloeiende Three.js curve van al deze puntjes
        return new THREE.CatmullRomCurve3(points);

    }, [start, end, amplitude, frequency]); // Triggers voor useMemo

    return (
        <mesh castShadow receiveShadow>
            {/* 
              args: [curve, tubularSegments, radius, radialSegments, closed]
              - 64 (tubularSegments): Zorgt dat de bochten vloeiend zijn.
              - 8 (radialSegments): Zorgt dat de kabel zelf rond lijkt (meer is zwaarder voor GPU).
            */}
            <tubeGeometry args={[curve, 64, radius, 8, false]} />
            <meshToonMaterial color={color} />
        </mesh>
    );
}