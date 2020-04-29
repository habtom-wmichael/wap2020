x=1;
var a=5;
var b=10;
var c=function(a,b,c){
    document.writeln(x);
    document.writeln(a);
    var f=function(a,b,c){
        b=a;
        document.writeln(b);
        b=c;
        var x=5;
    }
    f(a,b,c);
    document.writeln(b);
    var x=10;
}
c(8,9,10);
document.writeln(b);
document.writeln(x);
