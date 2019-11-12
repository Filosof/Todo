var mytable = document.getElementById('mytable');
var myinput = document.getElementById("myinput");
var unique_id = [0];
var index = 0;


function Delete(a)
{
	var del = document.getElementById("table_tr_id_"+a);
	del.remove();
}
add.onclick = function add(event)
	{
	var txt = myinput.value;
	if (txt!=null){
	index++;
	unique_id[index] = "table_tr_id_"+index;
	//alert(unique_id[index]);
	mytable.innerHTML+="<tr id="+unique_id[index]+"><td width='400' height='10'><span>"+txt+"</span><button onclick=Delete(this.id) id="+index+">-</button></td></tr>"
	}
myinput.value = '';
}
//-------------------
