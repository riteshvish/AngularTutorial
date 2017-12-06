var getRefsCode=function(FullName,mongoid,counter){
  var fn=(FullName?FullName:"John Doe").split(" ");
  var d = new Date().getTime().toString();
  var fn2=(fn[0][0]+(fn[1]?fn[1][0]:fn[0][1])).toLowerCase()
  return (fn2+d.substr(d.length -3)+counter+mongoid.substr(mongoid.length - 5));
}

var counter=Math.floor(Math.random() * 6) + 5;
counter="";// counter>9?counter:"0"+counter;
var mongoid='59774cce05211ecf59ff75ea'
var FullName='Ritesh Vishwakarma'
console.log(getRefsCode(null,mongoid,counter));
{ "$eq" : ["$field", /MongoDB/i] }] }
