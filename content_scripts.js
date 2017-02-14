setTimeout(function() {
    //current URL
    var strUrl = window.location.href;
    var username;
    var password;
    var button;

    //get the username, password and submit button from html page
    //for portailwifi
    if (strUrl.indexOf("https://portailwifi.ec-nantes.fr/") != -1) {
        //get username and password
        var form_credit = document.getElementById('logonForm_logon_block_credentials');
        username = form_credit.getElementsByTagName('td')[0].getElementsByTagName('input')[0];
        password = form_credit.getElementsByTagName('td')[1].getElementsByTagName('input')[0];

        //get the submit button
        button = form_credit.getElementsByTagName('td')[2].getElementsByTagName('button')[0];

        //cocher the checkbox
        var form_policy = document.getElementById('logonForm_policy_block');
        var checkbox = form_policy.getElementsByTagName('td')[0].getElementsByTagName('input')[0];
        checkbox.focus();
        checkbox.checked = "true";
    }
    //for agap
    else if(strUrl.indexOf('/AGAP/') != -1){  
        var aInputs = document.getElementsByTagName('input');

        for (var i = 0; i < aInputs.length; i++) {
            if (aInputs[i].name == 'login') {
                username = aInputs[i]; 
            }
            else if (aInputs[i].name == 'password') {
                password = aInputs[i]; 
            }
            else if (aInputs[i].name == 'Valider') {
                button = aInputs[i]; 
            } 
        }
    }
    //for portailvpn 
    else if (strUrl.indexOf("https://portailvpn.ec-nantes.fr/") != -1) {
        //get username and password
        username = document.getElementById('username');
        password = document.getElementById('password_input');
        //get the submit button
        var aInputs = document.getElementsByTagName('input');
        for (var i = 0; i < aInputs.length; i++) {
            if (aInputs[i].name == 'Login') {
                button = aInputs[i];
                break;
            }
        }
    }

    //set username and password form local storage and submit
    chrome.storage.local.get(['un', 'pw', 'on'], function(result) {
        //mode on
        if (1 == result.on) {
            //set username and password
            username.value = result.un;
            password.value = result.pw;
            //click on the  submit button        
            setTimeout(button.click(), 800);
        }
    });

}, 3000);