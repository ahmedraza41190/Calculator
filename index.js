function foo(a){
    var t = document.getElementById('inp')
    t.value += a 
}
function res (){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}
function clr(){
    document.getElementById('inp').value = ''
}