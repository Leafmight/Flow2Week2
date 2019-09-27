import "bootstrap/dist/css/bootstrap.css";

var eventButton = document.getElementById("svg2");
eventButton.addEventListener("click", eventHandler, false);

var prev;

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function getCountry(id) {
  fetch("http://restcountries.eu/rest/v1/alpha?codes=" + id)
    .then(handleHttpErrors)
    .then(data => {
      console.log(data);
      let countryInfoList =
        "Country: " +
        data[0].name +
        ", Poplulation: " +
        data[0].population +
        ", Area: " +
        data[0].area +
        ", Borders: " +
        data[0].borders;
      document.getElementById("countryInfo").innerText = countryInfoList;
    });
}

function eventHandler(e) {
  var id = e.target.id;

  if (!prev) {
    e.target.style.fill = "red";
    prev = e.target;
  } else {
    prev.style.fill = "rgb(192, 192, 192)";
    e.target.style.fill = "red";
    prev = e.target;
  }

  getCountry(id);
}
