function CheckUncheckAll(){


   var  selectAllCheckbox=document.getElementById("checkUncheckAll");
   if(selectAllCheckbox.checked==true){
    var checkboxes =  document.getElementsByName("rowSelectCheckBox");
     for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = true;
     }
    }else {
     var checkboxes =  document.getElementsByName("rowSelectCheckBox");
     for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = false;
     }
    }
   }
function selectAll() {	
	var  selectAllCheckbox = document.getElementById("checkUncheckAll");
	 selectAllCheckbox.checked= true;
	 var checkboxes =  document.getElementsByName("rowSelectCheckBox");
     for(var i=0, n=checkboxes.length;i<n;i++) {
      checkboxes[i].checked = true;
     }
}

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});