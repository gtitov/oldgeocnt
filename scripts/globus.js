var g_Globus;

// мноедейелуе лмкеоч ичдоч жймюяъч 
// а  цчауъукмъпу мп пеияшежм аоекелу
function GLOBUS_getCurrentCadr(){ 
  d=new Date();   
  tzo=d.getTimezoneOffset()/60; // ъкешелуе аоекеллмх цмль а бчъчс
  hg=d.getHours()+tzo+d.getMinutes()/60; // пеияшух бчъ нм Жоулаубя
  step=24/32; // 0.75 бчъч уйу 45 кул
  ret=Math.round(32-(hg/step));
  if(ret>31) ret=0;
  if(ret<10) ret="0"+ret;
  return ret;
}

// ъмцдчлуе ичопулиу ъ жймюяъмк
function GLOBUS_Create(){
  document.write('<IMG id="GLOBUS" border=0 width=312 height=312 src="images/globe/GLOBE'+
                  GLOBUS_getCurrentCadr()+'.jpg">'); 
}

// улуфучйуцчфуз жймюяъч у пчхкеоч
function GLOBUS_Init(){
  g_Globus=document.layers?document.GLOBUS:
           document.all?document.all["GLOBUS"]:
           document.getElementById?document.getElementById("GLOBUS"):
           null;
  if(!g_Globus) return;
  setTimeout("GLOBUS_OnTimer()",1000);
}

// имооеифуз ичдоч жймюяъч нм пчхкеоя
function GLOBUS_OnTimer(){ 
  g_Globus.src="images/globe/GLOBE"+GLOBUS_getCurrentCadr()+".jpg";
  setTimeout("GLOBUS_OnTimer()",1000);
}
