
<HTML>
<HEAD>
<TITLE></TITLE>
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
.sel{
border: 0px;
}
td{
border: 1px outset Black;
}
.inputTxt{
border: 1px Black;
}
</style>
</HEAD>

<BODY bgcolor="#D0D0C0" leftmargin="0" topmargin="10" marginheight="0" marginwidth="0" text="#00000"><center><H2 id="headprj">Conformal Conic projection<br> calculation of parameters</H2></center>
<form name="mainForm" id="mainForm" method="post" ENCTYPE="multipart/form-data">
<table cellspacing="0" id="tabStyle" cellpadding="0" border="0">
<tr>
	<td colspan="2" align="right"><a href="projPage_rus.cgi">Русский</a> <a href="javascript: //help;" onclick="javascript: openHelp('eng');">Help</a></td>
</tr>
<tr>
    <td><img src="images/pic.gif"></td>
    <td valign="top">
<table cellspacing="0" cellpadding="0" border="0">
<tr>
    <td colspan="3" align="right" bgcolor="#E0E1C8">Conformal Conic<input type="radio" name="projname" value="2" checked onclick="javascript: changeprj(2,0);"><br>Equidistant Conic<input type="radio" name="projname" value="1"  onclick="javascript: changeprj(1,0);"><br>Equal-Area Conic<input type="radio" name="projname" value="42"  onclick="javascript: changeprj(42,0);"></td>
</tr>
<tr>
    <td colspan="3" align="right">File: <input type="file" name="FILE1"><input type="submit" value="Upload!"></td>
</tr>
<tr>
    <td>&nbsp;</td>
    <td align="center">x</td>
    <td align="center">y</td>
</tr>
<tr>
    <td>point 1</td>
    <td><input name="p11" type="text" value=></td>
    <td><input name="p12" type="text" value=></td>
</tr>
<tr>
    <td>point 2</td>
    <td><input name="p21" type="text" value=></td>
    <td><input name="p22" type="text" value=></td>
</tr>
<tr>
    <td>point 3</td>
    <td><input name="p31" type="text" value=></td>
    <td><input name="p32" type="text" value=></td>
</tr>
<tr>
    <td>point 4</td>
    <td><input name="p41" type="text" value=></td>
    <td><input name="p42" type="text" value=></td>
</tr>
<tr>
	<td colspan=2>North parallel latitude</td>
	<TD><input name="nlat" type="text" value=></TD>
</tr>
<tr>
	<td colspan=2>South parallel latitude</td>
	<TD><input name="slat" type="text" value=></TD>
</tr>
<tr>
	<td colspan=2>West meridian longitude</td>
	<TD><input name="wlon" type="text" value=></TD>
</tr>
<tr>
	<td colspan=2>Eeast meridian longitude</td>
	<TD><input name="elon" type="text" value=></TD>
</tr>
<tr>
	<td colspan=2>Meters per unit</td>
	<TD><input name="m" type="text" class="act"  value=></TD>
</tr>
<tr>
	<td colspan="3" align="right"><table width="100%" bgcolor="#E0E1C8"><tr><td class="sel" align="right">Earth model: <select name="nom2" onchange="javascript: changeModel(mainForm.nom2.options[mainForm.nom2.selectedIndex].value);">
<option value='2' selected>sphere</option><option value='1' >ellipsoid</option>
</select></td><td class="sel" align="right">radius: <input type="text" name="rs" class='' size="7" value='6371116' ></td></tr><tr><td class="sel" align="right">equatorial radius: <input type="text" class='dis' name="a" size="7"  value='6378245' readOnly></td><td class="sel" align="right">polar radius: <input type="text" class='dis' name="b" size="7"  value='6356863' readOnly></td></tr></table></td>
</tr>
<tr>
	<td class="sel" colspan=3 align="center"><input type="submit" value="start"></TD>
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
<p align="center">Algorithm: M. Fleis, program: M. Borisov</p>
</BODY></HTML>
