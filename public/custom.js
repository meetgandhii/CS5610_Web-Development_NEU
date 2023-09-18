
function redirect(){
    let e = document.getElementById("formchoice");

//Get the selected value of the select list
    let formaction = e.options[e.selectedIndex].value;
    location.replace("/"+formaction+"/index.html");

}