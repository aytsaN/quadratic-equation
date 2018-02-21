module.exports = function solveEquation(equation) {
 var arr=equation.split(' ');
 if (arr[3]=='-'){
     arr[4]*=-1;
 }
 if (arr[7]=='-'){
     arr[8]*=-1;
 }
 var discr=arr[4]*arr[4]-4*arr[0]*arr[8];
 arr[4]*=-1;
 var x1=Math.round((arr[4]+Math.sqrt(discr))/(2*arr[0]));
 var x2=Math.round((arr[4]-Math.sqrt(discr))/(2*arr[0]));

 var ordAr=[];
 if (x1>=x2){
     ordAr[0]=x2;
     ordAr[1]=x1;
 }
 else {
     ordAr[0]=x1;
     ordAr[1]=x2;
 }
 return ordAr;
}
