var rol = [] // rol
var adiciona = [] // dados
//////////////////////////////////////////////////////// coleta de dados
function adicionar(){
	var i; var acumula = ""; var x
	i = parseFloat(document.getElementById ("dados").value);
	adiciona.push(i);
	for (x=0;x < adiciona.length; x++){
		acumula += adiciona[x] + "</br>"
	}
	document.getElementById("adicionados").innerHTML = acumula;
	organiza()
}
function desfazer(){
	var i; var acumula = ""; var x;
	adiciona.pop()
	rol = []
	for (x=0;x < adiciona.length; x++){
		acumula += adiciona[x] + "</br>"
	}
	document.getElementById("adicionados").innerHTML = acumula ;
	acumula =""
	organiza()	
}
function limpar(){	
	document.getElementById("adicionados").innerHTML = "" ;
	document.getElementById("organizado").innerHTML = "" ;
	document.getElementById("total").innerHTML = "" ;
	adiciona=[]
	rol=[]
}
function retirar(){
	var elemento = parseFloat(document.getElementById("dados").value);
	var tamanho = adiciona.length
	var i,posi,acumula =" ";
	for(i=0;i<tamanho;i++){
		if(adiciona[i]== elemento){
			posi = i
			break;
		}
	}
	adiciona.splice(i, 1)
	rol = []
	for (x=0;x < adiciona.length; x++){
		acumula += adiciona[x] + "</br>"
	}
		document.getElementById("adicionados").innerHTML = acumula ;
	acumula =""
	organiza()
}
//////////////////////////////////////////////////////// organiza�ao de dados
function organiza(){
	var x; var acumula = "";
	for (x=0;x < adiciona.length; x++){
		rol[x] = parseFloat(adiciona[x])
	}
	rol.sort(function(b, a){return b - a})
	for (x=0;x < adiciona.length; x++){
		acumula += rol[x] + "</br>"
	}
	document.getElementById("organizado").innerHTML = acumula;
	document.getElementById("total").innerHTML = adiciona.length;
}
