 let seconds = 0;
    let interval = null;

    function updateDisplay() {
      const hrs = Math.floor(seconds / 3600);
      const mins = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;

      document.getElementById("display").textContent =
        `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }

    function pad(num) {
      return num < 10 ? "0" + num : num;
    }

    function startStopwatch() {
      if (!interval) {
        interval = setInterval(() => {
          seconds++;
          updateDisplay();
        }, 1000);
      }
    }

    function stopStopwatch() {
      clearInterval(interval);
      interval = null;
    }

    function resetStopwatch() {
      stopStopwatch();
      seconds = 0;
      updateDisplay();
    }

    // Initialize display on load
    updateDisplay();