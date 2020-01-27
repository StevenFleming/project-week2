$(document).ready(function(event) {
  
  $("form#survey").submit(function(event) {
    var ques1 = parseInt($("#ques1").val());
    var ques2 = parseInt($("#ques2").val());
    var ques3 = parseInt($("#ques3").val());
    var ques4 = parseInt($("#ques4").val());
    var ques5 = parseInt($("#ques5").val());



    if ( ques1 > 8) {
    alert(" A number was inputted greater than 8")
    }
    if ( ques2 > 8) {
    alert(" A number was inputted greater than 8")
    }
    if ( ques3 > 8) {
    alert(" A number was inputted greater than 8")
    }
    if ( ques4 > 8) {
    alert(" A number was inputted greater than 8")
    }
    if ( ques5 > 8) {
    alert(" A number was inputted greater than 8")
    }

    else if (ques1 + ques2 +ques3 +ques4 +ques5 < 8) {
    $("#swift").show();
    $("#ruby").hide();
    $("#java").hide();
    $("#php").hide();
    $("#python").hide();
    }
    else if (ques1 +ques2 +ques3 +ques4 +ques5 < 16) {
    $('#ruby').show();
    $("#swift").hide();
    $("#java").hide();
    $("#php").hide();
    $("#python").hide();
    }
   else if (ques1 +ques2 +ques3 +ques4 +ques5 < 24) {
    $("#java").show();
    $('#ruby').hide();
    $("#swift").hide();
    $("#php").hide();
    $("#python").hide();
    }
    else if (ques1 + ques2 +ques3 +ques4 +ques5 <32) {
    $("#php").show();
    $("#java").hide();
    $('#ruby').hide();
    $("#swift").hide();
    $("#python").hide();
    }
    else if (ques1 + ques2 +ques3 +ques4 +ques5 <=40) {
    $("#python").show();
    $("#php").hide();
    $("#java").hide();
    $('#ruby').hide();
    $("#swift").hide();
    
    }
  
  
    event.preventDefault();
    });
  });
