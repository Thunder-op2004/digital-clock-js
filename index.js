
let display = document.querySelector("#digital-clock")
let meridian = document.querySelector("#ampm")
let d = document.querySelector("#day")
let moreinfo = document.querySelector("#date")

setInterval(() => {
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
    let date= time.getDate()
    let year = time.getFullYear()

    if (date < 10) {
        date = "0" + date
    }
    else {
        date = date
    }

    // let h = 12
    // let m = 2
    // let s = 10


    // Updating am and pm acording to time
    if (h >= 12) {
        meridian.textContent = "PM"
    }
    else {
        meridian.textContent = "AM"
    }

    //Turning into 12Hrs clock
    if (h === 0) {
        h = 12
    }
    else if (h > 12) {
        h = h - 12
    }

    // adding zero before hour
    if (h < 10) {
        h = "0" + h
    }
    else {
        h = h
    }

    // adding zero before minute
    if (m < 10) {
        m = "0" + m
    }
    else {
        m = m
    }

    // adding zero before second
    if (s < 10) {
        s = "0" + s
    }
    else {
        s = s
    }

    // Getting day from an array
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']

    // Getting month from an array
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let mon=months[time.getMonth()]

    
    // Display time
    display.textContent = `${h}:${m}:${s}`
    // display day 
    d.textContent = `${days[time.getDay()]}`
    moreinfo.textContent=date+" "+mon+" "+year
}, 1000);
