function ShowTitle(id){
  p=grcGetObjectByID(id); if(!p) return;
  if(g_Browser=="MSIE") p.filters[0].Apply();
  grcShowObject(grcGetObjectStyleByID(id));
  if(g_Browser=="MSIE") p.filters[0].Play();
}
var Hiddens=new Array("GLOBUS","TITLE_FLAG_RUS","TITLE_FLAG_EN","TITLE_FLAG_ESP","TITLE_RUS","TITLE_EN","TITLE_ESP","FOOTER");
var iHidden=0;
var iInterval=700;

function ShowHiddensNoEffects(){
  for(i=0; i<Hiddens.length; i++)
     ShowTitle(Hiddens[i]);
}
function ShowHiddens(){
  if(g_Browser!="MSIE") return ShowHiddensNoEffects();
  if(iHidden==0){
    gs=grcGetObjectStyleByID("idGRC_CELL");
    gs.width="1";
    gs=grcGetObjectStyleByID("idGLOBUS_CELL");
    gs.textAlign="right"; 
    w=screen.width-screen.availWidth/3;
    w-=w%10;
    gs.width=w
  }
  if(iHidden==1){
    gs=grcGetObjectStyleByID("idGLOBUS_CELL");
    w=parseFloat(gs.width); w-=10;
    if(w<=359){
    iInterval=700;
    //gs.textAlign="left"; 
    gs.width="350";
    gs=grcGetObjectStyleByID("idGRC_CELL");
    gs.width="auto";
    ShowTitle(Hiddens[iHidden++]);
    ShowTitle(Hiddens[iHidden++]);
    ShowTitle(Hiddens[iHidden++]);
    }
    else{ iInterval=20; gs.width=w; }
  }
  else ShowTitle(Hiddens[iHidden++]);
  if(iHidden<Hiddens.length) setTimeout("ShowHiddens()",iInterval);
}

function BuildQuickLinks(){
  if(g_Browser=="MSIE")
    document.write(
     '<tr><td colspan="2">'+
     '<a href="rus"><img SRC="images/go2rus.gif" border="0"></a>&nbsp;'+
     '<a href="en"><img SRC="images/go2en.gif" border="0"></a>&nbsp;'+
     '<a href="esp"><img SRC="images/go2esp.gif" border="0"></a>'+
     '</td></tr>');
}