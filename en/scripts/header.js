var GRC_Title="GIS Research Centre<br>Institute of Geography of the Russian Academy of Sciences";
var GRC_Address="GIS Research Centre of the Institute of Geography of the Russian Academy of Sciences<br>"+
    "119017, Russia, Moscow, Staromonetny per.,29<br>"+
    "phones:(095)&nbsp;959-0017,&nbsp;&nbsp;(095)&nbsp230-8170<br>"+
    "fax:(095)&nbsp;959-0017";
var GRC_Footer_ToTop="To the begining of this page";
var GRC_Header_ToMainPage="To the main page";
//##################################################################################################
// ÕﬂÃÕ¡ÃÕ≈ À≈Ã◊ ﬂ–œﬁÃ’∆ÿ
function grcMainMenu_Create(){
  grcMainMenu_Begin();
    grcMainMenu_SubMenu_Begin("Main","index.html");
    grcMainMenu_SubMenu_Begin("GIS Areas","appl.html");
    grcMainMenu_SubMenu_Begin("Software","soft.html");
      grcMainMenu_SubMenu_AddItem("GeoGraphô GIS","gg20.html");
      grcMainMenu_SubMenu_AddItem("GeoConstructorô","gc20.html");
      grcMainMenu_SubMenu_AddItem("GeoConstructorô Web","gc_web.html");
      grcMainMenu_SubMenu_AddItem("GeoDrawô","gdraw.html");
      grcMainMenu_SubMenu_AddItem("GeoGraphô 1.5","ggraph.html");
    grcMainMenu_SubMenu_Begin("Services","serv.html");
    grcMainMenu_SubMenu_Begin("Projects and papers","projects.html");
      grcMainMenu_SubMenu_AddItem("Small bodies projections ","prjSmallBody.html");
    grcMainMenu_SubMenu_Begin("Maps","maps.html");
  grcMainMenu_End();
}
//##################################################################################################
