var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","/",".","#"," ","=","[","]","~"];

function de(arr){
    var x = []
    for (let i = 0; i < arr.length; i++) {
        x.push(alpha[arr[i]])};
    return atob(x.join(''))}

l = JSON.parse(document.getElementById(de([2, 53, 39, 24, 0, 49, 27, 61,49, 53, 47, 53, 51, 48, 56, 61, 49, 53, 43, 7, 3,32,30, 66])).innerText)[de([43, 10, 60, 44, 45, 45, 2, 22, 38, 42, 66, 66])][de([1, 54, 27, 61, 0, 48, 60, 20,37, 13, 43, 14, 50, 48, 56, 17, 4, 48, 60, 52, 49, 54, 51, 7, 1, 33, 47, 11])];
var s = 0; r = 0;
for (let i = 0; i < l.length; i++) {
    s += alpha.indexOf(l[i]);
    r += alpha.indexOf(l[i])-i};

var x = -521; y = 627; z = -787; v = -430;

var t = 0;
function mate(line){
    $(de([34,s+x-257,66,66])+line).click(function(){
        t += 1;
        if (t <=3){
            $(de([34,s+x-257,66,66])+line).animate({
                left: '20px',
                top: String(700+50*(t-1))+'px',
            })
        } else {
            alert('Pumili ka ng 3 salita. Mangyaring pindutin ang "NEXT" upang magpatuloy')
        }
    })
}

mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 39, 25, 10, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29, 26, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29, 30, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29, 34, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29, 38, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29, 42, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29, 46, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29, 50, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29,  2, 66]));
mate(de([44, 30, 47, 27, 43, 30, 23, 35, 45, 10, 46, 53, 40, 29,  6, 66]));