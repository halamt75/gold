per = 65; t=3000
function bar(per,t,w0=30){
    var w1 = parseFloat(document.querySelector('#BOX1 .ladi-box').offsetWidth);
	var w2 = parseFloat(document.querySelector('#BOX2 .ladi-box').offsetWidth);
	var c = document.querySelector('#HEADLINE1 .ladi-headline');
	pc = 1
	setInterval(function(){
		if(pc<per){
			pc +=1;
            $(document).ready(function(){c.innerText = String(pc)+'%';});
		}
	}, t/per);
	wx = 0
	setInterval(function(){
		if(wx<(per/100*w2-w0)){
			wx += per/100*w2+3
            $(document).ready(function(){
                $("#BOX1").animate({width: String(wx)+'px'}, t);
            });
		}
	}, 10);
}
bar(per,t)
