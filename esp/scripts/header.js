var GRC_Title="Centro de Investigacion en SIG<br>del Instituto de Geografia de la Academia Rusa de Ciencias";
var GRC_Address="Centro de Investigacion en SIG del Instituto de Geografia de la Academia Rusa de Ciencias<br>"+
    "109107, Rusia, Moscu, Staromonetny por. ,29<br>"+
    "telefonos:&nbsp;7&nbsp;(095)&nbsp;959-0017, 7&nbsp;(095)&nbsp;230-8170;<br>"+
    "fax:&nbsp;7&nbsp;(095)&nbsp;959-0017";
var GRC_Footer_ToTop="To the Beginning of This Page";
var GRC_Header_ToMainPage="To the Start Page";
//##################################################################################################
// �������� ���� ��������
function grcMainMenu_Create(){
  grcMainMenu_Begin();
    grcMainMenu_SubMenu_Begin("�������","index.html");
    grcMainMenu_SubMenu_Begin("�������");
      grcMainMenu_SubMenu_AddItem("�� ���� ���","news.html");
      grcMainMenu_SubMenu_AddItem("����� ��������","news_old.html");
    grcMainMenu_SubMenu_Begin("�������� � ������");
	   grcMainMenu_SubMenu_AddItem("����������� �����������","soft.html");
	   grcMainMenu_SubMenu_AddItem("��������������� ������","supp.html");
	   grcMainMenu_SubMenu_AddItem("�����","maps.html");
	   grcMainMenu_SubMenu_AddItem("������","snimki.html");
	   grcMainMenu_SubMenu_AddItem("��������","obuchen.html");
	   grcMainMenu_SubMenu_AddItem("����","price.html");
    grcMainMenu_SubMenu_Begin("����������� ���������");
	   grcMainMenu_SubMenu_AddItem("���������� ������","newsupp.html");
	   grcMainMenu_SubMenu_AddItem("���������� � ������ ������ HASP","hasp.html");
	   grcMainMenu_SubMenu_AddItem("������ �� �������","quest.html");
    grcMainMenu_SubMenu_Begin("������� � ����������");
	   grcMainMenu_SubMenu_AddItem("�������","project.html");
	   grcMainMenu_SubMenu_AddItem("������ � ������","articls.html");
	grcMainMenu_SubMenu_Begin("��������");
	   grcMainMenu_SubMenu_AddItem("��� ��� �����","kontakt.html");
	   grcMainMenu_SubMenu_AddItem("������������ � ��������","polz.html");
  grcMainMenu_End();
}
//##################################################################################################
