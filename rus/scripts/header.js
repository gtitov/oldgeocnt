var GRC_Title="����� ����������������� ������������<br>��������� ��������� ���";
var GRC_Address="����� ����������������� ������������ ��������� ��������� ���<br>"+
    "119017, ������, ������������� ���., 29<br>"+
    "��������:(495)&nbsp;959-0017,&nbsp;&nbsp;(495)&nbsp;230-8170<br>"+
    "����:(495)&nbsp;959-0017";
var GRC_Footer_ToTop="� ������ ��������";
var GRC_Header_ToMainPage="�� ��������� ��������";
//##################################################################################################
// �������� ���� ��������
function grcMainMenu_Create(){
  grcMainMenu_Begin();
    grcMainMenu_SubMenu_Begin("�������","index.html");
    grcMainMenu_SubMenu_Begin("�������");
      grcMainMenu_SubMenu_AddItem("�� ���� ���","news2007.html");
//      grcMainMenu_SubMenu_AddItem("�� ���� ���","news.cgi");
      grcMainMenu_SubMenu_AddItem("�� ������� ���","news.html");
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
	   grcMainMenu_SubMenu_AddItem("�������� ���� ������","prjrus.html");
	   grcMainMenu_SubMenu_AddItem("��������� ���������� ��������","prjtool.html");		
	   grcMainMenu_SubMenu_AddItem("�������� ����� ���","prjastr.html");		
	grcMainMenu_SubMenu_Begin("��������");
	   grcMainMenu_SubMenu_AddItem("��� ��� �����","kontakt.html");
	   grcMainMenu_SubMenu_AddItem("������������ � ��������","polz.html");
  grcMainMenu_End();
}
//##################################################################################################
