const talkingCalendar = function(date) {

  let output = '';
  const dateArr = date.split('/');
  
  switch (dateArr[1]) {
  case '01':
    output += 'January ';
    break;
  case '02':
    output += 'February ';
    break;
  case '03':
    output += 'March ';
    break;
  case '04':
    output += 'April ';
    break;
  case '05':
    output += 'May ';
    break;
  case '06':
    output += 'June ';
    break;
  case '07':
    output += 'July ';
    break;
  case '08':
    output += 'August ';
    break;
  case '09':
    output += 'September ';
    break;
  case '10':
    output += 'October ';
    break;
  case '11':
    output += 'November ';
    break;
  case '12':
    output += 'December ';
    break;
  default:
    return 'Unrecognizable date';
  }

  if (dateArr[2][0] === '0') {
    output += dateArr[2][1];
  } else {
    output += dateArr[2];
  }

  switch (dateArr[2][0]) {
  case '0':
  case '2':
  case '3':
    switch (dateArr[2][1]) {
    case '1':
      output += 'st, ';
      break;
    case '2':
      output += 'nd, ';
      break;
    case '3':
      output += 'rd, ';
      break;
    default:
      output += 'th, ';
      break;
    }
    break;
  default:
    output += 'th, ';
    break;
  }

  output += dateArr[0];

  return output;
};




console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

