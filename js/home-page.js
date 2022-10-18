'use strict'


function onInitHomePage (){
    if(!checkStorageForUser()) {
        _generateLoginForm();
    } else {
        $('nav.main a.user-pref').attr('href','user-prefs.html');
        $('nav.main a.map').attr('href','map.html');
    }

    
}

function onUserLoged(e,el){
    e.preventDefault();
    const user = {};

    user.name = $('#userName').val();
    user.password = $('#userPass').val();
    console.log
    saveUser(user);
    $('#login-form').hide();
    $('nav.main a.user-pref').attr('href','user-prefs.html');
    $('nav.main a.map').attr('href','map.html');
}

function _generateLoginForm(){
    const strHtml = ` `;
    $('#login-form').show();
}

