#!/usr/bin/env node

// nested funcs - hides inner functions from outer functions, used in enclosures


username = "ComaScript"
passwd = "EzioAuditore222"

login();
/* calling showName() or showPass() from outside will cause an error */

function login(){
    showName(username);
    showPass(passwd);

    function showName(msg){
        console.log(msg)
    }
    function showPass(msg){
        console.log(msg)
    }
}
