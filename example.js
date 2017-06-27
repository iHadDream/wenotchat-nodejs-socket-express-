/**
 * Created by kevin on 2017/6/20.
 */
'use strict'
var s = 'Hello';
function greet(name){
    console.log(s +  ',' + name +'!');
}
function think(name,age,location){
    console.log(s + ' ' + name + 'how old are u ' + age + 'where are u' + location);
}
module.exports = greet;