// Aseta 2018 määräykset
document.querySelector("#o102_maaraykset").value = 2;
// Valitse Niba F470
document.querySelector("select[name=t7id111]").value = 21;
o102_pilpkone(document.querySelector("form#form102"));

// Täytetään kenttiä
täytäKenttäPerusTiedot("Sijainti", "Espoo");
täytäKenttäPerusTiedot("Rakennusluokka", "1 Pientalo (tai paritalo)");
täytäKenttäPerusTiedot("Runkomateriaali", "massiivipuu/hirsirakenne");
täytäKenttäPerusTiedot("Kerroslukumäärä", "2");
täytäKenttäPerusTiedot("Rakennustilavuus", "346.3");
täytäKenttäPerusTiedot("ilmatilavuus", "269.03");
täytäKenttäPerusTiedot("Maanpäällinen kerrostasoala", "102.59");
täytäKenttäPerusTiedot("Lämmitetty nettoala", "85.32");
täytäKenttäPerusTiedot("Lämpökapasiteetti", "110");
täytäKenttäPerusTiedot("Ulkopuolisen puolilämpimän tilan lämpötila", "17.0");
täytäKenttäPerusTiedot(
  "Tarpeenmukainen ilmanvaihto",
  "Ei (käytetään vakioidun käytön arvoja)"
);
täytäKenttäPerusTiedot(
  "Erillinen valaistustehon laskenta",
  "Ei (käytetään vakioidun käytön arvoja)"
);
täytäKenttäPerusTiedot("Asuntojen/huoneistojen lukumäärä", "1");
täytäKenttäPerusTiedot("Lämmityksen varaajahäviöt", "820");
täytäKenttäPerusTiedot("Varaavien tulisijojen lukumäärä", "1");
täytäKenttäPerusTiedot("Maks. tuotto", "3000");
täytäKenttäPerusTiedot("Tuotto-osuus tilojen lämpöenergian tarpeesta", "0.838");
täytäKenttäPerusTiedot(
  "Tuotto-osuus käyttöveden lämpöenergian tarpeesta",
  "0.838"
);
täytäKenttäPerusTiedot("SPF-luku", "2.84");
täytäKenttäPerusTiedot("Jäteilman lämpötila", "-0.5");
täytäKenttäPerusTiedot("Poistoilmamäärän keskimääräinen suunnitteluarvo", "54");
täytäKenttäPerusTiedot("Jäteilman lämpötila mitoitustilanteessa", "-8");
täytäKenttäPerusTiedot("Ilmanvuotoluku q50", "3.29");
täytäKenttäPerusTiedot("Jälkilämmityspatteri", "Tilojen lämmitysjärjestelmä");

täytäKenttäRakenneOsat(
  "Ulkoseinä ulkoilmaa vasten",
  "20.68",
  "0.24",
  "#t3id1a"
);
täytäKenttäRakenneOsat("Ulkoseinä ulkoilmaa vasten", "0", "0.24", "#t3id2a");
täytäKenttäRakenneOsat(
  "Massiivipuuseinä ulkoilmaa vasten",
  "115.08",
  "0.44",
  "#t3id3a"
);
täytäKenttäRakenneOsat(
  "Yläpohja ulkoseinää vasten",
  "37.02",
  "0.08",
  "#t3id4a"
);
täytäKenttäRakenneOsat("Yläpohja ulkoseinää vasten", "11", "0.09", "#t3id5a");
täytäKenttäRakenneOsat("Yläpohja ulkoseinää vasten", "0", "0.09", "#t3id6a");
täytäKenttäRakenneOsat(
  "Alapohja ulkoilmaan rajoittuva",
  "0",
  "0.09",
  "#t3id7a"
);
täytäKenttäRakenneOsat(
  "Alapohja ryömintätilaan rajoittuva",
  "46.75",
  "0.17",
  "#t3id8a"
);
täytäKenttäRakenneOsat("Alapohja maanvastainen", "0", "0.16", "#t3id9a");
täytäKenttäRakenneOsat("Ikkunat etelään", "0", "0.16", "#t3id15a");
täytäKenttäRakenneOsat("Ikkunat etelään", "0", "0.16", "#t3id11a");
täytäKenttäRakenneOsat("Ikkunat etelään", "0", "0.16", "#t3id12a");
täytäKenttäRakenneOsat("Ikkunat etelään", "0", "0.16", "#t3id16a");
täytäKenttäRakenneOsat("Ikkunat koilliseen", "2.28", "0.7", "#t3id31a");
täytäKenttäRakenneOsat("Ikkunat kaakkoon", "0", "0.7", "#t3id32a");
täytäKenttäRakenneOsat("Ikkunat lounaseen", "13.76", "0.7", "#t3id33a");
täytäKenttäRakenneOsat("Ikkunat luoteseen", "1.26", "0.7", "#t3id34a");
täytäKenttäRakenneOsat("Ulko-ovi", "1.89", "0.75", "#t3id13a");

täytäKenttäKylmäSillat("US-US (ulkonurkka)", "24.26", "0.04", "#t4id1a");
täytäKenttäKylmäSillat("US-US (ulkonurkka)", "0", "0.04", "#t4id7a");
täytäKenttäKylmäSillat("US-YP", "34.2", "0.05", "#t4id2a");
täytäKenttäKylmäSillat("US-VP", "30", "0.0", "#t4id3a");
täytäKenttäKylmäSillat("US-AP", "38.7", "0.1", "#t4id4a");
täytäKenttäKylmäSillat("US-Ikkunat", "35.5", "0.04", "#t4id5a");
täytäKenttäKylmäSillat("US-Ovet", "20.3", "0.04", "#t4id6a");

// Päivitä koko paska
o102_laske1(document.querySelector("form#form102"));

function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element) {
    return RegExp(text).test(element.textContent);
  });
}
function täytäKenttäRakenneOsat(name, area, uvalue, id) {
  let areaField = document.querySelector(id);
  areaField.value = area;
  let uvalueField = (areaField.parentElement.nextElementSibling.childNodes[0].value = uvalue);
  uvalueField.value = uvalue;
}

function täytäKenttäKylmäSillat(name, m, wmk, id) {
  let lengthField = document.querySelector(id);
  lengthField.value = m;
  let wmkValueField = (lengthField.parentElement.nextElementSibling.childNodes[0].value = wmk);
  wmkValueField.value = wmk;
}

function täytäKenttäPerusTiedot(text, preferredValue) {
  const textToBeSearched = contains("td.parametri", text);
  if (textToBeSearched.length === 0) {
    let errorMessage =
      text.toUpperCase() +
      "-kohtaa ei löydy. Tarkista oikeinkirjoitus (huomaa isot kirjaimet)";
    console.log(errorMessage);
    return;
  }
  let selectBox =
    textToBeSearched[0].nextElementSibling.nextElementSibling.childNodes[0];
  if (selectBox.type === "text") {
    // Tekstikenttä kyseessä
    selectBox.value = preferredValue;
  } else {
    // Dropdown kyseessä
    let options = selectBox.options;

    let pickValue;
    for (let i = 0; i < options.length; i++) {
      if (options[i].innerText === preferredValue) {
        pickValue = options[i].value;
      }
    }
    if (typeof pickValue === "undefined") {
      let errorMessage =
        text.toUpperCase() +
        "-valikosta ei löydy vaihtoehtoa " +
        preferredValue.toUpperCase() +
        ". Tarkista oikeinkirjoitus";
      console.log(errorMessage);
    }
    selectBox.value = pickValue;
  }
}
