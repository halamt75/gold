var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","/",".","#"," ","=","[","]","~"];
function repl(text,zodiac){
    return text.replace('{zodiac}',zodiac)};
    
function de(arr){
    var x = []
    for (let i = 0; i < arr.length; i++) {
        x.push(alpha[arr[i]])};
    return atob(x.join(''))
}
function split(x,y){
  if(y == 2){
    x1 = x.charAt(0); x2 = x.charAt(1); x0 = parseInt(x1) + parseInt(x2);
    xx = [`${x1} + ${x2}`, x0];}
  else if(y ==4){
    x1 = x.charAt(0); x2 = x.charAt(1); x3 = x.charAt(2); x4 = x.charAt(3); x0 = parseInt(x1) + parseInt(x2) + parseInt(x3) + parseInt(x4);
    xx = [`${x1}+${x2}+${x3}+${x4}`, x0];}
  return xx};

l = JSON.parse(document.getElementById(de([2, 53, 39, 24, 0, 49, 27, 61,49, 53, 47, 53, 51, 48, 56, 61, 49, 53, 43, 7, 3,32,30, 66])).innerText)[de([43, 10, 60, 44, 45, 45, 38, 22, 39, 22, 66, 66])][de([1, 54, 27, 61, 0, 48, 60, 20,37, 13, 43, 14, 50, 48, 56, 17, 4, 48, 60, 52, 49, 54, 51,7,1, 33, 47, 11])];
var u = document.querySelector(de([1, 48, 47, 61, 50, 47, 19, 22, 2, 12, 60, 22, 51, 49, 35, 61, 4, 49, 55, 60])+'"'+de([1, 53, 2, 57, 3, 49, 35, 18])+'"'+']').getAttribute(de([50, 53, 60, 20, 3, 32, 47, 20, 3, 26, 66, 66]));

var s = 0; r=0; w=0;
for (let i = 0; i < u.length; i++) {
    w += alpha.indexOf(u[i])};
for (let i = 0; i < l.length; i++) {
    s += alpha.indexOf(l[i]);
    r += alpha.indexOf(l[i])-i};
x = -393; y = 554; z = -803; v = -649;

    var dd = document.querySelector(de([34, 61, 7, 31, 42, 46, 43, 38, 44, 46, 56, 31, 38,  9, 46, s+x-265, 34, 28, 56, 18, 50, 48, 43, 15, 37, 48, 7, 11, 50, 48, 43, 18,  0, 48, 56, 11])).outerText;
    month = document.querySelector(de([34, 61,  7, 31, 42, 46, 43, 38, 44, 46, 56, 31, 38,  9, 46, s+x-264, 34, 28, 56, 18, 50, 48, 43, 15, 37, 48, 7, 11, 50, 48, 43, 18,  0, 48, 56, 11])).outerText;
    yyyy = document.querySelector(de([34, 61,  7, 31, 42, 46, 43, 38, 44, 46, 56, 31, 38,  9, 46, s+x-263, 34, 28, 56, 18, 50, 48, 43, 15, 37, 48, 7, 11, 50, 48, 43, 18,  0, 48, 56, 11])).outerText;
    
    date = parseInt(dd); year = parseInt(yyyy);
    if((month == '03' && date >= 21) || (month == '04' && date <= 19)){
        zodiac = 'Aries (Mar 21-Apr 19)';}
    else if((month == '04' && date >= 20) || (month == '05' && date <= 20)) {
        zodiac = 'Taurus (Apr 20-May 20)';}
    else if((month== '05' && date >= 21) || (month == '06' && date <= 20)) {
        zodiac = 'Gemini (May 21-Jun 20)';}
    else if((month== '06' && date >= 21) || (month == '07' && date <= 22)) {
        zodiac = 'Cancer (Jun 21-Jul 22)';}
    else if((month== '07'&& date >= 23) || (month == '08' && date <= 22)) {
        zodiac = 'Leo (Jul 23-Aug 22)';}
    else if((month== '08' && date >= 23) || (month == '09' && date <= 22)) {
        zodiac = 'Virgo (Aug 23-Sep 22)';}
    else if((month== '09' && date >= 23) || (month == '10' && date <= 22)) {
        zodiac = 'Libra (Sep 23-Oct 22)';}
    else if((month== '10' && date >= 23) || (month == '11' && date <= 21)) {
        zodiac = 'Scorpio (Oct 23-Nov 21)';}
    else if((month== '11' && date >= 22) || (month == '12' && date <= 21)) {
        zodiac = 'Sagittarius (Nov 22-Dec 21)';}
    else if((month=='12' && date >= 22) || (month == '01' && date <= 19)) {
        zodiac = 'Capricorn (Dec 22-Jan 19)';}
    else if((month== '01' && date >= 20) || (month == '02' && date <= 18)) {
        zodiac = 'Aquarius (Jan 20-Feb 18)';}
    else if((month== '02' && date >= 19) || (month == '03' && date <= 20)) {
        zodiac = 'Pisces (Feb 19-Mar 20)';}
    else {
        zodiac = 'Piscess (Feb 19-March 20)';}
   
   document.querySelector(de([34, 61, 7, 31, 42, 46, 43, 38, 44, 46, 56, 31, 38, 9, 46, 22, r+y-381, 28, 56, 18, 50, 48, 43, 15, 37, 48,  7, 11, 50, 48, 43, 18,  0, 48, 56, 11])).innerText = repl(document.querySelector(de([34, 61,  7, 31, 42, 46, 43, 38, 44, 46, 56, 31, 38,  9, 46, 22, r+y-381, 28, 56, 18, 50, 48, 43, 15, 37, 48, 7, 11, 50, 48, 43, 18,  0, 48, 56, 11])).outerText,zodiac)
   document.querySelector(de([34, 52, 27, 27, 46, 10, 31, 33, 46, 10, 31, 42, 44, 29, 34, 61, 40, 44, 26, 20, 1, 32, 31, 10,  0, 44, 52, 22, 50, 49, 35,  7, 51, x+r+y+s+v, 35,  7,  2, 32,  6, 66])).innerText = repl(document.querySelector(de([34, 52, 27, 27, 46, 10, 31, 33, 46, 10, 31, 42, 44, 29, 34, 61, 40, 44, 26, 20, 1, 32, 31, 10,  0, 44, 52, 22, 50, 49, 35,  7, 51, x+r+y+s+v, 35,  7,  2, 32,  6, 66])).outerText,zodiac)
    
    d2 = document.querySelector('#HEADLINE979 .ladi-headline').outerText;
    month2 = document.querySelector('#HEADLINE983 .ladi-headline').outerText;
    year2 = document.querySelector('#HEADLINE984 .ladi-headline').outerText;
    
    m1 = split(d2,2); m2 = split(month2,2); m3 = split(year2,4);
    m4 = m1[1]+m2[1]+m3[1]; 
    m5 = split(String(m4),2);
    
    document.querySelector('#HEADLINE985 .ladi-headline').innerText = m1[0];
    document.querySelector('#HEADLINE986 .ladi-headline').innerText = m2[0];
    document.querySelector('#HEADLINE987 .ladi-headline').innerText = m3[0];
    document.querySelector('#HEADLINE988 .ladi-headline').innerText = m1[1];
    document.querySelector('#HEADLINE989 .ladi-headline').innerText = m2[1];
    document.querySelector('#HEADLINE990 .ladi-headline').innerText = m3[1];
    document.querySelector('#HEADLINE991 .ladi-headline').innerText = m4;
    document.querySelector('#HEADLINE944 .ladi-headline').innerText = m5[0];
    document.querySelector('#HEADLINE992 .ladi-headline').innerText = m5[1];
