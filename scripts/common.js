// þÀÏÅÁÕÞÐÑÏÞ ÀÏÞÑÃÅÏÞ 
// ËÍÔÅÐ ÎÏÕÌÕËÞÐÝ ßÊÅÄÑ×ÛÕÅ ÃÌÞÂÅÌÕÚ:
//    NS-Netscape, 
//    MSIE - Microsoft Internet Explorer
//    Opera - Opera
var g_Browser; 

// HÍËÅÏ ÁÅÏßÕÕ ÀÏÞÑÃÅÏÞ 
// float-ÂÕßÊÍ, ÎÍÙÐÍËÑ ÁÍÃËÍÔÌØ ÍÎÅÏÞÆÕÕ ßÏÞÁÌÅÌÕÚ, ÌÞÎÏ. g_Version>4 Õ Ð.Ä.
var g_Version; 

function GoToBadBrowserPage(){
  document.location.replace("/index0.html");
}

if(!grcCheckBrowser()) GoToBadBrowserPage();
else if(g_Browser=="NS" && g_Version<4) GoToBadBrowserPage();
else if(g_Browser=="MSIE" && g_Version<4) GoToBadBrowserPage();
else if(g_Browser=="Opera" && g_Version<7) GoToBadBrowserPage();

// õÌÕÆÕÞÊÕÃÞÆÕÚ ÖÊÍÀÞÊÝÌØÓ ßßØÊÍÉ ÎÍßÊÅ ÃÞÖÏÑÃÉÕ ßÐÏÞÌÕÆØ
function grcPageInit(){
  if(document.layers){ menu=document.layers["content"]; }
  else if(document.all){ menu=document.all.content; }
  else if(document.getElementById){ menu=document.getElementById("content"); }
}

// íÎÏÅÄÅÊÅÌÕÅ ÀÏÞÑÃÅÏÞ ÌÞ ÉÊÕÅÌÐÅ
function grcCheckBrowser(){
  g_Version=0;
  sUA=navigator.userAgent;
  if(sUA.indexOf("Opera")!=-1) 
    return _GetVersion_Opera(sUA);
  else if(sUA.indexOf("MSIE")!=-1) 
    return _GetVersion_MSIE(sUA);
  else if(sUA.indexOf("Netscape")!=-1 && sUA.indexOf("Gecko")!=-1 && sUA.indexOf("Mozilla")==0) 
    return _GetVersion_NS67(sUA);
  else if(sUA.indexOf("Mozilla")==0) 
    return _GetVersion_NS(sUA);
  else return false;
}

function _GetVersion_Opera(sUA)
{
  g_Browser="Opera"; 
  i=sUA.indexOf("Opera");
  if(i==0){ // Opera ÁØÄÞÅÐ ßÅÀÚ ÃÞ ßÅÀÚ
    i=sUA.indexOf("/"); ii=sUA.indexOf(" ");
    if(i!=-1 && ii!=-1) ver=sUA.substring(i+1,ii); else ver="0";
    g_Version=parseFloat(ver);
  }
  else{ // Opera ÁØÄÞÅÐ ßÅÀÚ ÃÞ ÄÏÑÖÍÖÍ
    ver=sUA.substring(i,sUA.length);
    i=ver.indexOf(" "); if(i==-1) return;
    ver=ver.substring(i+1,ver.length);
    i=ver.indexOf(" "); if(i==-1) return;
    ver=ver.substring(0,i);
    g_Version=parseFloat(ver);
  }
  return true;
}

function _GetVersion_MSIE(sUA)
{
  g_Browser="MSIE"; 
  i=sUA.indexOf("MSIE");
  ver=sUA.substring(i,sUA.length);
  i=ver.indexOf(" "); ii=ver.indexOf(";");
  if(i!=-1 && ii!=-1) ver=ver.substring(i+1,ii); else ver="0";
  g_Version=parseFloat(ver);
  return true;
}

function _GetVersion_NS67(sUA)
{
  g_Browser="NS"; 
  i=sUA.indexOf("Netscape"); 
  ver=sUA.substring(i,sUA.length);
  i=ver.indexOf("/"); if(i==-1) return;
  ver=ver.substring(i+1,ver.length);
  i=ver.indexOf(" "); if(i==-1) return;
  ver=ver.substring(0,i);
  g_Version=parseFloat(ver);
  return true;
}

function _GetVersion_NS(sUA)
{
  g_Browser="NS";
  i=sUA.indexOf("/"); ii=sUA.indexOf(" ");
  if(i!=-1 && ii!=-1) ver=sUA.substring(i+1,ii); else ver="0";
  g_Version=parseFloat(ver);
  return true;
}

//#####################################################################################
// 
function grcGetObjectByID(id){
  return document.layers?document.layers[id]:
         document.all?document.all[id]:
         document.getElementById?document.getElementById(id):
         null;
}
function grcGetObjectStyleByID(id){
  obj=grcGetObjectByID(id); if(!obj) return null;
  return (document.all || document.getElementById)?obj.style:obj;
}
function grcShowObject(obj){ obj.visibility=document.layers?"show":"visible"; }
function grcHideObject(obj){ obj.visibility=document.layers?"hide":"hidden"; }
