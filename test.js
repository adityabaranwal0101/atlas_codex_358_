// Function to display details of a celestial body
function displayCelestialBodyDetails(body) {
    console.log(`ID: ${body.id}`);
    console.log(`Name: ${body.name}`);
    console.log(`English Name: ${body.englishName}`);
    console.log(`Is Planet: ${body.isPlanet ? 'Yes' : 'No'}`);
  
    if (body.moons && body.moons.length > 0) {
      console.log('Moons:');
      body.moons.forEach((moon) => {
        console.log(`  - ${moon.moon} (${moon.rel})`);
      });
    }
  
    console.log(`Semimajor Axis: ${body.semimajorAxis}`);
    console.log(`Perihelion: ${body.perihelion}`);
    console.log(`Aphelion: ${body.aphelion}`);
    console.log(`Eccentricity: ${body.eccentricity}`);
    console.log(`Inclination: ${body.inclination}`);
  
    if (body.mass) {
      console.log('Mass:');
      console.log(`  - Mass Value: ${body.mass.massValue !== undefined ? body.mass.massValue : 'N/A'} x 10^${body.mass.massExponent !== undefined ? body.mass.massExponent : 'N/A'}`);
    }
  
    if (body.vol) {
      console.log('Volume:');
      console.log(`  - Volume Value: ${body.vol.volValue !== undefined ? body.vol.volValue : 'N/A'} x 10^${body.vol.volExponent !== undefined ? body.vol.volExponent : 'N/A'}`);
    }
  
    console.log(`Density: ${body.density}`);
    console.log(`Gravity: ${body.gravity}`);
    console.log(`Escape Velocity: ${body.escape}`);
    console.log(`Mean Radius: ${body.meanRadius}`);
    console.log(`Equatorial Radius: ${body.equaRadius}`);
    console.log(`Polar Radius: ${body.polarRadius}`);
    console.log(`Flattening: ${body.flattening}`);
    console.log(`Dimension: ${body.dimension}`);
    console.log(`Sidereal Orbit: ${body.sideralOrbit}`);
    console.log(`Sidereal Rotation: ${body.sideralRotation}`);
  
    if (body.aroundPlanet) {
      console.log('Around Planet:');
      console.log(`  - Planet: ${body.aroundPlanet.planet} (${body.aroundPlanet.rel})`);
    }
  
    console.log(`Discovered By: ${body.discoveredBy}`);
    console.log(`Discovery Date: ${body.discoveryDate}`);
    console.log(`Alternative Name: ${body.alternativeName}`);
    console.log(`Axial Tilt: ${body.axialTilt}`);
    console.log(`Average Temperature: ${body.avgTemp}`);
    console.log(`Main Anomaly: ${body.mainAnomaly}`);
    console.log(`Argument of Periapsis: ${body.argPeriapsis}`);
    console.log(`Longitude of Ascending Node: ${body.longAscNode}`);
    console.log(`Body Type: ${body.bodyType}`);
    console.log(`Relative: ${body.rel}`);
  }
  
  // Example usage with the first body in the provided data
  const celestialBody = {
    "id": "string",
    "name": "Earth",
    "englishName": "string",
    "isPlanet": true,
    "moons": [
      {
        "moon": "Moon",
        "rel": "string"
      }
    ],
    // ... (other properties)
  };
  
  // Display details of the celestial body
  displayCelestialBodyDetails(celestialBody);
  