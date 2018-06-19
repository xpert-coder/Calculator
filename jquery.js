      $(document).ready(function() {
 
  var entrylist = []; // keep entry of keystrokes pressed
  var entry; // to read clicked button value and enter in entrylist
  var decimal = false; // to check if already decimal is present in eqn , to avoid "7.33.1+2" type case
  var operator = false; // to check if already operator is present in eqn , to avoid "7+-2" type case
  
  function reset(){
    entrylist=[];
    entry=0;
    decimal=false;
    operator=false;
  }
  function displaylimit(x){
    if(x.length>=12){$(".answer").text("limit exceed");
                    reset();
                     $(".entrylist").text("0");
                    }
    
  }

  // this function is to read the value of buttons and to enter in variable "entrylist"

  $(".number").click(function() {
    entry = $(this).attr("value");
    operator = false;
    entrylist.push(entry);
    console.log("entered sequel of keystrokes :" + entrylist.join(""));
    $(".entrylist").text(entrylist.join(""));
    displaylimit(entrylist.join(""));
  });

  $("#CE").click(function() {
    entrylist.pop(); // this remove previously entered value than CE
    $(".entrylist").text(entrylist.join(""));
  });

  $("#AC").click(function() {
    decimal = false;
    operator = false;
    entrylist = [];
    $(".entrylist").text(0);
    $(".screen").text(0);
  });

  $("#zero").click(function() {
    if (entrylist.length === 0) {
      $(".entrylist").text(0);
    } else {
      entry = $(this).attr("value");
      entrylist.push(entry);
      console.log("entered sequel of keystrokes :" + entrylist.join(""));
      $(".entrylist").text(entrylist.join(""));
    }
  });
  $("#decimal").click(function() {
    if (decimal) {
    } else {
      decimal = true;
      entry = $(this).attr("value");
      entrylist.push(entry);
      console.log("entered sequel of keystrokes :" + entrylist.join(""));
      $(".entrylist").text(entrylist.join(""));
    }
  });
  $(".operator").click(function() {
    if (operator) {
      entrylist.pop();
    }
    operator = true;
    decimal = false;
    entry = $(this).attr("value");
    entrylist.push(entry);
    console.log("entered sequel of keystrokes :" + entrylist.join(""));
    $(".entrylist").text(entrylist.join(""));
  });
  $("#calculate").click(function() {
    try {
      $(".answer").text(eval(entrylist.join("")) );
      
    } 
    catch (err) {    
      $(".answer").text("syntax error");
    }
  });
  
  
});