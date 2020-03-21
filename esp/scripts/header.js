var GRC_Title="Centro de Investigacion en SIG<br>del Instituto de Geografia de la Academia Rusa de Ciencias";
var GRC_Address="Centro de Investigacion en SIG del Instituto de Geografia de la Academia Rusa de Ciencias<br>"+
    "109107, Rusia, Moscu, Staromonetny por. ,29<br>"+
    "telefonos:&nbsp;7&nbsp;(095)&nbsp;959-0017, 7&nbsp;(095)&nbsp;230-8170;<br>"+
    "fax:&nbsp;7&nbsp;(095)&nbsp;959-0017";
var GRC_Footer_ToTop="To the Beginning of This Page";
var GRC_Header_ToMainPage="To the Start Page";
//##################################################################################################
// мълмалме келв ъпочлуфь
function grcMainMenu_Create(){
  grcMainMenu_Begin();
    grcMainMenu_SubMenu_Begin("Жйчалчз","index.html");
    grcMainMenu_SubMenu_Begin("Лмамъпу");
      grcMainMenu_SubMenu_AddItem("Цч ыпмп жмд","news.html");
      grcMainMenu_SubMenu_AddItem("Чосуа лмамъпех","news_old.html");
    grcMainMenu_SubMenu_Begin("Номдяипь у яъйяжу");
	   grcMainMenu_SubMenu_AddItem("Номжочкклме мюеънебелуе","soft.html");
	   grcMainMenu_SubMenu_AddItem("Мцлчимкупейщлье аеоъуу","supp.html");
	   grcMainMenu_SubMenu_AddItem("Ичопь","maps.html");
	   grcMainMenu_SubMenu_AddItem("Ълукиу","snimki.html");
	   grcMainMenu_SubMenu_AddItem("Мюябелуе","obuchen.html");
	   grcMainMenu_SubMenu_AddItem("Фель","price.html");
    grcMainMenu_SubMenu_Begin("Песлубеъичз нмддеотич");
	   grcMainMenu_SubMenu_AddItem("Мюлмайелуе аеоъух","newsupp.html");
	   grcMainMenu_SubMenu_AddItem("Улрмокчфуз м ийвбчс цчшупь HASP","hasp.html");
	   grcMainMenu_SubMenu_AddItem("Мпаепь лч амномъь","quest.html");
    grcMainMenu_SubMenu_Begin("Номеипь у няюйуичфуу");
	   grcMainMenu_SubMenu_AddItem("Номеипь","project.html");
	   grcMainMenu_SubMenu_AddItem("Ъпчпщу у мюцмоь","articls.html");
	grcMainMenu_SubMenu_Begin("Имлпчипь");
	   grcMainMenu_SubMenu_AddItem("Ичи лчъ лчхпу","kontakt.html");
	   grcMainMenu_SubMenu_AddItem("Нмйщцмачпейу у нчоплеоь","polz.html");
  grcMainMenu_End();
}
//##################################################################################################
