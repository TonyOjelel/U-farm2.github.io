function showPage(pageName) {
    var iframe = document.getElementById("page-content");
    switch (pageName) {
      case "FO_registration":
        iframe.src = "FO_registration.html";
        break;
      case "registratedFO":
        iframe.src = "registratedFO.html";
        break;
      case "appiontNewFO":
        iframe.src = "FO_appoint.html";
        break;
      case "FOauth":
        iframe.src = "FOauth.html";
        break;
    }
  }