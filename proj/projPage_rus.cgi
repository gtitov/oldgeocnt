
<HTML>
<HEAD>
<TITLE>Параметры конической проекции</TITLE>
<META http-equiv="content-type" content="text/html;charset=windows-1251">
<META NAME="Organization" content="GIS Research Centre of the Institute of Geography of the Russian Academy of Sciences">
<META NAME="Author" content="Michael Borisov">
<SCRIPT LANGUAGE="Javascript" src="scriptClient.js"></SCRIPT>
<style>
.dis{ background: Silver; }
.act{ background: White; }
.tabStyle{
border: 1px outset Black;
}
td{
border: 1px outset Black;
}
.sel{
border: 0px;
}
.inputTxt{
border: 1px Black;
}
</style>
</HEAD>

<BODY bgcolor="#D0D0C0" leftmargin="0" topmargin="10" marginheight="0" marginwidth="0" text="#00000"><center><H2 id="headprj">Коническая Равновеликая проекция<br> вычисление параметров</H2></center>
<form name="mainForm" id="mainForm" method="post" ENCTYPE="multipart/form-data">
<table cellspacing="0" id="tabStyle" cellpadding="0" border="0">
<tr>
    <td colspan="2" align="right"><a href="projPage.cgi">English</a> <a href="javascript: //help;" onclick="javascript: openHelp('rus');">Помощь</a></td>
</tr>
<tr>
    <td><img src="images/pic_rus.gif"></td>
    <td valign="top">
<table cellspacing="0" cellpadding="0" border="0">
<tr>
    <td colspan="3" align="right" bgcolor="#E0E1C8">Коническая равноугольная<input type="radio" name="projname" value="2"  onclick="javascript: changeprj(2,1);"><br>Коническая равнопромежуточная<input type="radio" name="projname" value="1"  onclick="javascript: changeprj(1,1);"><br>Коническая Равновеликая<input type="radio" name="projname" value="42" checked onclick="javascript: changeprj(42,1);"></td>
</tr>
<tr>
    <td colspan="3" align="right">Файл: <input type="file" name="FILE1"><input type="submit" value="Загрузить"></td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td align="center">x</td>
    <td align="center">y</td>
</tr>
<tr>
    <td>точка 1</td>
    <td align="right"><input name="p11" type="text" value=></td>
    <td align="right"><input name="p12" type="text" value=></td>
</tr>
<tr>
    <td>точка 2</td>
    <td align="right"><input name="p21" type="text" value=></td>
    <td align="right"><input name="p22" type="text" value=></td>
</tr>
<tr>
    <td>точка 3</td>
    <td align="right"><input name="p31" type="text" value=></td>
    <td align="right"><input name="p32" type="text" value=></td>
</tr>
<tr>
    <td>точка 4</td>
    <td align="right"><input name="p41" type="text" value=></td>
    <td align="right"><input name="p42" type="text" value=></td>
</tr>
<tr>
	<td colspan=2>широта северной параллели</td>
	<TD align="right"><input name="nlat" type="text" value=></TD>
</tr>
<tr>
	<td colspan=2>широта южной параллели</td>
	<TD align="right"><input name="slat" type="text" value=></TD>
</tr>
<tr>
	<td colspan=2>долгота западного меридиана</td>
	<TD align="right"><input name="wlon" type="text" value=></TD>
</tr>
<tr>
	<td colspan=2>долгота восточного меридиана</td>
	<TD align="right"><input name="elon" type="text" value=></TD>
</tr>
<tr>
	<td colspan=2>Метров в единице</td>
	<TD align="right"><input name="m" type="text" class="act"  value=></TD>
</tr>
<tr>
	<td colspan="3" align="right"><table width="100%" bgcolor="#E0E1C8"><tr><td align="right" class="sel">Модель Земли: <select name="nom2" onchange="javascript: changeModel(mainForm.nom2.options[mainForm.nom2.selectedIndex].value);">
<option value='2' selected>Шар</option><option value='1' >Эллипсоид</option>
</select></td><td align="right" class="sel">радиус: <input type="text" name="rs" class='' size="7" value='6371116' ></td></tr><tr><td align="right" class="sel">большая полуось: <input type="text" class='dis' name="a" size="7"  value='6378245' readOnly></td><td align="right" class="sel">малая полуось: <input type="text" class='dis' name="b" size="7"  value='6356863' readOnly></td></tr></table></td>
</tr>
<tr>
	<TD colspan=3 align="center" class="sel"><input type="submit" value="start"></TD>
</tr>
</table>
</td>
</tr>
<tr>
	<td colspan="2">
<table cellspacing="0" cellpadding="0">
</table>
	</td>
</tr>
</table>
</form>
<p align="center">Алгоритм: М. Флейс, программа: М. Борисов</p>
</BODY></HTML>
