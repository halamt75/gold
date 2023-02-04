<script>
per = 65; t=3000
var w2 = parseFloat(document.querySelector('#BOX2 .ladi-box').offsetWidth);
var c = document.querySelector('#HEADLINE1 .ladi-headline');
function bar(id1,w2,c,per,t,w0=30){
	pc = 1
	setInterval(function(){
		if(pc<per){
			pc +=1;
            $(document).ready(function(){c.innerText = String(pc)+'%';});}
	}, t/per-0.5);
	wx = 0
	setInterval(function(){
		if(wx<(per/100*w2-w0)){
			wx += per/100*w2+3
            $(document).ready(function(){$("#"+id1).animate({width: String(wx)+'px'}, t);});
		}
	}, 10);
}
bar('BOX1',w2,c,per,t)
</script>
