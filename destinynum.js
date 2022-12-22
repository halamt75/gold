setInterval(function(){
    var a, b;
    firstname = document.querySelector('#HEADLINE1 .ladi-headline').outerText;
    lastname = document.querySelector('#HEADLINE2 .ladi-headline').outerText;

    a = firstname.replace(".", " ").replace(",", " ").replace("Ñ", "N").replace("-", " ").split(" ")[0];
    document.querySelector('#HEADLINE1-1 .ladi-headline').innerText = a;
    b1 = lastname.trim().replace(".", " ").replace(",", " ").replace("Ñ", "N").replace("-", " ").split(" ");
    b = b1[b1.length-1]
    document.querySelector('#HEADLINE2-1 .ladi-headline').innerText = b;

    numdict = {'A':'1','B':'2','C':'3','D':'4','E':'5','F':'6','G':'7','H':'8','I':'9','J':'1','K':'2','L':'3','M':'4','N':'5','O':'6','P':'7','Q':'8','R':'9','S':'1','T':'2','U':'3','V':'4','W':'5','X':'6','Y':'7','Z':'8'};

    function chars(word) {
        m = []
        for (var i = 0; i < word.length; i++) {
            m.push(word.charAt(i)) ;
            };
        return m
      };

    c = chars(a);
    d = chars(b);
    numc = [];
    numd = [];
    numf = [];
    sumc = sumd = sumf = 0;

    for (let i = 0; i < c.length; i++) {
        numc.push(numdict[c[i]]);
        sumc = sumc + parseInt(numdict[c[i]]);
        };
    showc = numc.join("+")+'='+String(sumc);
    document.querySelector('#HEADLINE1-2 .ladi-headline').innerText = showc;

    // console.log('sumc', sumc);
    // console.log('showc', showc);

    for (let i = 0; i < d.length; i++) {
      numd.push(numdict[d[i]]);
      sumd = sumd + parseInt(numdict[d[i]]);
      };
    showd = numd.join("+")+'='+String(sumd);
    document.querySelector('#HEADLINE2-2 .ladi-headline').innerText = showd;
    // console.log('sumd', sumd);
    // console.log('showd', showd);

    sume = sumc + sumd;
    showe = parseInt(sumc) + '+' + parseInt(sumd) + '=' + String(sume);
    document.querySelector('#HEADLINE3 .ladi-headline').innerText = showe;
    // console.log('sume', sume);
    // console.log('showe', showe);

    f = chars(String(sume));
    for (let i = 0; i < f.length; i++) {
      numf.push(String(sume)[i]);
      sumf = sumf + parseInt(String(sume)[i]);
      };
    showf = numf.join("+");
    document.querySelector('#HEADLINE4 .ladi-headline').innerText = showf;
    // console.log('sumf', sumf);
    // console.log('showf', showf);

    document.querySelector('#HEADLINE5 .ladi-headline').innerText = sumf;

    document.querySelector('[placeholder="number"]').value = sumf;
});
