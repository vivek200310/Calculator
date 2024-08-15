function btnclk(val){
    document.getElementById("op").value+=val

}
function c(){
    document.getElementById("op").value=null
}
function eq()
{
    var a=document.getElementById("op").value
    var res=eval(a)
    document.getElementById("op").value=res
}