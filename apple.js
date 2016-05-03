//this function is returning an object
function ConstructApple(color, width, height) {
    // this creert een leeg object dat je daarna kan definieren en
    //onderstaande heeft betrekking op object in bovenstaande function
    this.color = color;
    this.width = width;
    this.height = height;

    console.log(this);

}

//creating a shared object, a prototype for all objects createf by function constructApple
ConstructApple.prototype = {
    eat: function(){return "eat that apple"; },
    throw: function(){return "THROW IT!"; },
    nibble: function(){return "nibble like a hamster";}
}
// dmw keyword new wordt context gegeven aan ConstructApple.
// apple, apple2 en apple3 krijgen automatisch link met bovenstaande prototype
var apple =  new ConstructApple("green",300,200);
var apple2 = new ConstructApple("yellow",150,200);
var apple3 = new ConstructApple("red",200,100);
