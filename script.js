const addbtn = document.getElementsByClassName("addbtn");
for(var i = 0; i < addbtn.length; i++)
{
    addbtn[i].addEventListener("click",addnewcontent);
}
function addnewcontent()
{
    var el = document.createElement('tr');
    el.innerHTML = "<td>"+getContent()+"</td><td><button class='closebtn'>X<button></td>";
    this.closest('tfoot').parentNode.children[1].appendChild(el);
    el.lastChild.firstChild.addEventListener("click",closeThis);
    var classname = getClassname(this);
    console.log(classname);
    var tbody = document.getElementsByClassName(classname);
    var value = tbody[0].children[1].innerHTML;
    localStorage.setItem(classname,value);
    console.log(localStorage.getItem(classname));
}
function closeThis()
{
    var tr = this.closest('tr');
    var classname = getClassname(this);
    tr.remove();
    console.log(classname);
    var tbody = document.getElementsByClassName(classname);
    var value = tbody[0].children[1].innerHTML;
    localStorage.setItem(classname,value);
    console.log(localStorage.getItem(classname));
}
function getContent()
{
    var content = prompt("Enter the task:");
    return content;
}
function getClassname(el)
{
    return el.closest('.table').classList[1];
}
function loadcontent()
{
    var childrens = document.getElementsByClassName('main')[0].children;
    console.log(childrens);
    for(var i = 0;i< childrens.length;i++)
    {
        var classname = childrens[i].classList[1];
        var content = localStorage.getItem(classname);
        childrens[i].children[1].innerHTML = content;
    }
    const closebtn = document.getElementsByClassName("closebtn");
    for(var i = 0;i<closebtn.length;i++)
    {
        closebtn[i].addEventListener("click",closeThis);
    }
}