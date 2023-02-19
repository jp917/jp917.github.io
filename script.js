// get current date for header
let date = document.querySelector('#date');
let today = new Date();
let day = today.getDay();
let dd = today.getDate();
let mm = today.getMonth()+1;

// convert day to day of week
switch(day) {
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;
    default:
        day = 'today:'
}

// convert month to month of year
switch(mm) {
    case 1:
        mm = 'jan';
        break;
    case 2:
        mm = 'feb';
        break;
    case 3:
        mm = 'mar';
        break;
    case 4:
        mm = 'apr';
        break;
    case 5:
        mm = 'may';
        break;
    case 6:
        mm = 'jun';
        break;
    case 7:
        mm = 'jul';
        break;
    case 8:
        mm = 'aug';
        break;
    case 9:
        mm = 'sep';
        break;
    case 10:
        mm = 'oct';
        break;
    case 11:
        mm = 'nov';
        break;
    case 12: 
        mm = 'dec';
        break;
    default:
        mm = mm;
}

today = day + ', ' + mm + ' ' + dd;
date.innerHTML = today;


// -----------------------------------------------------------------------
// api call for quotes
const loveMsg = document.getElementById('love-msg');
const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const quotes = ['i love how caring you are', 'i love your cooking', 'i love how you always listen to me','i love spending time with you', 'i love being your smokebuddy', 'i love your sense of humor', 'i love watching tiktoks with you', 'i love going on trips with you', 'i love trying new restaurants with you', 'i love that i can be my true self with you', 'i love that you can be your true self with me', 'i love that you make me want to do better', 'i love your smile', 'i love your laugh', 'i love your sense of fashion', 'i love that you love pink', 'i love how patient you are', 'i love that we always have a great time together', 'i love being bored with you', "i love that you're a great communicator", 'i love how you make me feel safe', 'i love feeling "at home" with you', "i love that you're my best friend", 'i love that we have so much in common', 'i love how great of a listener you are', 'i love how you treat me with respect', 'i love that ahh 🍑', 'i love going on walks with you', 'i love seeing you happy', 'i love surprising you with things you like', 'i love doing things for you'];
var arrayLen = quotes.length;
console.log(arrayLen);

btn.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * arrayLen);
    const item = quotes[randomIndex];
    console.log(item);
    quote.innerHTML = item; 
    loveMsg.innerHTML = 'and most importantly, i love you!';
    
})

