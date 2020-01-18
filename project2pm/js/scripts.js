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
    }
    else if (ques1 +ques2 +ques3 +ques4 +ques5 < 16) {
    $ ('#ruby').show();
    }
   else if (ques1 +ques2 +ques3 +ques4 +ques5 < 24) {
    $("#java").show();
    }
    else if (ques1 + ques2 +ques3 +ques4 +ques5 <32) {
    $("#php").show();
    }
    else if (ques1 + ques2 +ques3 +ques4 +ques5 <=40) {
    $("#python").show();
    
    }
  
  
    event.preventDefault();
    });
  });
