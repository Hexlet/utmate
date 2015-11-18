function buildUrl() {
  var myUrl =       document.getElementById("initialUrl").value;
  var utmSource =   document.getElementById("utmSource").value;
  var utmMedium =   document.getElementById("utmMedium").value;
  var utmCampaign = document.getElementById("utmCampaign").value;

  myUrl = addUtmSource(myUrl, utmSource);
  myUrl = addUtmMedium(myUrl, utmMedium);
  myUrl = addUtmCampaign(myUrl, utmCampaign);

  document.getElementById("resultUrl").value = myUrl;
}

function handleRadioChange(radioButton) {
  // set utm_source or utm_medium field value based on radio button
  var typeOfValue = radioButton.className;
  document.getElementById(typeOfValue).value = radioButton.value;
  // if utm_source changed, then set utm_medium accordingly
  if (typeOfValue == "utmSource") {
    switch (radioButton.value) {
      case "twitter":
      case "facebook":
      case "vk":
      case "google_plus":
      case "linkedin":
        document.getElementById("socialRadioButton").click();
        break;
      case "habr":
      case "d3":
      case "lepra":
        document.getElementById("blogRadioButton").click();
        break;
    }
  }
}

function setCampaign(campaign) {
  document.getElementById("utmCampaign").value = campaign;
  buildUrl();
}
