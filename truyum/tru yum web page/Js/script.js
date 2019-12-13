
function validateForm()
{
var title=document.forms["editMovie"]["title"].value;
if(title=="")
{
    alert("Title is required");
    return false;
}
var titlelength=title.length;
if(titlelength < 2||titlelength >65)
{
    alert("Title should have 2 to 65 characters");
    return false;
}
var price=document.forms["editMovie"]["price"].value;
if(isNaN(price)){
    alert("price has to be a number");
    return false;
}
if(price=="")
{
    alert("price is required");
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
var category=document.forms["editMovie"]["category"].value;
if(category=="0")
{
    alert("select any course");
    return false;
}
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table_id").deleteRow(i);
    document.getElementById("span").innerHTML="items removed from cart succesfully"
    addColumn();


    
  }

function addColumn(){

    var table=document.getElementById("table_id"),sum=0.00;
    if(table.rows.length==2){
        window.open("cart empty.html");
    }
    for (var i = 1; i <=table.rows.length-1; i++){
        
       var str=table.rows[i].cells[2].innerHTML;
       console.log(Number(Str.substring(3)));
       sum += parseFloat(table.rows[i].cells[2].innerHTML);
       
    }
    document.getElementById("val").innerHTML=sum.toFixed(2);
}