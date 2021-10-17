

$("document").ready(function() {
var display ="", operatorFlag = 0, dotFlag = 0, str="";

$("#zero").click(function() {
   if(display != "0" && str != "0"){
   operatorFlag = 0;
   display = display + "0";
   str = str + "0";
   $("#display").text(display);  
   }
  });

 $("#one").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "1";
   str = str + "1";
   $("#display").text(display);  
  });

   $("#two").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "2";
   str = str + "2";
   $("#display").text(display);  
  });

   $("#three").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "3";
   str = str + "3";
   $("#display").text(display);  
  });

   $("#four").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "4";
   str = str + "4";
   $("#display").text(display);  
  });

   $("#five").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "5";
   str = str + "5";
   $("#display").text(display);  
  });

   $("#six").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "6";
   str = str + "6";
   $("#display").text(display);  
  });

   $("#seven").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "7";
   str = str + "7";
   $("#display").text(display);  
  });

   $("#eight").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "8";
   str = str + "8";
   $("#display").text(display);  
  });

   $("#nine").click(function() {
   if(display == "0"){
     display = "";
   }
   operatorFlag = 0;
   display = display + "9";
   str = str + "9";
   $("#display").text(display);  
  });

   $("#dot").click(function() {
  if(dotFlag == 0){
   operatorFlag = 0;
   display = display + ".";
   dotFlag =1;
   $("#display").text(display);  
  }
  });

  $("#AC").click(function(){
    operatorFlag = 0;
    dotFlag = 0;
    display ="0";
    $("#display").text(display);
  });
  
   $("#plus").click(function() {
     if(operatorFlag ==0){
       dotFlag = 0;
       operatorFlag = 1;
       str="";
       display = display + "+";
       $("#display").text(display); 
     } 
   });

     $("#min").click(function() {
     if(operatorFlag ==0){
       dotFlag = 0;
       operatorFlag = 1;
       str="";
       display = display + "-";
       $("#display").text(display);  
     }
       });

      $("#mult").click(function() {
     if(operatorFlag ==0){
       dotFlag = 0;
       operatorFlag = 1;
       str="";
       display = display + "*";
       $("#display").text(display);  
     }
      });
      
      $("#div").click(function() {
     if(operatorFlag ==0){
       dotFlag = 0;
       operatorFlag = 1;
       str="";
       display = display + "/";
       $("#display").text(display); 
     } 
    });

     $("#equal").click(function() {
     display = eval(display);
     operatorFlag = 0;
     var check = parseFloat(display) - parseInt(display);
     if(check != 0){
       dotFlag = 1;
     }
     else{
       dotFlag = 0;
     }
     $("#display").text(display);
    });
});