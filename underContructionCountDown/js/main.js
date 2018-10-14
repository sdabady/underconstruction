const countdown = document.querySelector('.countdown')

// Set Launch Date
const launchDate = new Date('Jan 1, 2019 13:00:00').getTime();

//update Every Second
const intvl = setInterval(() => {
    //Get Todays Date and Time (ms)
    const now = new Date().getTime();

    //Distance from now to Launch Date
    const distance = launchDate - now;

    //Time Calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / (1000));

    //display result
    countdown.innerHTML = `
    <div>${days}<span>Days</days></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
    `;
    // If launchdate Passed
    if(distance < 0) {
        //Stop Countdown
        clearInterval(intvl);
        // Style and output text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!'
    }
}, 1000);