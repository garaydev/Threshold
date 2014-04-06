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
	 else
	 	isformfilled = true;

	 if (isformfilled == true){
	 	$("userform").parent().remove();
	 	window.alert("Term 1: " + term1 + "Term 2: " + term2 +  "Term 3: " + term3 + "Term 4: " + term4);
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
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
} 

});
