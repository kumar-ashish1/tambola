var localStorage = window.localStorage;

function login() {
    var empCode = $("#empCode2").val();
    var password = $("#password2").val();

    if (empCode.length == 0) {
        showAlert("Employee code cannot be empty","Enter your employee code");
        return;
    } else if (password.length == 0) {
        showAlert("Password cannot be empty","Enter your password");
        return;
    }

    var lb = new $.LoadingBox({ loadingImageSrc: "images/default.gif", });

    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "login", "empCode": empCode, "password": password },
        type: "POST",
        success: function(res) {

            var json;
            lb.close();

            console.log(res);

            try {
                json = JSON.parse(res);
            } catch (error) {
                console.log(error);
                return;
            }

            if (json.status == "error") {
                showAlert("Authentication Error!",json.message,true);
            } else {
                localStorage.setItem("userData", res);

                // if(json.SelectedGame == '1')
                // {
                //     window.location.replace("crossword.html");
                // }else if(json.SelectedGame == '2')
                // {
                //     window.location.replace("sudoku.html");
                // }else if(json.SelectedGame == '0')
				// {
					window.location.replace("select-game.html");
				//}
               // window.location.replace("select-game.html");
            }

        }

    });
}

function showAlert(title,content,log=false)
{
    if(log)
    {
        $.confirm({
            type: 'red',
            typeAnimated: true,
            title: title,
            content: content,
            buttons: {
                "forgot password": function () {

                    $.confirm({
                        title: 'Enter your EmpCode',
                        useBootstrap:false,
                        boxWidth:'95%',
                        content: '' +
                        '<form action="" class="formName">' +
                        '<div class="form-group">' +
                        '<input type="text" placeholder="employee code" class="name form-control" required />' +
                        '</div>' +
                        '</form>',
                        buttons: {
                            formSubmit: {
                                text: 'Submit',
                                btnClass: 'btn-blue',
                                action: function () {
                                    var empCode = this.$content.find('.name').val();

                                    var lb = new $.LoadingBox({ loadingImageSrc: "images/default.gif", });

    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "mail", "empCode": empCode},
        type: "POST",
        success: function(res) {

            console.log(res);
            var json;

            lb.close();

            try {
                json = JSON.parse(res);
            } catch (error) {
                console.log(error);
                return;
            }

            $.alert({
                boxWidth: '90%',
                useBootstrap: false,
                type: 'red',
                typeAnimated: true,
                title: json.status,
                content: json.message,
            });

        }

    });
                                    
                                }
                            },
                            cancel: function () {
                                //close
                            }}});

                },
                    "cancel": function () {
                   
                }
            }
        });
    }else{
    $.alert({
       
        useBootstrap: false,
        type: 'red',
        typeAnimated: true,
        title: title,
        content: content,
    });
}
}

function register() {
    var empCode = $("#empCode").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var password = $("#password").val();

    if (empCode.length == 0) {
        showAlert("Employee code cannot be empty","Enter your employee code.");
        return;
    }
    else if (email.length == 0) {
        showAlert("Email cannot be empty","Enter your email address.");
        return;
    }else if(!ValidateEmail(email))
    {
        showAlert("Invalid Email","You have entered an invalid email address!")
        return;

    }else if (phone.length == 0) {
        showAlert("Phone no cannot be empty","Enter your phone no.");
        return;
    } 
    else if(phone.length < 10)
    {
        showAlert("Mobile Number Invalid","Enter valid mobile number.");
        return;
      
    } else if (password.length == 0) {
        showAlert("Password cannot be empty","Enter password.");
        return;
    } 

    if(email.toLowerCase().search('hdfc') >= 0)
    {
            showAlert("Error.","Please use your personal email address.");
            return;
    }

    var lb = new $.LoadingBox({ loadingImageSrc: "images/default.gif", });

    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "register", "empCode": empCode, "password": password, "email": email, "phone": phone },
        type: "POST",
        success: function(res) {

            console.log(res);
            var json;

            lb.close();

            try {
                json = JSON.parse(res);
            } catch (error) {
                console.log(error);
                return;
            }

            
            if (json.status == "error")
            {
                showAlert("Error!",json.message);
            }
            else
            {
               $("#empCode").val("");
                $("#phone").val("");
               $("#email").val("");
               $("#password").val("");
                showAlert("Success",json.message);
            }

        }

    });
}

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    return true
else
    return false
}

function loadSelectedGame()
{
    var userData = JSON.parse(localStorage.getItem("userData"));

    switch(Number(userData.SelectedGame))
    {
        case 1:
        case 2:
        case 3:
            $("#" + userData.SelectedGame).css("opacity","1.0");
            break;
        case 4:
            $("#1").css("opacity","1.0");  
            $("#2").css("opacity","1.0");   
            break;       
            case 5:
                $("#2").css("opacity","1.0");  
                $("#3").css("opacity","1.0");   
                break;  
                case 6:
            $("#1").css("opacity","1.0");  
            $("#3").css("opacity","1.0");   
            break;      
            case 7:
            $("#1").css("opacity","1.0");  
            $("#2").css("opacity","1.0");  
            $("#3").css("opacity","1.0");  
            break;  
            default:
                $("#gameSelectionButton").attr("disabled",false) ;
                break;            
    }
}

function updateSelectedGame()
{
    let selectedGame = 0;
    var userData = JSON.parse(localStorage.getItem("userData"));
     
    if($("#1").css("opacity") == "1" && $("#2").css("opacity") != "1" && $("#3").css("opacity") != "1") selectedGame = 1;
    else if($("#1").css("opacity") != "1" && $("#2").css("opacity") == "1" && $("#3").css("opacity") != "1") selectedGame = 2;
    else if($("#1").css("opacity") != "1" && $("#2").css("opacity") != "1" && $("#3").css("opacity") == "1") selectedGame = 3;
    else if($("#1").css("opacity") == "1" && $("#2").css("opacity") == "1" && $("#3").css("opacity") != "1") selectedGame = 4;
    else if($("#1").css("opacity") != "1" && $("#2").css("opacity") == "1" && $("#3").css("opacity") == "1") selectedGame = 5;
    else if($("#1").css("opacity") == "1" && $("#2").css("opacity") != "1" && $("#3").css("opacity") == "1") selectedGame = 6;
    else if($("#1").css("opacity") == "1" && $("#2").css("opacity") == "1" && $("#3").css("opacity") == "1") selectedGame = 7;

    if(selectedGame == 0)
    {
        showAlert("Error","please select games.");
        return;
    }else
   {
    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "updateSelectedGame", "empCode": userData.EmpCode, "selectedGame": selectedGame },
        type: "POST",
        success: function(res) {

            console.log(res);
            showAlert("success","Your selected games have been submitted successfully. Now click on game to play game.");
            loadUserData((data)=>{
                loadSelectedGame();
            })
        }
    });
 }
    
}




function onGameSelect(gameId, redirect = true) {
    // alert(localStorage.getItem("empCode"));

    if($('#' + gameId).css('opacity') < 1 && redirect == true) return;

    var userData = JSON.parse(localStorage.getItem("userData"));
    
        switch (gameId) {
            case 0:
                $("#0").css("opacity","0.7");
                $("#1").css("opacity","1.0");
                $("#2").css("opacity","1.0");

                if(redirect == true)
                {
                    $.confirm({
                        boxWidth: '90%',
                        useBootstrap: false,
                        type: 'blue',
                        typeAnimated: true,
                        title: "Select Game ?",
                        content: "",
                        buttons: {
                            "Crossword": function () {
                                confim(userData,gameId,'crossword.html');
                               // window.location.replace("crossword.html");
                            },
                            "Sudoku": function () {
                                confim(userData,gameId,'sudoku.html');
                               // window.location.replace("sudoku.html");
                            },
                        }
                    });
                }

                break;
            case 1:
                if(userData.SelectedGame == -1)
                {
                    $.confirm({
                        boxWidth: '90%',
                        useBootstrap: false,
                        type: 'blue',
                        typeAnimated: true,
                        title: "Do u want to play crossword ?",
                        content: "",
                        buttons: {
                            "play": function () {
                                console.log("aaaa" + userData.SelectedGame)
                                confim(userData,gameId,'crossword.html');
                               // window.location.replace("crossword.html");
                              return;
                            },
                            "cancel": function () {
                             return;
                            },
                        }
                    });
                }else
                {
                $("#0").css("opacity","0.7");
                $("#1").css("opacity","1.0");
                $("#2").css("opacity","0.7");
         
                if(redirect == true)
                    window.location.replace("crossword.html");
                }

                break;
    
            case 2:
                if(userData.SelectedGame == -1)
                {
                    $.confirm({
                        boxWidth: '90%',
                        useBootstrap: false,
                        type: 'blue',
                        typeAnimated: true,
                        title: "Do u want to play sudoku ?",
                        content: "",
                        buttons: {
                            "play": function () {
                                confim(userData,gameId,'sudoku.html');
                                //window.location.replace("sudoku.html");
                            },
                            "cancle": function () {
                             return;
                            },
                        }
                    });
                }else
                {
                $("#0").css("opacity","0.7");
                $("#1").css("opacity","0.7");
                $("#2").css("opacity","1.0");

                if(redirect == true)
                    window.location.replace("sudoku.html");
                }

                break;
            default:
                break;
    
        
    }

   // confim(gameId,userData);
   
}

function exit_game()
{
    $.confirm({
        type: 'red',
        useBootstrap:false,
        boxWidth:'50%',
        typeAnimated: true,
        title: "Alert",
        content: "<span style='font-size:15px;'>You will loose your 1 chance. Do you really want to exit ? <span>",
        buttons: {
          Yes:function(){
               window.location.replace("./select-game.html");
          },
          NO:function(){

          }
        }});
}

function confim(userData,gameId,url)
{

   console.log(gameId);

  
    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "updateSelectedGame", "empCode": userData.EmpCode, "selectedGame": gameId },
        type: "POST",
        success: function(res) {

            console.log(res);
            window.location.replace(url);

        }
    });

}

/*
function askForPracticeGame(id)
{
    switch(id)
    {
        case 0:
            $.confirm({
                title: 'Woule you like to play pratice game ?',
                theme:"light",
                type: 'blue',
                bgOpacity:0.7,
                boxWidth:'80%',
                useBootstrap:false,
               
                content:"", //+ (3-json.CrosswordCount) + " crossword chances.",
                buttons: {
                    "Sudoku": function () {
                        window.location.replace("sudoku-pratice.html");
                    },
                    "Crossword": function () {
                        window.location.replace("crossword-pratice.html");
                    },
                    cancel: function () {
                        //close
                    },
                }
            });
            break;
            
            case 1:
                $.alert({
                    boxWidth: '80%',
                    useBootstrap: false,
                    type: 'blue',
                    typeAnimated: true,
                    title: "Would you like to play pratice game ?",
                    content: "",
                    buttons: {
                        "ok": function () {
                            window.location.replace("crossword-pratice.html");
                        },
                        cancel: function () {
                            //close
                        },
                    }
                });
                break;
                case 2:
                    $.alert({
                        boxWidth: '80%',
                        useBootstrap: false,
                        type: 'blue',
                        typeAnimated: true,
                        title: "Would you like to play pratice game ?",
                        content: "",
                        buttons: {
                            "ok": function () {
                                window.location.replace("sudoku-pratice.html");
                            },
                            cancel: function () {
                                //close
                            },
                        }
                    });
                    break;

    }
}
*/

function getUserSelectedGame() {
    var userData = JSON.parse(localStorage.getItem("userData"));

    console.log(userData);
    console.log(userData.EmpCode);
    loadUserData((json) => {
       document.getElementById("playerId").innerText = "Welcome " + json.EmpCode;
        //console.log("abcd");
        onGameSelect(parseInt(json.SelectedGame), false);
    })
}

function loadUserData(listner) {

    var lb = new $.LoadingBox({ loadingImageSrc: "images/default.gif", });

    var userData = JSON.parse(localStorage.getItem("userData"));

    console.log(userData);
    console.log(userData.EmpCode);

    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "getSelectedGame", "empCode": userData.EmpCode },
        type: "POST",
        success: function(res) {

            console.log(res);

            try {
                json = JSON.parse(res);
            } catch (error) {
                alert(error);
                return;
            }


            lb.close();
            localStorage.setItem("userData",res);
            listner(json);
        }
    });


}

function updateCount(game)
{
    var ugame;
    var count;
    var userData = JSON.parse(localStorage.getItem("userData"));
    
    var empCode = userData.EmpCode;
    var gameMode = "mainGame";
   

    if(game == 0)
    {
       ugame = "sudoku";
       count = (Number(userData.SudokuCount)+1);
    }
    else if(game == 1)
    {
       ugame = "crossword";
       count = (Number(userData.CrosswordCount)+1);
    }
    else 
    {
       ugame = "chess";  
       count = (Number(userData.ChessCount)+1); 
    }   

    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "updateCount", "game": ugame,"gameMode":gameMode, "count": count,"empCode":empCode },
        type: "POST",
        success: function(res) {

            //console.log(empCode + "," + count + "," + ugame);
            console.log(res);

        }

    });
}


function updatePracticeCount(game)
{

    var ugame;
    var count;

    var userData = JSON.parse(localStorage.getItem("userData"));
 
    var gameMode = "practiceGame";
    var empCode = userData.EmpCode;
  

    if(game == 0)
    {
       ugame = "sudoku";
       count = (Number(userData.SudokuPracticeCount)+1);
    }
    else if(game == 1)
    {
       ugame = "crossword";
       count = (Number(userData.CrosswordPracticeCount)+1);
    }
    else 
    {
       ugame = "chess";  
       count = (Number(userData.ChessPracticeCount)+1); 
    }
   // console.log("count: " + ugame)

    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "updateCount", "game": ugame,"gameMode":gameMode, "count": count,"empCode":empCode },
        type: "POST",
        success: function(res) {

            //console.log(empCode + "," + count + "," + ugame);
            console.log(res);

        }

    });
}

function updateScore(game,score,time)
{

    if(parseInt(document.getElementById('gameMode').innerHTML) != 0) return;

    var ugame;
    var count;
    var userData = JSON.parse(localStorage.getItem("userData"));
    
    var empCode = userData.EmpCode;
    var count = 1;

    if(game == 0)
    {
       ugame = "sudoku";
       count = (Number(userData.SudokuCount)+1);
    }
    else if(game == 1)
    {
       ugame = "crossword";
       count = (Number(userData.CrosswordCount)+1);
    }
    else 
    {
       ugame = "chess";  
       count = (Number(userData.ChessCount)+1); 
    }   

    console.log("updating score")

    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "updateScore", "game": ugame, "count": count,"empCode":empCode,"time":time,"score":score},
        type: "POST",
        success: function(res) {

            console.log(empCode + "," + count + "," + ugame);
            console.log(res);

        }

    });
}

function loadAllData(callback)
{
    jQuery.ajax({
        url: "php/helper.php",
        data: { "request": "getAllData"},
        type: "POST",
        success: function(res) {

            var json;
           try{
             json = JSON.parse(res);
           }catch(error)
           {
              console.log(error);
           }

           callback(json.data);
        }

    });
}