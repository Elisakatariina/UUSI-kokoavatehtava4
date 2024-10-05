//Haetaan pakkauslistan JSON Githubista 
fetch('https://elisakatariina.github.io/JSON-KOKOAVATEHTAVA4/kokoavatehtava4.json')
// Muunnetaan vastaus JSON muotoon

// Muunnetaan vastaus JSON muotoon
.then(function (response) { 
    return response.json(); 
  })
  
  // Käsitellään muunnettu (eli JSON muotoinen) vastaus
  .then(function (responseJson) {
      // Kutsutaan funktiota ja välitetään sille json-vastaus
      kerro(responseJson);
    })
    
  // Jos tuli jokin virhe
  .catch(function (error) { 
    document.getElementById("kokoavatehtava4").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
  });

  // Funktio JSON-datan käsittelyyn
  function kerro(data){
    var teksti = ""; 
    // Otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti = teksti + "<li>" + data.passi + "</li>";
    teksti = teksti + "<li>" + data.asiakirjat + "</li>";
    teksti = teksti + "<li>" + data.rokotukset + "</li>";
    teksti = teksti + "<li>" + data.raha + "</li>";
    teksti = teksti + "<li>" + data.hygienia + "</li>";
    teksti = teksti + "<li>" + data.vaatteet + "</li>";
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";
      // Teksti-muuttujan sisällön tulostus
    document.getElementById("kokoavatehtava4").innerHTML = teksti;
  }
