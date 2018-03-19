function timer() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerHTML = time;

    if(hours >= 6 && hours < 11) {
        document.body.style.backgroundColor = '#E6948B';
        document.getElementById("zon").style.background = "linear-gradient(to bottom, blue, yellow)";
        document.getElementById("secondHeading").innerHTML = "Good morning, <br />Rise and Shine";
        document.getElementById("zon").style.display = 'block';
        document.getElementById("half-circle").style.display = 'none';
    }

    if(hours >= 11 && hours < 12) {
        //doe iets
        console.log("test");
        document.body.style.backgroundColor = '#E6948B';
        document.getElementById("zon").style.background = "linear-gradient(to bottom, red, yellow)";
        document.getElementById("secondHeading").innerHTML = "Good Morning, <br />Time for a Break";
        document.getElementById("zon").style.display = 'block';
        document.getElementById("half-circle").style.display = 'none';
    } 

    if(hours >= 12 && hours < 14) {
        document.body.style.backgroundColor = '#3C91A9';
        document.getElementById("secondHeading").innerHTML = "Good Midday, <br />Lunch Time";
        document.getElementById("zon").style.display = 'block';
        document.getElementById("half-circle").style.display = 'none';
    }

    if(hours >= 14 && hours < 16){
        document.body.style.backgroundColor = '#3C91A9';
        document.getElementById("secondHeading").innerHTML = "Good Midday";
        document.getElementById("zon").style.display = 'block';
        document.getElementById("half-circle").style.display = 'none';
    }

    if(hours >= 16 && hours < 18){
        document.body.style.backgroundColor = '#A82631';
        document.getElementById("secondHeading").innerHTML = "Good Afternoon, <br />Why don't take an appetizer?";
        document.getElementById("zon").style.display = 'block';
        document.getElementById("half-circle").style.display = 'none';
    }

    if(hours >= 18 && hours < 20){
        document.body.style.backgroundColor = '#5E0938';
        document.getElementById("secondHeading").innerHTML = "Good Evening, <br />Bon appetit";
        document.getElementById("zon").style.display = 'none';
        document.getElementById("half-circle").style.display = 'block';
    }

    if(hours >= 20 && hours < 22){
        document.body.style.backgroundColor = '#5E0938';
        document.getElementById("secondHeading").innerHTML = "Good Evening";
        document.getElementById("zon").style.display = 'none';
        document.getElementById("half-circle").style.display = 'block';
    }

    if(hours >= 22 && hours < 24){
        document.body.style.backgroundColor = '#1F354F';
        document.getElementById("secondHeading").innerHTML = "Good Night, <br />Pleasant Dreams";
        document.getElementById("zon").style.display = 'none';
        document.getElementById("half-circle").style.display = 'block';
    }

     if(hours >= 24 && hours < 6){
        document.body.style.backgroundColor = '#1F354F';
        document.getElementById("secondHeading").innerHTML = "Why are you still awake?";
        document.getElementById("zon").style.display = 'none';
        document.getElementById("half-circle").style.display = 'block';
    }

}
setInterval(timer, 100);

// var day = date.getUTCDate();