const table_title = document.querySelectorAll(".day-display");

const _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function changeTableTitleBackground() {
  const day = new Date();
  const today = _days[day.getDay()];

  switch (today) {

    case _days[1]:
      table_title.forEach(val => {
        val.classList.add("monday");
      })
      break;

    default:
      break;
  }
};
changeTableTitleBackground();
setInterval(changeTableTitleBackground, 1000);


function setTimeBasedBackground() {

  const currentHour = new Date().getHours();
  const body = document.body;

  body.classList.remove('morning', 'afternoon', 'evening', 'night');

  if (currentHour >= 6 && currentHour < 12) {

    body.classList.add('morning');

  } else if (currentHour >= 12 && currentHour < 17) {

    body.classList.add('afternoon');

  } else if (currentHour >= 17 && currentHour < 20) {

    body.classList.add('evening');

  } else {

    body.classList.add('night');

  }
};

setTimeBasedBackground();
setInterval(setTimeBasedBackground, 1000);