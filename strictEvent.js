"use strict"
//heeft betrekking op keyword this
// altijd deze string bovenaan plaatsen wanneer keyword this strict gebruikt moet worden
//zonder deze string zal this keyword referen aan window van document

document.getElementById('eventClick').addEventListener('click', function(){
  console.dir(this); //dir => print out interactive list met JS objects
});

//onthouden met this keyword:
// Waar heeft this keyword betrekking op?
// this;                                        => this = window
// var global = this;                           => this = window
// var global = {name:'Irena', context:this};   => this = window
// function test(){console.log(this);}          => 2 mogelijkheden:
//                                              in liberal mode: this = window
//                                              in strict mode: this = null/undefined

//indien this betrekking refereert (invoked from) aan een object zoals
//obj.test(); => this = obj (where it is invoked from)
//obj.inner.test() => this = inner where it is invoked from)

// In het geval dat execution content afkomstig is van een EventListener:
//document.getElementById('eventClick').addEventListener('click' function() {console.log(this);)
// this = object dat hoort bij DOM element dat hoort bij de event 
