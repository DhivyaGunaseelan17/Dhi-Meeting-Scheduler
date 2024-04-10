document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.getElementById('dropdown-toggle');
    var dropdownContent = document.getElementById('dropdown-content');

    dropdownToggle.addEventListener('click', function(event) {
        dropdownContent.classList.toggle('show');
        event.stopPropagation(); // Prevent the click event from bubbling up
    });

    window.addEventListener('click', function(event) {
        if (!dropdownToggle.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});
const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };
  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };
  let calendar = document.querySelector('.calendar');
  const month_names = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  let month_picker = document.querySelector('#month-picker');
  const dayTextFormate = document.querySelector('.day-text-formate');
  const timeFormate = document.querySelector('.time-formate');
  const dateFormate = document.querySelector('.date-formate');
  
  month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
    dayTextFormate.classList.remove('showtime');
    dayTextFormate.classList.add('hidetime');
    timeFormate.classList.remove('showtime');
    timeFormate.classList.add('hideTime');
    dateFormate.classList.remove('showtime');
    dateFormate.classList.add('hideTime');
  };
  
  const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
        31,
        getFebDays(year),
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ];
  
    let currentDate = new Date();
  
    month_picker.innerHTML = month_names[month];
  
    calendar_header_year.innerHTML = year;
  
    let first_day = new Date(year, month);
  
  
    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
  
      let day = document.createElement('div');
  
      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;
  
        if (i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add('current-date');
        }
      }
      calendar_days.appendChild(day);
    }
  };
  
  let month_list = calendar.querySelector('.month-list');
  month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
  
    month_list.append(month);
    month.onclick = () => {
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace('show', 'hide');
      dayTextFormate.classList.remove('hideTime');
      dayTextFormate.classList.add('showtime');
      timeFormate.classList.remove('hideTime');
      timeFormate.classList.add('showtime');
      dateFormate.classList.remove('hideTime');
      dateFormate.classList.add('showtime');
    };
  });
  
  (function() {
    month_list.classList.add('hideonce');
  })();
  document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  
  let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);
  
  const todayShowTime = document.querySelector('.time-formate');
  const todayShowDate = document.querySelector('.date-formate');
  
  const currshowDate = new Date();
  const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    'en-US',
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;
  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
        2,
        '0'
      )}:${`${timer.getMinutes()}`.padStart(
        2,
        '0'
      )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);
  document.addEventListener('DOMContentLoaded', function() {
    const calendarDays = document.querySelector('.calendar-days');
    const nextButton = document.getElementById('next-button');
    let selectedDate = null;
  
    // Function to generate calendar days
    const generateCalendar = (month, year) => {
      // Clear previous calendar days
      calendarDays.innerHTML = '';
  
      // Get the number of days in the current month
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      // Generate calendar days
      for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = i;
  
        // Add event listener for clicking on a day
        dayElement.addEventListener('click', function() {
          // Remove existing selection
          const selectedDay = calendarDays.querySelector('.selected');
          if (selectedDay) {
            selectedDay.classList.remove('selected');
          }
  
          // Highlight selected day
          dayElement.classList.add('selected');
          selectedDate = new Date(year, month, i);
        });
  
        calendarDays.appendChild(dayElement);
      }
    };
  
    // Event listener for clicking on the "Next" button
    nextButton.addEventListener('click', function() {
      if (selectedDate !== null) {
        // Redirect to schedule meeting page with the selected date
        const formattedDate = selectedDate.toLocaleDateString('en-US');
        window.location.href = `schedulemeeting.html?date=${formattedDate}`;
      } else {
        alert('Please select a date before proceeding.');
      }
    });
  
    // Generate initial calendar for the current month and year
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    generateCalendar(currentMonth, currentYear);
  });
  function renderAnalyticsChart() {
    // Dummy data for demonstration
    const data = {
        labels: ['User Login', 'Scheduled Meetings', 'Completed Meetings'],
        datasets: [{
            label: 'Percentage',
            data: [70, 50, 30], // Change these values to reflect actual percentages
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)', // Red
                'rgba(54, 162, 235, 0.2)', // Blue
                'rgba(255, 206, 86, 0.2)' // Yellow
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Get the canvas element
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    // Create the chart
    const myChart = new Chart(ctx, config);
}

// Call the function to render the chart
renderAnalyticsChart();
  // logout
  document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.querySelector(".logout");

    logoutLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default action of the link

        // Display thanks message
        alert("Thank you for using our service!");

        // Redirect to index.html
        window.location.href = "index.html";

        // Display a message in the console for the user to close the window
        console.log("You may close this window.");
    });
});
