const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const day = new Date().getDay();
  document.querySelector(".dayOfTheWeek").textContent = daysOfTheWeek[day];
  

  setInterval(function () {
    const current = new Date().getTime();
    document.querySelector(".UTCInMilliseconds").textContent = current;
  }, 1000);
  