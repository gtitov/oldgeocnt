var g_Globus;

// ����������� ������ ����� ������� 
// �  ����������� �� �������� �������
function GLOBUS_getCurrentCadr(){ 
  d=new Date();   
  tzo=d.getTimezoneOffset()/60; // �������� ��������� ���� � �����
  hg=d.getHours()+tzo+d.getMinutes()/60; // ������� ��� �� ��������
  step=24/32; // 0.75 ���� ��� 45 ���
  ret=Math.round(32-(hg/step));
  if(ret>31) ret=0;
  if(ret<10) ret="0"+ret;
  return ret;
}

// �������� �������� � ��������
function GLOBUS_Create(){
  document.write('<IMG id="GLOBUS" border=0 width=312 height=312 src="images/globe/GLOBE'+
                  GLOBUS_getCurrentCadr()+'.jpg">'); 
}

// ������������� ������� � �������
function GLOBUS_Init(){
  g_Globus=document.layers?document.GLOBUS:
           document.all?document.all["GLOBUS"]:
           document.getElementById?document.getElementById("GLOBUS"):
           null;
  if(!g_Globus) return;
  setTimeout("GLOBUS_OnTimer()",1000);
}

// ��������� ����� ������� �� �������
function GLOBUS_OnTimer(){ 
  g_Globus.src="images/globe/GLOBE"+GLOBUS_getCurrentCadr()+".jpg";
  setTimeout("GLOBUS_OnTimer()",1000);
}
