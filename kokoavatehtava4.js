//Kartta sivun js koodi
// Initoidaan Leaflet-kartta ja asetetaan keskipisteeksi maailmanlaajuinen näkymä
var map = L.map('map').setView([20.0, 0.0], 2); // Maailman näkymä (koordinaatit 0,0 ja zoom 2)

      // Lisätään OpenStreetMap-laatta kartalle
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);

      // Merkataan kohteet kartalle
      var locations = [
        {
          coords: [-20.348404, 57.552152], // Mauritius
          name: "Mauritius",
          description: "Upea ja lämmin saarikohde"
        },

        {
          coords: [51.5074, -0.1278], // Lontoo
          name: "Lontoo",
          description: "Yksi maailman tunnetuimmista kaupungeista."
        },

        {
          coords: [37.1366, -8.5377], // Portimão, Portugali
          name: "Portimão",
          description: "Tunnettu satamakaupunki."
        }
      ];

      // Loopataan sijainnit ja lisätään pinnit kartalle
      locations.forEach(function(location) {
        var marker = L.marker(location.coords).addTo(map);
        marker.bindPopup("<b>" + location.name + "</b><br>" + location.description).openPopup();
      });


