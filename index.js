const current_time = document.getElementById("current_time");
const current_date = document.getElementById("current_date");
const day_display = document.querySelectorAll(".day-display");
const up_lec_time = document.getElementById("up_time");
const up_module = document.getElementById("up_module");
const up_group = document.getElementById("up_group");
const up_lab = document.getElementById("up_lab");
const up_lectures = document.getElementById("up_lectures");
const curr_time = document.getElementById("curr_time");
const curr_module = document.getElementById("curr_module");
const curr_group = document.getElementById("curr_group");
const curr_lab = document.getElementById("curr_lab");
const curr_lecture = document.getElementById("curr_lecture");
const end_lec_time = document.getElementById("end_lec_time");
const end_module = document.getElementById("end_module");
const end_group = document.getElementById("end_group");
const end_lab = document.getElementById("end_lab");
const end_lectures = document.getElementById("end_lectures");

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const lab1 = "A405";
const lab2 = "B502";
const lab3 = "G1103";
const lab4 = "G604";
const lab5 = "F1301 + F1302";
const lab6 = "G1104";
const lab7 = "B501";
const lab8 = "G1106";
const lab9 = "G1101";
const lab10 = "F1307";
const lab11 = "G1102";
const lab12 = "F301";
const lab13 = "G605";

const byod = "BYOD";

const lecture_1 = "Ms. Poojani Gunathilake , Ms. Karthiga Rajendran";
const lecture_2 = "Ms. Kaushalya Gayathri Rajapakse, Mr. Suresh Niroshan Fernando";
const lecture_3 = "Ms. Hansi de Silva";
const lecture_4 = "Ms. Kaushalya Gayathri Rajapakse, Ms. Harini Gunawardana";
const lecture_5 = "Mr. Eishan Weerasinghe, Ms. Madusha Sulakshi Weerasooriya";
const lecture_6 = "Ms. Harini Gunawardana, Ms. Poojani Gunathilake";
const lecture_7 = "Mr. Vishan Danura Jayasinghearachchi";
const lecture_8 = "Ms. Karthiga Rajendran";
const lecture_9 = "Mr. Eishan Weerasinghe, Ms. Hansi de Silva";
const lecture_10 = "Mr. Bhanuka Edirisinghe, Mr. Manuka Rashen";
const lecture_11 = "Mr. Bimal Gunapala";
const lecture_12 = "Ms. Kaushalya Gayathri Rajapakse, Ms. Poojani Gunathilake.";
const lecture_13 = "Mr. Vishan Danura Jayasinghearachchi , Ms. Poojani Gunathilake";
const lecture_14 = "Ms. Hansi de Silva, Ms. Madusha Sulakshi Weerasooriya";

const module_1 = "SE3030 - SA";
const module_2 = "SE3010 - SEP & QM";
const module_3 = "SE3020 - DS";
const module_4 = "SE3040 - AF";
const module_5 = "IT3050 - ESD Seminar";

const lec_type_1 = "Lecture, Tutorial";
const lec_type_2 = "Practical";
const lec_type_3 = "Lecture Online";

const group_2 = "Y3.S1.WE.SE.0102";
const group_1 = "Y3.S1.WE.SE.0101";
const group_3 = "Y3.S1.WE.SE.02";
const group_4 = "Y3.S1.WD.SE.01";
const group_5 = "Y3.S2.WD.SE.01";


function UpdateTime() {

  const now_time = new Date();
  let time_hovers = now_time.getHours();
  let time_mins = now_time.getMinutes();
  let time_sec = now_time.getSeconds();

  let year = now_time.getFullYear();
  let month = months[now_time.getMonth()];
  let today = now_time.getDate();
  let today_day = days[now_time.getDay()];

  time_hovers = String(time_hovers).padStart(2, "0");
  time_mins = String(time_mins).padStart(2, "0");
  time_sec = String(time_sec).padStart(2, "0");

  const time_string = `${time_hovers} : ${time_mins} : ${time_sec}`;
  const date_string = `${year} / ${month} / ${today}`;

  current_time.innerHTML = time_string;
  current_date.innerHTML = date_string;

  day_display.forEach(mo => {
    mo.innerHTML = today_day;
  });

};

UpdateTime();
setInterval(UpdateTime, 1000);


function UpdateUpcomingLec() {

  const now_time = new Date();
  let time_hovers = now_time.getHours();
  let time_mins = now_time.getMinutes();
  let today_day = days[now_time.getDay()];

  switch (today_day) {
    case days[0]:

      if ((time_hovers < 8)) {

        up_lec_time.innerHTML = "08:00 A.Mc- 10:00 A.M";
        up_module.innerHTML = `${module_1} ${lec_type_2} (${byod})`;
        up_group.innerHTML = ` ${group_1} `;
        up_lab.innerHTML = lab5;
        up_lectures.innerHTML = lecture_1;

      } else if ((time_hovers < 10)) {

        up_lec_time.innerHTML = "10:00 A.Mc- 12:00 P.M";
        up_module.innerHTML = `${module_4}-${group_1} ${lec_type_2} (${byod}) and ${module_2}-${group_2} ${lec_type_2} (${byod})`;
        up_group.innerHTML = "";
        up_lab.innerHTML = `${group_1} - ${lab3} / ${group_2} - ${lab6}`;
        up_lectures.innerHTML = `${group_1} - ${lecture_5} / ${group_2} - ${lecture_6}`;

      } else if ((time_hovers < 14)) {

        up_lec_time.innerHTML = "02:00 P.M - 05:00 P.M";
        up_module.innerHTML = `${module_1} ${lec_type_1}`;
        up_group.innerHTML = ` ${group_1} / ${group_2}`;
        up_lab.innerHTML = lab7;
        up_lectures.innerHTML = lecture_7;

      } else if ((time_hovers < 17)) {

        up_lec_time.innerHTML = "05:00 P.M - 08:00 P.M";
        up_module.innerHTML = `${module_4} ${lec_type_1}`;
        up_group.innerHTML = ` ${group_1} / ${group_2}`;
        up_lab.innerHTML = lab7;
        up_lectures.innerHTML = lecture_8;

      } else {

        up_lec_time.innerHTML = "-";
        up_module.innerHTML = "-";
        up_group.innerHTML = "-";
        up_lab.innerHTML = "-";
        up_lectures.innerHTML = "-";

      }
      break;

    case days[1]:

      if ((time_hovers < 8) || (time_hovers == 8 && time_mins < 30)) {

        up_lec_time.innerHTML = "08:30 A.M - 10:30 A.M";
        up_module.innerHTML = `${module_1} ${lec_type_2} (${byod})`;
        up_group.innerHTML = ` ${group_4} `;
        up_lab.innerHTML = lab13;
        up_lectures.innerHTML = lecture_13;

      } else if ((time_hovers < 11) || (time_hovers == 11 && time_mins < 30)) {

        up_lec_time.innerHTML = "11:30 A.M - 01:30 P.M";
        up_module.innerHTML = `${module_4} ${lec_type_2} (${byod})`;
        up_group.innerHTML = ` ${group_4} `;
        up_lab.innerHTML = lab3;
        up_lectures.innerHTML = lecture_5;

      } else if ((time_hovers < 14) || (time_hovers == 14 && time_mins < 30)) {

        up_lec_time.innerHTML = "02:30 A.M - 07:00 P.M";
        up_module.innerHTML = `${module_4} ${lec_type_1}`;
        up_group.innerHTML = ` ${group_4} / ${group_5} `;
        up_lab.innerHTML = lab10;
        up_lectures.innerHTML = lecture_8;

      } else {

        up_lec_time.innerHTML = "-";
        up_module.innerHTML = "-";
        up_group.innerHTML = "-";
        up_lab.innerHTML = "-";
        up_lectures.innerHTML = "-";

      }
      break;

    case days[2]:

      if ((time_hovers < 18)) {

        up_lec_time.innerHTML = "06:00 P.M - 08:00 P.M";
        up_module.innerHTML = `${module_5} ${lec_type_3} `;
        up_group.innerHTML = "All WeekDay Groups";
        up_lab.innerHTML = "Online";
        up_lectures.innerHTML = lecture_11;

      } else {

        up_lec_time.innerHTML = "-";
        up_module.innerHTML = "-";
        up_group.innerHTML = "-";
        up_lab.innerHTML = "-";
        up_lectures.innerHTML = "-";

      }
      break;

    case days[3]:

      if ((time_hovers < 8) || (time_hovers == 8 && time_mins < 30)) {

        up_lec_time.innerHTML = "08:30 A.M - 10:30 A.M";
        up_module.innerHTML = `${module_2} ${lec_type_2} (${byod})`;
        up_group.innerHTML = ` ${group_4} `;
        up_lab.innerHTML = lab11;
        up_lectures.innerHTML = lecture_12;

      } else if ((time_hovers < 11) || (time_hovers == 11 && time_mins <= 30)) {

        up_lec_time.innerHTML = "11:30 A.M - 01:30 P.M";
        up_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        up_group.innerHTML = ` ${group_4} `;
        up_lab.innerHTML = lab3;
        up_lectures.innerHTML = lecture_14;

      } else if ((time_hovers < 14) || (time_hovers == 14 && time_mins < 30)) {

        up_lec_time.innerHTML = "02:30 P.M - 07:00 P.M";
        up_module.innerHTML = `${module_3} ${lec_type_1}`;
        up_group.innerHTML = ` ${group_4} / ${group_5} `;
        up_lab.innerHTML = lab12;
        up_lectures.innerHTML = lecture_3;

      } else if ((time_hovers < 17)) {

        up_lec_time.innerHTML = "06:00 P.M - 08:00 P.M";
        up_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        up_group.innerHTML = ` ${group_2}`;
        up_lab.innerHTML = lab9;
        up_lectures.innerHTML = lecture_10;

      }
      else {

        up_lec_time.innerHTML = "-";
        up_module.innerHTML = "-";
        up_group.innerHTML = "-";
        up_lab.innerHTML = "-";
        up_lectures.innerHTML = "-";

      }
      break;

    case days[4]:

      if ((time_hovers < 10) || (time_hovers == 10 && time_mins < 30)) {

        up_lec_time.innerHTML = "10:30 A.M - 01:30 P.M";
        up_module.innerHTML = `${module_1} ${lec_type_1} `;
        up_group.innerHTML = ` ${group_4} / ${group_5}`;
        up_lab.innerHTML = lab7;
        up_lectures.innerHTML = lecture_13;

      } else if ((time_hovers < 18)) {

        up_lec_time.innerHTML = "06:00 P.M - 08:00 P.M";
        up_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        up_group.innerHTML = ` ${group_1}`;
        up_lab.innerHTML = lab8;
        up_lectures.innerHTML = lecture_9;

      } else if ((time_hovers < 19)) {

        up_lec_time.innerHTML = "19:00 P.M- 20:00 P.M";
        up_module.innerHTML = `${module_5} ${lec_type_3} `;
        up_group.innerHTML = "All WeekDay Groups";
        up_lab.innerHTML = "Online";
        up_lectures.innerHTML = lecture_11;

      } else {

        up_lec_time.innerHTML = "-";
        up_module.innerHTML = "-";
        up_group.innerHTML = "-";
        up_lab.innerHTML = "-";
        up_lectures.innerHTML = "-";

      }
      break;

    case days[5]:

      if ((time_hovers < 11) || (time_hovers == 11 && time_mins < 30)) {

        up_lec_time.innerHTML = "11:30 A.M - 02:30 P.M";
        up_module.innerHTML = `${module_2} ${lec_type_1} `;
        up_group.innerHTML = ` ${group_4} / ${group_5}`;
        up_lab.innerHTML = lab10;
        up_lectures.innerHTML = lecture_2;

      } else {

        up_lec_time.innerHTML = "-";
        up_module.innerHTML = "-";
        up_group.innerHTML = "-";
        up_lab.innerHTML = "-";
        up_lectures.innerHTML = "-";

      }
      break;

    case days[6]:

      if ((time_hovers < 8)) {

        up_lec_time.innerHTML = "08:00 A.M - 10:00 A.M";
        up_module.innerHTML = `${module_1} ${lec_type_2}`;
        up_group.innerHTML = `${group_2}`;
        up_lab.innerHTML = lab1;
        up_lectures.innerHTML = lecture_1;

      } else if ((time_hovers < 11)) {

        up_lec_time.innerHTML = "11:00 A.M - 14:00 P.M";
        up_module.innerHTML = `${module_2} ${lec_type_1}`;
        up_group.innerHTML = `${group_2} ${group_1}`;
        up_lab.innerHTML = lab2;
        up_lectures.innerHTML = lecture_2;

      } else if ((time_hovers <= 13 && time_mins <= 59)) {

        up_lec_time.innerHTML = "14:00 P.M- 17:00 P.M";
        up_module.innerHTML = `${module_3} ${lec_type_1}`;
        up_group.innerHTML = `${group_2} ${group_1}`;
        up_lab.innerHTML = lab2;
        up_lectures.innerHTML = lecture_3;

      } else if ((time_hovers < 18)) {

        up_lec_time.innerHTML = "06:00 P.M - 08:00 P.M";
        up_module.innerHTML = `${module_2}-${group_1} ${lec_type_2} (${byod}) and ${module_4}-${group_2} ${lec_type_2} (${byod})`;
        up_group.innerHTML = "";
        up_lab.innerHTML = `${group_1} - ${lab3} / ${group_2} - ${lab4}`;
        up_lectures.innerHTML = `${group_1} - ${lecture_4} / ${group_2} - ${lecture_5}`;

      } else {

        up_lec_time.innerHTML = "-";
        up_module.innerHTML = "-";
        up_group.innerHTML = "-";
        up_lab.innerHTML = "-";
        up_lectures.innerHTML = "-";

      }
      break;

    default:

      up_lec_time.innerHTML = "-";
      up_module.innerHTML = "-";
      up_group.innerHTML = "-";
      up_lab.innerHTML = "-";
      up_lectures.innerHTML = "-";

      break;
  }
};

UpdateUpcomingLec();
setInterval(UpdateUpcomingLec, 1000);

function UpdateCurrentLec() {

  const now_time = new Date();
  let time_hovers = now_time.getHours();
  let time_mins = now_time.getMinutes();
  let today_day = days[now_time.getDay()];

  switch (today_day) {

    case days[0]:

      if ((time_hovers >= 8 && time_hovers < 10) || (time_hovers == 10 && time_mins == 0)) {

        curr_time.innerHTML = "08:00 A.M - 10:00 A.M";
        curr_module.innerHTML = `${module_1} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = ` ${group_1} `;
        curr_lab.innerHTML = lab5;
        curr_lecture.innerHTML = lecture_1;

      } else if ((time_hovers >= 10 && time_hovers < 12) || (time_hovers == 12 && time_mins == 0)) {

        curr_time.innerHTML = "10:00 A.M - 12:00 P.M";
        curr_module.innerHTML = `${module_4}-${group_1} ${lec_type_2} (${byod}) and ${module_2}-${group_2} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = "";
        curr_lab.innerHTML = `${group_1} - ${lab3} / ${group_2} - ${lab6}`;
        curr_lecture.innerHTML = `${group_1} - ${lecture_5} / ${group_2} - ${lecture_6}`;

      } else if ((time_hovers >= 14 && time_hovers < 17) || (time_hovers == 17 && time_mins == 0)) {

        curr_time.innerHTML = "02:00 P.M - 05:00 P.M";
        curr_module.innerHTML = `${module_1} ${lec_type_1}`;
        curr_group.innerHTML = ` ${group_1} / ${group_2}`;
        curr_lab.innerHTML = lab7;
        curr_lecture.innerHTML = lecture_7;

      } else if ((time_hovers >= 17 && time_hovers < 20) || (time_hovers == 20 && time_mins == 0)) {

        curr_time.innerHTML = "05:00 P.M - 08:00 P.M";
        curr_module.innerHTML = `${module_4} ${lec_type_1}`;
        curr_group.innerHTML = ` ${group_1} / ${group_2}`;
        curr_lab.innerHTML = lab7;
        curr_lecture.innerHTML = lecture_8;

      } else {

        curr_time.innerHTML = "-";
        curr_module.innerHTML = "-";
        curr_group.innerHTML = "-";
        curr_lab.innerHTML = "-";
        curr_lecture.innerHTML = "-";

      }
      break;

    case days[1]:

      if ((time_hovers > 8 && time_hovers < 10) || (time_hovers == 8 && time_mins >= 30) ||
        (time_hovers == 10 && time_mins <= 30)) {

        curr_time.innerHTML = "08:30 A.M - 10:30 A.M";
        curr_module.innerHTML = `${module_1} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = ` ${group_4} `;
        curr_lab.innerHTML = lab13;
        curr_lecture.innerHTML = lecture_13;

      } else if ((time_hovers > 11 && time_hovers < 13) || (time_hovers == 11 && time_mins >= 30) || (time_hovers == 13 && time_mins <= 30)) {

        curr_time.innerHTML = "11:30 A.M - 01:30 P.M";
        curr_module.innerHTML = `${module_4} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = ` ${group_4} `;
        curr_lab.innerHTML = lab3;
        curr_lecture.innerHTML = lecture_5;

      } else if ((time_hovers > 14 && time_hovers < 19) || (time_hovers == 14 && time_mins >= 30) || (time_hovers == 19 && time_mins == 0)) {

        curr_time.innerHTML = "02:30 P.M - 07:00 P.M";
        curr_module.innerHTML = `${module_4} ${lec_type_1}`;
        curr_group.innerHTML = ` ${group_4} / ${group_5} `;
        curr_lab.innerHTML = lab10;
        curr_lecture.innerHTML = lecture_8;

      } else {

        curr_time.innerHTML = "-";
        curr_module.innerHTML = "-";
        curr_group.innerHTML = "-";
        curr_lab.innerHTML = "-";
        curr_lecture.innerHTML = "-";

      }
      break;

    case days[2]:

      if ((time_hovers >= 18 && time_hovers < 20) || (time_hovers == 20 && time_mins == 0)) {

        curr_time.innerHTML = "06:00 P.M - 08:00 P.M";
        curr_module.innerHTML = `${module_5} ${lec_type_3} `;
        curr_group.innerHTML = "All Weekend Groups";
        curr_lab.innerHTML = "Online";
        curr_lecture.innerHTML = lecture_11;

      } else {

        curr_time.innerHTML = "-";
        curr_module.innerHTML = "-";
        curr_group.innerHTML = "-";
        curr_lab.innerHTML = "-";
        curr_lecture.innerHTML = "-";

      }
      break;

    case days[3]:

      if ((time_hovers > 8 && time_hovers < 10) || (time_hovers == 8 && time_mins >= 30) || (time_hovers == 10 && time_mins <= 30)) {

        curr_time.innerHTML = "08:30 A.M - 10:30 A.M";
        curr_module.innerHTML = `${module_2} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = ` ${group_4} `;
        curr_lab.innerHTML = lab11;
        curr_lecture.innerHTML = lecture_12;

      } else if ((time_hovers > 11 && time_hovers < 13) || (time_hovers == 11 && time_mins >= 30) || (time_hovers == 13 && time_mins <= 30)) {

        curr_time.innerHTML = "11:30 A.M - 13:30 P.M";
        curr_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = ` ${group_4} `;
        curr_lab.innerHTML = lab3;
        curr_lecture.innerHTML = lecture_14;

      } else if ((time_hovers > 14 && time_hovers < 18) ||
        (time_hovers == 14 && time_mins >= 30)) {

        curr_time.innerHTML = "02:30 P.M - 07:00 P.M";
        curr_module.innerHTML = `${module_3} ${lec_type_1}`;
        curr_group.innerHTML = ` ${group_4} / ${group_5} `;
        curr_lab.innerHTML = lab12;
        curr_lecture.innerHTML = lecture_3;

      } else if ((time_hovers >= 18 && time_hovers < 20) || (time_hovers == 20 && time_mins == 0)) {

        curr_time.innerHTML = "06:00 P.M - 08:00 P.M";
        curr_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = ` ${group_2}`;
        curr_lab.innerHTML = lab9;
        curr_lecture.innerHTML = lecture_10;

      }
      else {

        curr_time.innerHTML = "-";
        curr_module.innerHTML = "-";
        curr_group.innerHTML = "-";
        curr_lab.innerHTML = "-";
        curr_lecture.innerHTML = "-";

      }
      break;

    case days[4]:

      if ((time_hovers > 10 && time_hovers < 13) || (time_hovers == 10 && time_mins >= 30)
        || (time_hovers == 13 && time_mins <= 30)) {

        curr_time.innerHTML = "10:30 A.M - 01:30 P.M";
        curr_module.innerHTML = `${module_1} ${lec_type_1} `;
        curr_group.innerHTML = ` ${group_4} / ${group_5}`;
        curr_lab.innerHTML = lab7;
        curr_lecture.innerHTML = lecture_13;

      } else if ((time_hovers >= 18 && time_hovers < 19)) {

        curr_time.innerHTML = "06:00 P.M - 08:00 P.M";
        curr_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = ` ${group_1}`;
        curr_lab.innerHTML = lab8;
        curr_lecture.innerHTML = lecture_9;

      } else if ((time_hovers >= 19 && time_hovers < 21) || (time_hovers == 21 && time_mins == 0)) {

        curr_time.innerHTML = "07:00 P.M - 09:00 P.M";
        curr_module.innerHTML = `${module_5} ${lec_type_3} `;
        curr_group.innerHTML = "All WeekDay Groups";
        curr_lab.innerHTML = "Online";
        curr_lecture.innerHTML = lecture_11;

      } else {

        curr_time.innerHTML = "-";
        curr_module.innerHTML = "-";
        curr_group.innerHTML = "-";
        curr_lab.innerHTML = "-";
        curr_lecture.innerHTML = "-";

      }
      break;

    case days[5]:

      if ((time_hovers > 11 && time_hovers < 14) || (time_hovers == 11 && time_mins >= 30) || (time_hovers == 14 && time_mins <= 30)) {

        curr_time.innerHTML = "11:30 A.M - 14:30 P.M";
        curr_module.innerHTML = `${module_2} ${lec_type_1} `;
        curr_group.innerHTML = ` ${group_4} / ${group_5}`;
        curr_lab.innerHTML = lab10;
        curr_lecture.innerHTML = lecture_2;

      } else {

        curr_time.innerHTML = "-";
        curr_module.innerHTML = "-";
        curr_group.innerHTML = "-";
        curr_lab.innerHTML = "-";
        curr_lecture.innerHTML = "-";

      }
      break;

    case days[6]:

      if ((time_hovers >= 8 && time_hovers < 10) || (time_hovers == 10 && time_mins == 0)) {

        curr_time.innerHTML = "08:00 A.M - 10:00 A.M";
        curr_module.innerHTML = `${module_1} ${lec_type_2}`;
        curr_group.innerHTML = `${group_2}`;
        curr_lab.innerHTML = lab1;
        curr_lecture.innerHTML = lecture_1;

      } else if ((time_hovers >= 11 && time_hovers < 14) || (time_hovers == 14 && time_mins == 0)) {

        curr_time.innerHTML = "11:00 A.M - 02:00 P.M";
        curr_module.innerHTML = `${module_2} ${lec_type_1}`;
        curr_group.innerHTML = `${group_2} ${group_1}`;
        curr_lab.innerHTML = lab2;
        curr_lecture.innerHTML = lecture_2;

      } else if ((time_hovers >= 14 && time_hovers < 17) || (time_hovers == 17 && time_mins == 0)) {

        curr_time.innerHTML = "02:00 P.M - 05:00 P.M";
        curr_module.innerHTML = `${module_3} ${lec_type_1}`;
        curr_group.innerHTML = `${group_2} ${group_1}`;
        curr_lab.innerHTML = lab2;
        curr_lecture.innerHTML = lecture_3;

      } else if ((time_hovers >= 18 && time_hovers < 20) || (time_hovers == 20 && time_mins == 0)) {

        curr_time.innerHTML = "06:00 P.M - 08:00 P.M";
        curr_module.innerHTML = `${module_2}-${group_1} ${lec_type_2} (${byod}) and ${module_4}-${group_2} ${lec_type_2} (${byod})`;
        curr_group.innerHTML = "";
        curr_lab.innerHTML = `${group_1} - ${lab3} / ${group_2} - ${lab4}`;
        curr_lecture.innerHTML = `${group_1} - ${lecture_4} / ${group_2} - ${lecture_5}`;

      } else {

        curr_time.innerHTML = "-";
        curr_module.innerHTML = "-";
        curr_group.innerHTML = "-";
        curr_lab.innerHTML = "-";
        curr_lecture.innerHTML = "-";

      }
      break;

    default:

      curr_time.innerHTML = "-";
      curr_module.innerHTML = "-";
      curr_group.innerHTML = "-";
      curr_lab.innerHTML = "-";
      curr_lecture.innerHTML = "-";

      break;
  }
};

UpdateCurrentLec();
setInterval(UpdateCurrentLec, 1000);

function UpdateEndLec() {

  const now_time = new Date();
  let time_hovers = now_time.getHours();
  let time_mins = now_time.getMinutes();
  let today_day = days[now_time.getDay()];

  switch (today_day) {

    case days[0]:

      if ((time_hovers == 10 && time_mins >= 1) || (time_hovers == 11) || (time_hovers == 12 && time_mins == 0)) {

        end_lec_time.innerHTML = "08:00 A.M - 10:00 A.M";
        end_module.innerHTML = `${module_1} ${lec_type_2} (${byod})`;
        end_group.innerHTML = ` ${group_1} `;
        end_lab.innerHTML = lab5;
        end_lectures.innerHTML = lecture_1;

      } else if ((time_hovers == 12 && time_mins >= 1) || (time_hovers >= 13 && time_hovers < 17) || (time_hovers == 17 && time_mins == 0)) {

        end_lec_time.innerHTML = "10:00 A.M - 12:00 P.M";
        end_module.innerHTML = `${module_4}-${group_1} ${lec_type_2} (${byod}) and ${module_2}-${group_2} ${lec_type_2} (${byod})`;
        end_group.innerHTML = "";
        end_lab.innerHTML = `${group_1} - ${lab3} / ${group_2} - ${lab6}`;
        end_lectures.innerHTML = `${group_1} - ${lecture_5} / ${group_2} - ${lecture_6}`;

      } else if ((time_hovers == 17 && time_mins >= 1) || (time_hovers >= 18 && time_hovers < 20) || (time_hovers == 20 && time_mins == 0)) {

        end_lec_time.innerHTML = "02:00 P.M - 05:00 P.M";
        end_module.innerHTML = `${module_1} ${lec_type_1}`;
        end_group.innerHTML = ` ${group_1} / ${group_2}`;
        end_lab.innerHTML = lab7;
        end_lectures.innerHTML = lecture_7;

      } else if ((time_hovers == 20 && time_mins >= 1) || (time_hovers >= 21 && time_hovers < 22) || (time_hovers == 22 && time_mins == 0)) {

        end_lec_time.innerHTML = "05:00 P.M - 08:00 P.M";
        end_module.innerHTML = `${module_4} ${lec_type_1}`;
        end_group.innerHTML = ` ${group_1} / ${group_2}`;
        end_lab.innerHTML = lab7;
        end_lectures.innerHTML = lecture_8;

      } else {

        end_lec_time.innerHTML = "-";
        end_module.innerHTML = "-";
        end_group.innerHTML = "-";
        end_lab.innerHTML = "-";
        end_lectures.innerHTML = "-";

      }
      break;

    case days[1]:

      if ((time_hovers == 10 && time_mins >= 31) || (time_hovers >= 11 && time_hovers < 13) || (time_hovers == 13 && time_mins <= 30)) {

        end_lec_time.innerHTML = "08:30 A.M - 10:30 A.M";
        end_module.innerHTML = `${module_1} ${lec_type_2} (${byod})`;
        end_group.innerHTML = ` ${group_4} `;
        end_lab.innerHTML = lab13;
        end_lectures.innerHTML = lecture_13;

      } else if ((time_hovers == 13 && time_mins >= 31) || (time_hovers >= 14 && time_hovers < 19) || (time_hovers == 19 && time_mins == 0)) {

        end_lec_time.innerHTML = "11:30 A.M - 01:30 P.M";
        end_module.innerHTML = `${module_4} ${lec_type_2} (${byod})`;
        end_group.innerHTML = ` ${group_4} `;
        end_lab.innerHTML = lab3;
        end_lectures.innerHTML = lecture_5;

      } else if ((time_hovers == 19 && time_mins >= 1) || (time_hovers >= 20 && time_hovers < 22) || (time_hovers == 22 && time_mins == 0)) {

        end_lec_time.innerHTML = "02:30 P.M - 07:00 P.M";
        end_module.innerHTML = `${module_4} ${lec_type_1}`;
        end_group.innerHTML = ` ${group_4} / ${group_5} `;
        end_lab.innerHTML = lab10;
        end_lectures.innerHTML = lecture_8;

      } else {

        end_lec_time.innerHTML = "-";
        end_module.innerHTML = "-";
        end_group.innerHTML = "-";
        end_lab.innerHTML = "-";
        end_lectures.innerHTML = "-";

      }
      break;

    case days[2]:

      if ((time_hovers == 20 && time_mins >= 1) || (time_hovers >= 21 && time_hovers < 22) || (time_hovers == 22 && time_mins == 0)) {

        end_lec_time.innerHTML = "06:00 P.M - 08:00 P.M";
        end_module.innerHTML = `${module_5} ${lec_type_3} `;
        end_group.innerHTML = "All WeekDay Groups";
        end_lab.innerHTML = "Online";
        end_lectures.innerHTML = lecture_11;

      } else {

        end_lec_time.innerHTML = "-";
        end_module.innerHTML = "-";
        end_group.innerHTML = "-";
        end_lab.innerHTML = "-";
        end_lectures.innerHTML = "-";

      }
      break;

    case days[3]:

      if ((time_hovers == 10 && time_mins >= 31) || (time_hovers >= 11 && time_hovers < 13) || (time_hovers == 13 && time_mins <= 30)) {

        end_lec_time.innerHTML = "08:30 A.M - 10:30 A.M";
        end_module.innerHTML = `${module_2} ${lec_type_2} (${byod})`;
        end_group.innerHTML = ` ${group_4} `;
        end_lab.innerHTML = lab11;
        end_lectures.innerHTML = lecture_12;

      } else if ((time_hovers == 13 && time_mins >= 31) || (time_hovers >= 14 && time_hovers < 19) || (time_hovers == 19 && time_mins == 0)) {

        end_lec_time.innerHTML = "11:30 A.M - 01:30 P.M";
        end_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        end_group.innerHTML = ` ${group_4} `;
        end_lab.innerHTML = lab3;
        end_lectures.innerHTML = lecture_14;

      } else if ((time_hovers == 19 && time_mins >= 1) || (time_hovers == 20 && time_mins == 0)) {

        end_lec_time.innerHTML = "02:30 P.M - 07:00 P.M";
        end_module.innerHTML = `${module_3} ${lec_type_1}`;
        end_group.innerHTML = ` ${group_4} / ${group_5} `;
        end_lab.innerHTML = lab12;
        end_lectures.innerHTML = lecture_3;

      } else if ((time_hovers == 20 && time_mins >= 1) || (time_hovers >= 21 && time_hovers < 22) || (time_hovers == 22 && time_mins == 0)) {

        end_lec_time.innerHTML = "06:00 P.M - 08:00 P.M";
        end_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        end_group.innerHTML = ` ${group_2}`;
        end_lab.innerHTML = lab9;
        end_lectures.innerHTML = lecture_10;

      }
      else {

        end_lec_time.innerHTML = "-";
        end_module.innerHTML = "-";
        end_group.innerHTML = "-";
        end_lab.innerHTML = "-";
        end_lectures.innerHTML = "-";

      }
      break;

    case days[4]:

      if ((time_hovers == 13 && time_mins >= 31) || (time_hovers >= 14 && time_hovers < 20) || (time_hovers == 20 && time_mins == 0)) {

        end_lec_time.innerHTML = "10:30 A.M - 01:30 P.M";
        end_module.innerHTML = `${module_1} ${lec_type_1} `;
        end_group.innerHTML = ` ${group_4} / ${group_5}`;
        end_lab.innerHTML = lab7;
        end_lectures.innerHTML = lecture_13;

      } else if ((time_hovers == 20 && time_mins >= 1) || (time_hovers == 21 && time_mins == 0)) {

        end_lec_time.innerHTML = "06:00 P.M - 08:00 P.M";
        end_module.innerHTML = `${module_3} ${lec_type_2} (${byod})`;
        end_group.innerHTML = ` ${group_1}`;
        end_lab.innerHTML = lab8;
        end_lectures.innerHTML = lecture_9;

      } else if ((time_hovers == 21 && time_mins >= 1) || (time_hovers == 22 && time_mins == 0)) {

        end_lec_time.innerHTML = "07:00 P.M - 09:00 P.M";
        end_module.innerHTML = `${module_5} ${lec_type_3} `;
        end_group.innerHTML = "All WeekDay Groups";
        end_lab.innerHTML = "Online";
        end_lectures.innerHTML = lecture_11;

      } else {

        end_lec_time.innerHTML = "-";
        end_module.innerHTML = "-";
        end_group.innerHTML = "-";
        end_lab.innerHTML = "-";
        end_lectures.innerHTML = "-";

      }
      break;

    case days[5]:

      if ((time_hovers == 13 && time_mins >= 31) || (time_hovers >= 14 && time_hovers < 22) || (time_hovers == 22 && time_mins == 0)) {

        end_lec_time.innerHTML = "11:30 A.M - 01:30 P.M";
        end_module.innerHTML = `${module_2} ${lec_type_1} `;
        end_group.innerHTML = ` ${group_4} / ${group_5}`;
        end_lab.innerHTML = lab10;
        end_lectures.innerHTML = lecture_2;

      } else {

        end_lec_time.innerHTML = "-";
        end_module.innerHTML = "-";
        end_group.innerHTML = "-";
        end_lab.innerHTML = "-";
        end_lectures.innerHTML = "-";

      }
      break;

    case days[6]:

      if ((time_hovers == 10 && time_mins >= 1) || (time_hovers >= 11 && time_hovers < 14) || (time_hovers == 14 && time_mins == 0)) {

        end_lec_time.innerHTML = "08:00 A.M - 10:00 A.M";
        end_module.innerHTML = `${module_1} ${lec_type_2}`;
        end_group.innerHTML = `${group_2}`;
        end_lab.innerHTML = lab1;
        end_lectures.innerHTML = lecture_1;

      } else if ((time_hovers == 14 && time_mins >= 1) || (time_hovers >= 15 && time_hovers < 17) || (time_hovers == 17 && time_mins == 0)) {

        end_lec_time.innerHTML = "11:00 A.M - 02:00 P.M";
        end_module.innerHTML = `${module_2} ${lec_type_1}`;
        end_group.innerHTML = `${group_2} ${group_1}`;
        end_lab.innerHTML = lab2;
        end_lectures.innerHTML = lecture_2;

      } else if ((time_hovers == 17 && time_mins >= 1) || (time_hovers >= 18 && time_hovers < 20) || (time_hovers == 20 && time_mins == 0)) {

        end_lec_time.innerHTML = "02:00 P.M - 05:00 P.M";
        end_module.innerHTML = `${module_3} ${lec_type_1}`;
        end_group.innerHTML = `${group_2} ${group_1}`;
        end_lab.innerHTML = lab2;
        end_lectures.innerHTML = lecture_3;

      } else if ((time_hovers == 20 && time_mins >= 1) || (time_hovers >= 21 && time_hovers < 22) || (time_hovers == 22 && time_mins == 0)) {

        end_lec_time.innerHTML = "06:00 A.M - 08:00 P.M";
        end_module.innerHTML = `${module_2}-${group_1} ${lec_type_2} (${byod}) and ${module_4}-${group_2} ${lec_type_2} (${byod})`;
        end_group.innerHTML = "";
        end_lab.innerHTML = `${group_1} - ${lab3} / ${group_2} - ${lab4}`;
        end_lectures.innerHTML = `${group_1} - ${lecture_4} / ${group_2} - ${lecture_5}`;

      } else {

        end_lec_time.innerHTML = "-";
        end_module.innerHTML = "-";
        end_group.innerHTML = "-";
        end_lab.innerHTML = "-";
        end_lectures.innerHTML = "-";

      }
      break;

    default:

      end_lec_time.innerHTML = "-";
      end_module.innerHTML = "-";
      end_group.innerHTML = "-";
      end_lab.innerHTML = "-";
      end_lectures.innerHTML = "-";

      break;
  }
};

UpdateEndLec();
setInterval(UpdateEndLec, 1000);