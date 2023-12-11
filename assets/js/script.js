setInterval(() => {
    var time = new Date();
    document.getElementById("laikas").innerHTML = time.getHours() + ":" + ("0" + time.getMinutes()).slice(-2) + ":" + ("0" + time.getSeconds()).slice(-2); 
}, 1000);