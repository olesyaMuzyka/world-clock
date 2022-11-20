function updateTime() {
  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector(".date");
  let istanbulTimeElement = istanbulElement.querySelector(".time");
  let istanbulTime = moment().tz("Europe/Istanbul");

  istanbulDateElement.innerHTML = istanbulTime.format("MMMM DD, YYYY");
  istanbulTimeElement.innerHTML = istanbulTime.format("HH:mm:ss");

  let montrealElement = document.querySelector("#montreal");
  let montrealDateElement = montrealElement.querySelector(".date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment().tz("America/Montreal");

  montrealDateElement.innerHTML = montrealTime.format("MMMM DD, YYYY");
  montrealTimeElement.innerHTML = montrealTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
