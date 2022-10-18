'use strict'


function storageHasItem(key){
    const item = loadFromStorage(key);
    return Boolean(item);
}