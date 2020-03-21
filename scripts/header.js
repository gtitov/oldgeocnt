//##################################################
function grcMainPageHeader(){
  document.write(
    '<a name="up"></a>'+
    '<table width="100%" height="65" border="0" bgcolor="#0033CC" cellpadding="0" cellspacing="0" >'+
    '<tr>'+
      '<td width="120" height="90"><a href=".."><img src="../images/logo.gif" width="120" height="90" border="0" title="'+GRC_Header_ToMainPage+'" alt="'+GRC_Header_ToMainPage+'"></a></td>'+
      '<td><p class="PageTitleMain">'+GRC_Title+'</p></td>'+
      '<td width="40%" background="../images/gradient.jpg">&nbsp;</td>'+
    '</tr>'+
    '</table>'
  );
}
//##################################################
function grcPageHeader(Title){
  document.write(
    '<a name="up"></a>'+
    '<table width="100%" height="65" border="0" bgcolor="#0033CC" cellpadding="0" cellspacing="0">'+
    '<tr>'+
      '<td width="120px"><a href=".."><img src="../images/logo.gif" width="120" height="90" border="0" title="'+GRC_Header_ToMainPage+'" alt="'+GRC_Header_ToMainPage+'"></a></td>'+
      '<td width="50%"><nobr>'+
          '<p class="PageTitleGRC">'+GRC_Title+'</p>'+     
          '<p class="PageTitle">'+Title+'</p>'+     
      '</nobr></td>'+
      '<td width="40%" background="../images/gradient.jpg">&nbsp;</td>'+
    '</tr>'+
    '</table>'
  );
}
//##################################################
function grcPageFooter(){
  document.write(
    '<p class="PageFooter"><img src="../images/line.gif" width="100%"><br>'+
    '<table align="center" width="95%" border="0" cellpadding="0" cellspacing="0"><tr>'+
    '<td width="40">'+
    '<a href="#up"><img border=0 src="../images/go2top.gif" alt="'+GRC_Footer_ToTop+'" title="'+GRC_Footer_ToTop+'"></a>'+
    '</td>'+
    '<td>'+
    '<p class="PageFooter" style="text-align:right">'+GRC_Address+'<br>'+
    'e-mail:<a href="mailto:supp@geocnt.geonet.ru">supp@geocnt.geonet.ru</a>'+
    '</p></td>'+
    '</tr></table></p><br>'
  );
}