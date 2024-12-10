
let quarterEl = document.getElementById("quarter-no")


let homeScore = 0;
let guestScore = 0;

quarterEl.textContent = 'Q1'

// Timer Function And Quarter Number Function to Implement Later

function addPoints(point, side)
{
    if(side == "home")
    {
        homeScore+= point
        let homeEl = document.getElementById("home-el");
        homeEl.textContent = homeScore
    }
    else
    {
        guestScore+= point
        let guestEl = document.getElementById("guest-el");
        guestEl.textContent= guestScore;
    }
    
}

function newGame(){

    homeScore = 0
    guestScore = 0

    document.getElementById("home-el").innerText = homeScore
    document.getElementById("guest-el").innerText = guestScore
}
