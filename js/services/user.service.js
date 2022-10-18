'use strict'

const USER_KEY = 'user-data';
const PREF_KEY = 'user-pref';

var gUser;
var gUserPref;






function checkStorageForUser () {
    return storageHasItem(USER_KEY);
}

function updateUserName(str){
    gUser.name = str;
    saveToStorage(USER_KEY,gUser);
}

function getUserPref (){
    return storageHasItem(PREF_KEY) ? loadFromStorage(PREF_KEY) : gUser = {
        bgColor: '#0a0a0a',
        txtColor: '#fcfcfc',
        zoomFactor: 5,
        stratLoc: '0,0'
    };
}

function saveUserPref(pref){
    gUserPref = pref;
    saveToStorage(PREF_KEY,gUserPref)
}

function getUser(){
    gUser = loadFromStorage(USER_KEY);
    var {name, password} = gUser;
    return {name, password};
}

function saveUser(obj){
    gUser = obj;
    saveToStorage(USER_KEY,obj);
}