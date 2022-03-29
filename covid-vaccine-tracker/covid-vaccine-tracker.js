const icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.src = "../assets/sun.svg";
  } else {
    icon.src = "../assets/dark-mode.png";
  }
};

document.getElementById("back").onclick = function () {
  location.href = "../home/home.html";
};
//popup
const total = document.createElement("h1");
const button = document.querySelector("#Symptoms-button");
const myCircule = document.getElementById("myCircule");
button.addEventListener("click", move);
function move() {
  window.location.href = "../symptoms/symptoms.html";
}
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (total.textContent) {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
      myCircule.style.setProperty(
        "stroke-dasharray",
        (156 - 156 * totalPerHundred).toString() +
          " " +
          (156 * totalPerHundred).toString()
      );
    } else {
      alert("please search for a country then try again");
    }
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

//list of countries and their codes.
let countries = {
  USA: "US",
  Spain: "ES",
  Italy: "IT",
  France: "FR",
  Germany: "DE",
  UK: "GB",
  Turkey: "TR",
  Iran: "IR",
  Russia: "RU",
  Belgium: "BE",
  Brazil: "BR",
  Canada: "CA",
  Netherlands: "NL",
  Switzerland: "CH",
  Portugal: "PT",
  India: "IN",
  Ireland: "IE",
  Austria: "AT",
  Peru: "PE",
  Sweden: "SE",
  Japan: "JP",
  Korea: "KR",
  Chile: "CL",
  Saudi_Arabia: "SA",
  Poland: "PL",
  Ecuador: "EC",
  Romania: "RO",
  Pakistan: "PK",
  Mexico: "MX",
  Denmark: "DK",
  Norway: "NO",
  UAE: "AE",
  Czechia: "CZ",
  Australia: "AU",
  Singapore: "SG",
  Indonesia: "ID",
  Serbia: "RS",
  Philippines: "PH",
  Ukraine: "UA",
  Qatar: "QA",
  Malaysia: "MY",
  Belarus: "BY",
  Dominican: "DO",
  Panama: "PA",
  Finland: "FI",
  Colombia: "CO",
  Luxembourg: "LU",
  SouthAfrica: "ZA",
  Egypt: "EG",
  Argentina: "AR",
  Morocco: "MA",
  Thailand: "TH",
  Algeria: "DZ",
  Moldova: "MD",
  Bangladesh: "BD",
  Greece: "GR",
  Hungary: "HU",
  Kuwait: "KW",
  Bahrain: "BH",
  Croatia: "HR",
  Iceland: "IS",
  Kazakhstan: "KZ",
  Uzbekistan: "UZ",
  Estonia: "EE",
  Iraq: "IQ",
  NewZealand: "NZ",
  Azerbaijan: "AZ",
  Slovenia: "SI",
  Lithuania: "LT",
  Armenia: "AM",
  Bosnia: "BA",
  Oman: "OM",
  NorthMacedonia: "MK",
  Slovakia: "SK",
  Cuba: "CU",
  HongKong: "HK",
  Cameroon: "CM",
  Afghanistan: "AF",
  Bulgaria: "BG",
  Tunisia: "TN",
  Ghana: "GH",
  Cyprus: "CY",
  Djibouti: "DJ",
  Latvia: "LV",
  Andorra: "AD",
  Lebanon: "LB",
  CostaRica: "CR",
  Niger: "NE",
  BurkinaFaso: "BF",
  Albania: "AL",
  Kyrgyzstan: "KG",
  Nigeria: "NG",
  Bolivia: "BO",
  Guinea: "GN",
  Uruguaye: "UY",
  Honduras: "HN",
  SanMarino: "SM",
  Palestine: "PS",
  Malta: "MT",
  Taiwan: "TW",
  Jordan: "JO",
  Réunion: "RE",
  Georgia: "GE",
  Senegal: "SN",
  Mauritius: "MU",
  DRC: "CD",
  Montenegro: "ME",
  Mayotte: "YT",
  Kenya: "KE",
  Vietnam: "VN",
  Guatemala: "GT",
  Venezuela: "VE",
  Mali: "ML",
  Paraguay: "PY",
  ElSalvador: "SV",
  Jamaica: "JM",
  Tanzania: "TZ",
  Martinique: "MQ",
  Guadeloupe: "GP",
  Rwanda: "RW",
  Congo: "CG",
  Brunei: "BN",
  Somalia: "SO",
  Gibraltar: "GI",
  Cambodia: "KH",
  Madagascar: "MG",
  Gabon: "GA",
  Myanmar: "MM",
  Ethiopia: "ET",
  Aruba: "AW",
  FrenchGuiana: "GF",
  Monaco: "MC",
  Bermuda: "BM",
  Togo: "TG",
  EquatorialGuinea: "GQ",
  Liberia: "LR",
  Barbados: "BB",
  Sudan: "SD",
  Guyana: "GY",
  Zambia: "ZM",
  CaboVerde: "CV",
  CaymanIslands: "KY",
  Bahamas: "BS",
  FrenchPolynesia: "PF",
  Uganda: "UG",
  Maldives: "MV",
  Libya: "LY",
  GuineaBissau: "GW",
  Macao: "MO",
  Haiti: "HT",
  Syria: "SY",
  Eritrea: "ER",
  Mozambique: "MZ",
  SaintMartin: "MF",
  Benin: "BJ",
  Chad: "TD",
  Mongolia: "MN",
  Nepal: "NP",
  SierraLeone: "SL",
  Zimbabwe: "ZW",
  Angola: "AO",
  Eswatini: "SZ",
  Botswana: "BW",
  Belize: "BZ",
  NewCaledonia: "NC",
  Malawi: "MW",
  Fiji: "FJ",
  Dominica: "DM",
  Namibia: "NA",
  SaintLucia: "LC",
  Grenada: "GD",
  CAR: "CF",
  StVincentGrenadines: "VC",
  TurksandCaicos: "TC",
  FalklandIslands: "FK",
  Greenland: "GL",
  Montserrat: "MS",
  Seychelles: "SC",
  Suriname: "SR",
  Nicaragua: "NI",
  Gambia: "GM",
  VaticanCity: "VA",
  Mauritania: "MR",
  PapuaNewGuinea: "PG",
  StBarth: "BL",
  Burundi: "BI",
  Bhutan: "BT",
  CaribbeanNetherlands: "BQ",
  BritishVirginIslands: "VG",
  SouthSudan: "SD",
  Anguilla: "AI",
  SaintPierreMiquelon: "PM",
  Yemen: "YE",
  China: "CN",
};

let dataList = document.getElementById("countries");
let countriesInputList = document.getElementById("selectedCountry");
let searchCounty = document.getElementById("search-button");
let number = document.getElementById("number");

searchCounty.addEventListener("click", onClick);
function onClick() {
  getVaccineData(countries[countriesInputList.value]);
}
window.onload = () => {
  createDatalist();
};

function createDatalist() {
  for (key in countries) {
    createNewOption = () => {
      const option = document.createElement("option");
      option.value = key;
      dataList.appendChild(option);
    };
    createNewOption();
  }
}
let totalPerHundred;
function getVaccineData(countrycode) {
  const url = `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${countrycode}?lastdays=30&fullData=true`;
  let i;
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      for (i = data.timeline.length - 1; i >= 0; i--) {
        if (data.timeline[i].daily > 0) break;
      }

      total.textContent = data.timeline[i].total;
      number.appendChild(total);
      totalPerHundred = data.timeline[i].totalPerHundred / 100;
      if (totalPerHundred > 1) {
        totalPerHundred = 1;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
