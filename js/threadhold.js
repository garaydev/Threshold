//checks to see if the document is ready
$(document).ready(function() {


document.getElementById('submit').onclick = function() {
	 isformfilled = true;

	 term1 = $("#term1").val(); 
	 term2 = $("#term2").val(); 
	 term3 = $("#term3").val(); 
	 term4 = $("#term4").val();
	 $('input[type="text"]').each(function() {
             if ($.trim($(this).val()) == '') {
                 isformfilled = false;
               }
               });
	 if (isformfilled == false)
	 {
	 	window.alert("Not all fields were filled out!");
	 }
	 

}
function loadXMLDoc(filename)
{
if (window.XMLHttpRequest)
  {
  xhttp=new XMLHttpRequest();
  }
else // code for IE5 and IE6
  {
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET","C:\inetpub\wwwroot\Threshold\\" + filename,false);
xhttp.send();
return xhttp.responseXML;
} 

});
