var katsayi1=document.getElementById("color1"); //test
var katsayi2=document.getElementById("color2");
var katsayi3=document.getElementById("color3");
var tolerans=document.getElementById("color4");
var birim=document.getElementById("unit");
var goster=document.getElementById("conclusion");
 
var renk=[
{"arkaplan":"#000000","yazi":"#fff"},
{"arkaplan":"#953700","yazi":"#fff"},
{"arkaplan":"#FF0000","yazi":"#fff"},
{"arkaplan":"#ff6600","yazi":"#000"},
{"arkaplan":"#ffff00","yazi":"#000"},
{"arkaplan":"#00ff00","yazi":"#fff"},
{"arkaplan":"#0000ff","yazi":"#fff"},
{"arkaplan":"#fe01fc","yazi":"#000"},
{"arkaplan":"#999","yazi":"#000"},
{"arkaplan":"#fff","yazi":"#000"}
];
 
var toleransRenk=[
{"arkaplan":"#9b3300","yazi":"#fff"},
{"arkaplan":"#ff0000","yazi":"#fff"},
{"arkaplan":"#ffcc01","yazi":"#000"},
{"arkaplan":"#969a99","yazi":"#000"}
];
 
katsayi1.onclick=function(){
this.style.backgroundColor=renk[this.selectedIndex].arkaplan;
this.style.color=renk[this.selectedIndex].yazi;
 
hesapla();
}
 
katsayi2.onclick=function(){
this.style.backgroundColor=renk[this.selectedIndex].arkaplan;
this.style.color=renk[this.selectedIndex].yazi;
 
hesapla();
}
 
katsayi3.onclick=function(){
this.style.backgroundColor=renk[this.selectedIndex].arkaplan;
this.style.color=renk[this.selectedIndex].yazi;
 
hesapla();
}
 
birim.onclick=function(){
 
hesapla();
}
 
tolerans.onclick=function(){
this.style.backgroundColor=toleransRenk[this.selectedIndex].arkaplan;
this.style.color=toleransRenk[this.selectedIndex].yazi;
 
hesapla();
}
 
function hesapla(){
var birlestir=Number(katsayi1.value+katsayi2.value);
var sonuc=(birlestir*Math.pow(10,katsayi3.value))/birim.value;
 
var gosterge=birim.options[birim.selectedIndex].text;
var enaz=sonuc*(100-Number(tolerans.value))/100;
var encok=sonuc*(100+Number(tolerans.value))/100;
goster.innerHTML="<h3>Direnç Değeri:"+sonuc+gosterge+"</h3>"+
"<h3>Tölerans:%"+tolerans.value+"</h3>"+
"<h3>Direnç Aralığı: "+enaz+gosterge+" - "+encok+gosterge+"</h3>";
 
}

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }