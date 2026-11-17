// November 20, 2026 at midnight, Pacific time
const partyDate = new Date('2026-11-20T00:00:00-08:00');

const countdownParts = {
    days: document.querySelector('#days'),
    hours: document.querySelector('#hours'),
    minutes: document.querySelector('#minutes'),
    seconds: document.querySelector('#seconds')
};

function updateCountdown() {
    const remaining = partyDate.getTime() - Date.now();

    if (remaining <= 0) {
        document.querySelector('#countdown').innerHTML =
            '<p class="happy birthday isa"</p>';
        return;
    }

    const totalSeconds = Math.floor(remaining / 1000);

    countdownParts.days.textContent = "0" + Math.floor(totalSeconds / 86400);
    countdownParts.hours.textContent = String(
        Math.floor((totalSeconds % 86400) / 3600)
    ).padStart(2, '0');
    countdownParts.minutes.textContent = String(
        Math.floor((totalSeconds % 3600) / 60)
    ).padStart(2, '0');
    countdownParts.seconds.textContent = String(totalSeconds % 60).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

