
    // Load existing data or start empty
    let dayData = JSON.parse(localStorage.getItem("dayData")) || {};

    function saveData() {
      const date = document.getElementById("date").value;
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!date || !name || !email) {
        alert("Please fill all fields.");
        return;
      }

      const newEntry = { name, email };

      // If date exists, append; else create new array
      if (!dayData[date]) {
        dayData[date] = [];
      }
      dayData[date].push(newEntry);

      // Save to localStorage
      localStorage.setItem("dayData", JSON.stringify(dayData));

      alert("Data saved!");

      // Clear inputs
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("date").value = "";
    }

    function showData() {
      const viewDate = document.getElementById("viewDate").value;
      if (!viewDate) {
        alert("Please select a date.");
        return;
      }

      const dataForDate = dayData[viewDate];
      if (dataForDate && dataForDate.length > 0) {
        document.getElementById("output").textContent = JSON.stringify(dataForDate, null, 2);
      } else {
        document.getElementById("output").textContent = `No data found for ${viewDate}`;
      }
    }

    // Optional: show today's data on load
    window.onload = () => {
      const today = new Date().toISOString().split("T")[0];
      if (dayData[today]) {
        document.getElementById("output").textContent = JSON.stringify(dayData[today], null, 2);
      }
    };
