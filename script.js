const calendarDayNumber = document.getElementById('day-number');
const calendarDayName = document.getElementById('day-name');
const calendarMonth = document.getElementById('month');
const calendarYear = document.getElementById('year');

const currentDate = new Date();
const dayNumber = currentDate.getDate();
const year = currentDate.getFullYear();
const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dayName = dayOfWeek[currentDate.getDay()];
const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = monthOfYear[currentDate.getMonth()];

calendarDayNumber.innerHTML = dayNumber;
calendarDayName.innerHTML = dayName;
calendarMonth.innerHTML = monthName;
calendarYear.innerHTML = year;
