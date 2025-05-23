function updateClock() {
    const clock = document.getElementById('digitalClock');
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // hour '0' should be '12'
    hours = hours.toString().padStart(2, '0');

    clock.innerHTML = `${hours}:${minutes}:${seconds} <span class="ampm">${ampm}</span>`;
  }

  updateClock();
  setInterval(updateClock, 1000);