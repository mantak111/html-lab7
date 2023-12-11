// lab 11
setInterval(() => {
    var time = new Date();
    document.getElementById("laikas").innerHTML = time.getHours() + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2); 
}, 1000);

// lab 12
document.getElementById("forma").addEventListener("submit", function(e) {
    e.preventDefault();
    var klaidos = [];
    var rezultatas = "";
    var ivestys = {
        'vardas': document.getElementById("vardas").value,
        'pavarde': document.getElementById("pavarde").value,
        'telefonas': document.getElementById("telefonas").value,
        'email': document.getElementById("email").value,
        'adresas': document.getElementById("adresas").value,
        'pozymiai': [
            parseInt(document.getElementById("pozymis-1").value),
            parseInt(document.getElementById("pozymis-2").value),
            parseInt(document.getElementById("pozymis-3").value),
            parseInt(document.getElementById("pozymis-4").value),
            parseInt(document.getElementById("pozymis-5").value),
        ],
    }
    console.log(ivestys);
    // patikrinimai
    if(!validateEmail(ivestys.email)) {
        klaidos.push("Neteisingai įvestas el. pašto adresas");
    }
    if(!validatePhone(ivestys.telefonas)) {
        klaidos.push("Neteisingai įvestas telefonas. Teisingas formatas: +370 6XX XXXX.");
    }
    if(ivestys.adresas.trim() == '') {
        klaidos.push("Neįvestas adresas");
    }
    if(klaidos.length > 0) {
        for(const i in klaidos) {
            rezultatas += "Klaida: " + klaidos[i] + "\n";
        }
        alert(rezultatas);
        return;
    }

    // rezultatai
    var vidurkis = 0, sk = 0;
    for(const i in ivestys.pozymiai) {
        if(isNaN(ivestys.pozymiai[i])) continue;
        sk++;
        vidurkis += ivestys.pozymiai[i];
    }

    vidurkis /= sk;

    document.getElementById("ivestiDuomenys").innerHTML = "<b>Vardas:</b> " + ivestys.vardas + "<br><b>Pavardė:</b> " + ivestys.pavarde + "<br><b>El. pašto adresas:</b> " + ivestys.email + "<br><b>Adresas:</b> " + ivestys.adresas;

    if(vidurkis <= 10) {
        vidurkis = '<span style="color:green">' + vidurkis + "</span>";
    }
    if(vidurkis > 10 && vidurkis <= 20) {
        vidurkis = '<span style="color:orange">' + vidurkis + "</span>";
    }
    if(vidurkis > 20) {
        vidurkis = '<span style="color:red">' + vidurkis + "</span>";
    }

    document.getElementById("rezultatas").innerHTML = ivestys.vardas + " " + ivestys.pavarde + " (" + ivestys.email + "): " + vidurkis;
});

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      );
  };