function display(a){
document.getElementById('display').value=document.getElementById('display').value+a;

}
function cleara(){
    document.getElementById('display').value="";
}
function cal(){
    var user=document.getElementById('display').value;
    var output=eval(user);
    document.getElementById("display").value=output;
}
