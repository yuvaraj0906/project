
function validateForm()
{
var title=document.forms["editMovie"]["title"].value;
if(title=="")
{
    alert("Title is required");
    return false;
}
var titlelength=title.length;
if(titlelength < 2||titlelength >100)
{
    alert("Title should have 2 to 100 characters");
    return false;
}
var price=document.forms["editMovie"]["price"].value;
if(isNaN(price)){
    alert("boxOffice has to be a number");
    return false;
}
if(price=="")
{
    alert("boxOffice is required");
    return false;
}
var dateOfLaunch=document.forms["editMovie"]["dateOfLaunch"].value;
if(dateOfLaunch==""){
alert("date of launch is required");
return false;
}
if(!dateOfLaunch.match(/^(0[1-9]|[12][0-9]|3[01])[\-\/.](?:(0[1-9]|1[012])[\-\/.](19|20)[0-9]{2})$/)){
  alert("Incorrect date format");
  return false;
}
var genre=document.forms["editMovie"]["category"].value;
if(genre>1){
    alert("select one genre");
    return false;
}
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    var x=document.getElementById("table_id").deleteRow(i);
    document.getElementById("span").innerHTML="MOVIE REMOVED FROM FAVOURITES SUCCESFULLY"
    addColumn();


    
  }

function addColumn(){

    var count=0;
    var table = document.getElementById("table_id");
    if(table.rows.length==2){
        window.open("favourites empty.html");
    }
    for (var i = 2; i <=table.rows.length-1; i++){
        
        
       count++;

       
    }
    document.getElementById("val").innerHTML=count;
}