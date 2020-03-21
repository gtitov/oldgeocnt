//##################################################################################################
var OpenedSubMenu=null;
function grcShowSubMenu(MenuIndex){ // MenuIndex Õ– ≈ƒ’Ã’∆ÿ !!!
  grcHideSubMenu();
  OpenedSubMenu=document.layers?document.layers["subMenu"+MenuIndex]:
                document.all?document.all["subMenu"+MenuIndex].style:
                document.getElementById?document.getElementById("subMenu"+MenuIndex).style:
                null;
  if(OpenedSubMenu){ 
    if(document.layers){ 
      OpenedSubMenu.pageY=document.layers["content"].pageY+16;
      OpenedSubMenu.pageX=document.layers["content"].layers["menu"+MenuIndex].pageX;
      OpenedSubMenu.width=200;
    }
    grcShowObject(OpenedSubMenu);
  }
}

function grcHideSubMenu(){ 
  if(OpenedSubMenu){ grcHideObject(OpenedSubMenu); OpenedSubMenu=null; }
}

var arMainMenu;
function grcMainMenu_Begin(){ arMainMenu=new Array(); }
function grcMainMenu_SubMenu_Begin(Caption){
  if(grcMainMenu_SubMenu_Begin.arguments.length==2) 
    Caption+="|"+grcMainMenu_SubMenu_Begin.arguments[1];
  arMainMenu[arMainMenu.length]=new Array(); 
  arMainMenu[arMainMenu.length-1][arMainMenu[arMainMenu.length-1].length]=Caption;
}
function grcMainMenu_SubMenu_AddItem(Caption,Link){
  arMainMenu[arMainMenu.length-1][arMainMenu[arMainMenu.length-1].length]=Caption+"|"+Link;
}

function _GetSubItemHREF(item){
  for(i=0; i<document.links.length; i++)
    if(document.links[i].id==item.id){
      return document.links[i].href;
    }
  return null;
}

function grcItemSelected(item){
  item.className="selItem";
  href=_GetSubItemHREF(item);
  if(href) window.status=href;
}
function grcItemUnselected(item){
  item.className="unselItem";
}
function grcItemClick(item){
  href=_GetSubItemHREF(item);
  if(href) document.location.href=href;
}
function grcMainMenu_End(){ 
  if(document.layers){ grcMenu_EndNS4(); return; }
  document.write(
    '<table width=100% height=20 border=0 cellpadding=0 cellspacing=0>'+
	'<tr id="MenuRow"><td><div id="content">'
  );
  for(i=0; i<arMainMenu.length; i++){
    n=arMainMenu[i].length; ii=i+1;
    s=arMainMenu[i][0]; p=s.lastIndexOf("|"); 
    if(p!=-1){ Caption=s.substr(0,p); Link=s.substr(p+1); }
    else{ Caption=s; Link=""; }
    c=(Link=="")?Caption:'<a href="'+Link+'">'+Caption+'</a>';
    if(n==1){
      document.write('<span id="menu'+ii+'"><div class="menu" id="menuTitle'+ii+'" onmouseover="grcHideSubMenu()">'+c+'</div></span>');
    }
    else{
      document.write('<span id="menu'+ii+'"><div class="menu" id="menuTitle'+ii+'" onmouseover="grcShowSubMenu('+ii+')" onmouseout="grcHideSubMenu()">'+c+'</div>'+
		                '<div class="sub" id="subMenu'+ii+'" onmouseover="grcShowSubMenu('+ii+')" onmouseout="grcHideSubMenu()">'+
		                '<table class="subBody" width=auto border=0 cellpadding=0 cellspacing=0>');
      for(j=1; j<n; j++){
         s=arMainMenu[i][j]; p=s.lastIndexOf("|"); 
         if(p!=-1){ Caption=s.substr(0,p); Link=s.substr(p+1); }
         else{ Caption=s; Link="javascript://"; }
         document.write('<tr id="'+Caption+'" class="unselItem" onmouseover="grcItemSelected(this)" onmouseout="grcItemUnselected(this)" onclick="grcItemClick(this)"><td width=100%><a id="'+Caption+'" href="'+Link+'"><nobr>'+Caption+'</nobr></a></td></tr>');
      }
      document.write('</table></div></span>');
    }
  }
  document.write('</td></div></tr></table>');
}

//#################################################################################################
// ﬂ…œ’Œ–ÿ ƒ ⁄ Netscape 4.x
function grcHandleMouseMoveNS4(e){
  if(e.target==document){ 
    grcHideSubMenu();
  }
  window.status=e.target;
  return true;
}
function grcHandleMouseDownNS4(e){
  if(e.target.id=="item")
    alert("TEST!!!");
}

function grcMenu_EndNS4(){
  document.write(
    '<table width=100% height=20 border=0 cellpadding=0 cellspacing=0>'+
	'<tr id="MenuRow"><td><div id="content">'
  );
  for(i=1; i<=arMainMenu.length; i++){ // “ÕœÀ’œÕ¡ﬁÃ’≈ ÕﬂÃÕ¡ÃÕ÷Õ À≈Ã◊
    s=arMainMenu[i-1][0]; p=s.lastIndexOf("|"); 
    if(p!=-1){ Caption=s.substr(0,p); Link=s.substr(p+1); }
    else{ Caption=s; Link="javascript://"; }
    document.write('<span id="menu'+i+'"><div class="menu" id="menuTitle'+i+'"><a href="'+Link+'" onmouseover="grcShowSubMenu('+i+')">'+Caption+'</a></div></span>');
  }
  document.write('</div></td></tr></table>');
  for(i=1; i<=arMainMenu.length; i++){ // “ÕœÀ’œÕ¡ﬁÃ’≈ ¡ﬂ≈” ŒÕƒ À≈Ã◊
    document.write('<div class="subNS4" id="subMenu'+i+'"><table width=200 border=0 cellpadding=0 cellspacing=0>');
    for(j=1; j<arMainMenu[i-1].length; j++){
       s=arMainMenu[i-1][j]; p=s.lastIndexOf("|"); 
       if(p!=-1){ Caption=s.substr(0,p); Link=s.substr(p+1); }
       else{ Caption=s; Link="javascript://"; }
       document.write('<tr><td><a href="'+Link+'"><nobr>'+Caption+'</nobr></a></td></tr>');
    }
    document.write('</table></div>');
  }
  document.captureEvents(Event.MOUSEMOVE | Event.MOUSEDOWN);
  document.onmousemove=grcHandleMouseMoveNS4;
  //document.onmousedown=grcHandleMouseDownNS4;
}
//##############################################################################