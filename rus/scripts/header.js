var GRC_Title="Центр геоинформационных исследований<br>Института Географии РАН";
var GRC_Address="Центр Геоинформационных Исследований Института Географии РАН<br>"+
    "119017, Москва, Старомонетный пер., 29<br>"+
    "телефоны:(495)&nbsp;959-0017,&nbsp;&nbsp;(495)&nbsp;230-8170<br>"+
    "факс:(495)&nbsp;959-0017";
var GRC_Footer_ToTop="К началу страницы";
var GRC_Header_ToMainPage="На заглавную страницу";
//##################################################################################################
// основное меню страницы
function grcMainMenu_Create(){
  grcMainMenu_Begin();
    grcMainMenu_SubMenu_Begin("Главная","index.html");
    grcMainMenu_SubMenu_Begin("Новости");
      grcMainMenu_SubMenu_AddItem("За этот год","news2007.html");
//      grcMainMenu_SubMenu_AddItem("За этот год","news.cgi");
      grcMainMenu_SubMenu_AddItem("За прошлый год","news.html");
      grcMainMenu_SubMenu_AddItem("Архив новостей","news_old.html");
    grcMainMenu_SubMenu_Begin("Продукты и услуги");
	   grcMainMenu_SubMenu_AddItem("Программное обеспечение","soft.html");
	   grcMainMenu_SubMenu_AddItem("Ознакомительные версии","supp.html");
	   grcMainMenu_SubMenu_AddItem("Карты","maps.html");
	   grcMainMenu_SubMenu_AddItem("Снимки","snimki.html");
	   grcMainMenu_SubMenu_AddItem("Обучение","obuchen.html");
	   grcMainMenu_SubMenu_AddItem("Цены","price.html");
    grcMainMenu_SubMenu_Begin("Техническая поддержка");
	   grcMainMenu_SubMenu_AddItem("Обновление версий","newsupp.html");
	   grcMainMenu_SubMenu_AddItem("Информация о ключах защиты HASP","hasp.html");
	   grcMainMenu_SubMenu_AddItem("Ответы на вопросы","quest.html");
    grcMainMenu_SubMenu_Begin("Проекты и публикации");
	   grcMainMenu_SubMenu_AddItem("Проекты","project.html");
	   grcMainMenu_SubMenu_AddItem("Статьи и обзоры","articls.html");
	   grcMainMenu_SubMenu_AddItem("Проекции карт России","prjrus.html");
	   grcMainMenu_SubMenu_AddItem("Параметры конической проекции","prjtool.html");		
	   grcMainMenu_SubMenu_AddItem("Проекции малых тел","prjastr.html");		
	grcMainMenu_SubMenu_Begin("Контакты");
	   grcMainMenu_SubMenu_AddItem("Как нас найти","kontakt.html");
	   grcMainMenu_SubMenu_AddItem("Пользователи и партнеры","polz.html");
  grcMainMenu_End();
}
//##################################################################################################
