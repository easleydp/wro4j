function bar(a){
try{
foo();
}
catch(e){
alert("Exception caught (foo not defined)");
}
alert(a);
};
bar(10);