$(document).ready(function(){

    // detect click on counter button 
    $("#countbutton").click(function(){

        // get text in variable
        let mytext = $("#mytext").val();
        
        // store it in array
        let myarray = mytext.split("");

        // result declaration
        let myresult = {
            char : myarray.length,
            space : 0,
            line : 0,
            tab : 0
        }

        // go through array
        for(let i = 0 ; i < myarray.length ; i++){
            if(myarray[i] == " "){
                myresult.space += 1;
            } else if (myarray[i] == "\n"){
                myresult.line += 1;
            } else if (myarray[i] == "\t"){
                myresult.tab += 1;
            }
        }

        //calculate char
        
        // if space
        if($("#space").prop("checked") == false){
            myresult.char -= myresult.space;
        }
        // if tab
        if($("#tab").prop("checked") == false){
            myresult.char -= myresult.tab;
        }
        // if line
        if($("#line").prop("checked") == false){
            myresult.char -= myresult.line;
        }

        // display result
        
        $("#resultarea").text(myresult.char);
        $("#lichar").text("Caractères : " + myresult.char);
        $("#lispace").text("Espaces : " + myresult.space);
        $("#litab").text("Tabulation : " + myresult.tab);
        $("#liline").text("Sauts de ligne : " + myresult.line);
        $("#showobject").css("display", "block");
    })  
})




