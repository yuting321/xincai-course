
function checkAll(name) {
    var el = document.getElementsByTagName('input');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        if ((el[i].type == "checkbox") && (el[i].name == name)) {
            el[i].checked = true;
        }
    }
}

function clearAll(name) {
    var el = document.getElementsByTagName('input');
    var len = el.length;
    for (var i = 0; i < len; i++) {
        if ((el[i].type == "checkbox") && (el[i].name == name)) {
            el[i].checked = false;
        }
    }
}

function mutiSelect(name,childName){
    if(name.checked==true) {
        checkAll(childName);
    } else {
        clearAll(childName);
    }
}

//sort the data from big to small
function sorttosmall() {
    var j,k,val;
    for(j=0;j<database.length;j++){
        for(k=j+1;k<database.length;k++){
            if(database[j].ID>database[k].ID){
                val = database[j];
                database[j]=database[k];
                database[k]=val;
            }
        }
    }
}

//sort the data form small to big
function sorttobig() {
    var j,k,val;
    for(j=0;j<database.length;j++){
        for(k=j+1;k<database.length;k++){
            if(database[j].ID<database[k].ID){
                val = database[j];
                database[j]=database[k];
                database[k]=val;
            }
        }
    }
}

