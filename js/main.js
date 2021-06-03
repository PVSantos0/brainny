/* function Login() {
	let done=0;

	let user = document.getElementsById('email').value;

	let key= document.getElementsById('password').value;

	if (user=="admin@admin" && key=="admin") {
	  window.location="dashboard.html";
	  done=1;

	}
	if (done==0) { alert("Usuario não cadastrado"); }
} 
 */

/* $(function(){
	let action = "A"; //A=> adição; E=> Edição
	let idItem = -1; //Índice do item na lista
	let tbClock = localStorage.getItem('tbClock'); //Recupera os dados armazenados
	tbClock = JSON.parse(tbClock); // Converte string para objeto
	if(tbClock == null) // Caso não tenha conteúdo
	tbClock = [];
});

function addItem(){
	let user = JSON.stringify({
		name : $('#name').val(),
		date : $('#date').val(),
		clock: $('#clock').val() 
	});
	tbClock.push(user);
	localStorage.setItem('tbClock', JSON.stringify(tbClock));
	alert('Foi registardo seu ponto.');
	return true;
};

function editItem(){
	tbClock[idItem] = JSON.stringify({
		date : $('#date').val(),
		clock: $('#clock').val() 
	}); //Alterar o item selecionado
	localStorage.setItem('tbClock', JSON.stringify(tbClock));
	alert('Foi realizado a alteração');
	action = "A";
	return true;
};

function rmItem(){
	tbClock.splice(idItem, 1);
	localStorage.setItem('tbClock', JSON.stringify(tbClock));
	alert('Foi removido o registor.');
};

function list(){
	$("#tbList").html("");
    $("#tbList").html(
        "<thead>"+
        	"<tr>"+
        		"<th class='table-head'>Coloborador</th>"+
        		"<th class='table-head'>Data</th>"+
        		"<th class='table-head'>Hora</th>"+
        	"</tr>"+
        "</thead>"+
        "<tbody>"+
        "</tbody>"
        );
    for(var i in tbClock){
        var x = JSON.parse(tbClock[i]);
        $("#tbList tbody").append("<tr>");
		$("#tbList tbody").append("<td class='cell radius-l name>"+x.name+"</td>");
		$("#tbList tbody").append("<td class='cell date'>"+x.date+"</td>");
		$("#tbList tbody").append("<td class='cell hour'>"+x.clock+"</td>");
		$("#tbList tbody").append("<td class='cell class='cell radius-l name'><img src='imgs/edit-solid.svg' alt='"+i+"class='btnEdit'/><img src='imgs/trash-alt-solid.svg' alt='"+i+"' class='btnExcluir'/></td>");
        $("#tbList tbody").append("</tr>");
    }
	
}

$("#register").on("submit",function(){
	if(action == "A")
		return addItem();
	else 
		return editItem();
});

$(#tbList).on('click', ".btnEdit", function(){
	action = "E";
	idItem = parseInt($(this).attr("alt"));
	let x = JSON.parse(tbClock[idItem]);
	$("#name").val(x.name);
	$("#date").val(x.date);
	$("#clock").val(x.clock);
	$("#name").focus();
});

$(#tbList).on('click', ".btnRm", function(){
	idItem = parseInt($(this).attr("alt"));
	rmItem();
	list();
}); */