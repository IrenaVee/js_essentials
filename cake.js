var check = "cake";
var score = 0;

if (check === "cake" && score === 0) {

  score = 0; //dit is een var, maar keyword var weggelaten zodat score een global scope krijgt
  console.log ("correct your score is now " + score);

} else {
  score = 0;

  console.log("wrong your score is now " + score);
}
