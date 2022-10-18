'use strict'


function onInitUserPref() {
    const user = getUser();
    const pref = getUserPref();
    $('#updateUserName').val(user.name);
    $('#prefBGColoer').val(pref.bgColor);
    $('#prefTxtColor').val(pref.txtColor);
    $('#prefZoom').val(pref.zoomFactor);  $('#prefZoom +').text($('#prefZoom').val());
    $('#locationCoord').val(pref.startLoc);

}


function onUserPrefSubmit(e,el) {
    e.preventDefault();

    //update the user name if filled
    if(Boolean($('#updateUserName').val())) updateUserName($('#updateUserName').val());

    const pref = {};

    pref.bgColor = $('#prefBGColoer').val() || '#0a0a0a';
    pref.txtColor = $('#prefTxtColor').val() || '#fcfcfc';
    pref.zoomFactor = $('#prefZoom').val() || 5;
    pref.startLoc = $('#locationCoord').val() || '0,0';

    saveUserPref(pref);
}


function onRangeChage(){
    $('#prefZoom +').text($('#prefZoom').val());
}