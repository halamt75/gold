<script>
per = 65; t=3000
var width = parseFloat(document.querySelector('#BOX2 .ladi-box').offsetWidth);
var a = document.querySelector('#HEADLINE1 .ladi-headline');
function bar(id1,width,a,per,t,w0=30){
	pc = 1
	setInterval(function(){
		if(pc<per){
			pc +=1;
            $(document).ready(function(){a.innerText = String(pc)+'%';});}
	}, t/per-0.5);
	wx = 0
	setInterval(function(){
		if(wx<(per/100*width-w0)){
			wx += per/100*width+3
            $(document).ready(function(){$("#"+id1).animate({width: String(wx)+'px'}, t);});}
	}, 10);
}
bar('BOX1',width,a,per,t)
</script>
