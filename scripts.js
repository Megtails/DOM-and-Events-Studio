// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeOff = document.getElementById("takeoff");
    const land = document.getElementById("landing");
    const status = document.getElementById("flightStatus");
    const aMission = document.getElementById("missionAbort");
    const sBackground = document.getElementById("shuttleBackground");
    const sHeight = document.getElementById("spaceShuttleHeight");
    const goDown = document.getElementById("down");
    const goUp = document.getElementById("up");
    const goLeft = document.getElementById("left");
    const goRight = document.getElementById("right");
    let rocket = document.getElementById("rocket");

    takeOff.addEventListener("click", function() {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            status.innerHTML = "Shuttle in flight.";
            sBackground.style.backgroundColor = "blue";
            sHeight.innerHTML = 10000;
        }
    });

    land.addEventListener("click", function() {
        let message = window.alert("The shuttle is landing. Landing gear engaged.");
        status.innerHTML = "The shuttle has landed.";
        sBackground.style.backgroundColor = "green";
        sHeight.innerHTML = 0;
    });

    aMission.addEventListener("click", function() {
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            status.innerHTML = "Mission aborted.";
            sBackground.style.backgroundColor = "green";
            sHeight.innerHTML = 0;
        }
    })

    goDown.addEventListener("click", function() {
        let movement = parseInt(rocket.style.marginBottom) - 10 + "px";
        rocket.style.marginBottom = movement;
        sHeight.innerHTML = parseInt(sHeight) - 10000;
    });

});