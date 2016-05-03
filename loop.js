var array = [];

for (var i = 0; i < 100000; i++) {
  // counter: var i = 0; => counter gedeelte (i=index)
  // condition: i < 100000; => is i minder 100000
  // iteration: i++ => voeg 1 toe aan variable

  array.push (i);
}

var arrayDeincrement = [];

for (var i = 100000; i > 0; i--) {
  // var i = 100000; => counter gedeelte (i=index)
  // i > 0 => is i meer dan 0
  // i-- => trekt 1 af aan variable (iteration)

  arrayDeincrement.push (i);
}

var arrayTwo = ["hello", "world", 200];

for (var i = 0; i < arrayTwo.length; i++) {
  //arrayTwo.length heeft betrekking op value in array, .length => geen 0-index, dus start bij 1 met tellen
  //var heeft wel 0 index -> start daarom bij 0
  console.log (arrayTwo[i]);
}
//vind de value(start bij 0 in arrayTwo) //-> log value //-> iteration (i++) vindt plaats, loop
//-> value is nu 1 -> log value 1 -> iteration vindt weer plaats, loop
//-> value is nu 2, log value 2
//-> dit gaat door tot de condition i < arrayTwo.length (in dit geval 3 < 3) false is, loop stopt

var obj = {color:"red", width:200, height:300};
//achterhalen hoeveel keys in bovenstaand object zitten door maken van een array
var arrayObj = Object.keys(obj); //.keys => 'grabs' de namen van alle keys in object

for (var i = 0; i < array.length; i++) {
  console.log(obj [arrayObj[i]]);
  }
