/**
 * Created by M on 2016/5/8.
 */
function saveStorage(id){
    var data=document.getElementById(id).value;
    var time=new Date().getTime();
    /*保存*/
    localStorage.setItem(time,data);
    /*提示信息*/
    alert("数据已经被保存！");

}
function loadStorage(id){
    var reselt='<table border="1">';
    for(var i=0;i<localStorage.length;i++)
    {
        /*获取条数*/
        var key=localStorage.key(i);
        /*提取出数据*/
        var value=localStorage.getItem(key);
        var date=new Date();
        date.setTime(key);
        /*将时间转换为带格式的字符串进行输出*/
        var datestr= date.toGMTString();
        reselt+='<tr><td>'+'这是第'+(i+1)+'条数据</td><td>'+value+'</td><td>'+datestr+'</td></tr>';
    }
    reselt+='</table>';
    var target=document.getElementById(id);
    target.innerHTML=reselt;
}
function clearStorage(id){
    localStorage.clear();
    alert("数据已经成功删除！");
    loadStorage("msg");
}