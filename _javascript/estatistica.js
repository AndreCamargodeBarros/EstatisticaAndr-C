var rol = [] // rol
var adiciona = [] // dados
var freq = [] // frequencia
var xidafrequencia = [] // xi discreta
var media = 0
var inter = 0
var porcentagem = []
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
	document.getElementById("dados").value = "";

	document.getElementById("xivariavel").innerHTML = "";
	document.getElementById("fi").innerHTML = "";
	document.getElementById("fp").innerHTML = "";
	document.getElementById("F").innerHTML = "";
	document.getElementById("fp2").innerHTML = "";
	document.getElementById("xi.fi").innerHTML = "";
	document.getElementById("variancia").innerHTML = "";
	document.getElementById("totalfi").innerHTML = "";
	document.getElementById("totalfp").innerHTML = "";
	document.getElementById("totalxi.fi").innerHTML = "";
	
	adiciona=[]
	rol=[]

	xidafrequencia=[]
	freq=[]
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
//organização//////////////////////////////////////////////////////// 
function organiza(){
	var x; var acumula = "";
	for (x=0;x < adiciona.length; x++){
		rol[x] = parseFloat(adiciona[x])
	}
	rol.sort(function(b, a){return b - a})
	for (x=0;x < adiciona.length; x++){
		acumula += rol[x] + "</br>"
	}
	document.getElementById("organizado").innerHTML = acumula
	document.getElementById("total").innerHTML = adiciona.length;
}
//tabelas discreta///////////////////////////////////////////////////
function discreta(){
	xidafrequencia=[]
	freq=[]	
	var i=0, j=0, cont = 0, posi = 0;
	var nome = document.getElementById("nome").value;
	var acumula = ""
	document.getElementById("nomevariavel").innerHTML = "Variável: " + nome;
	while (i < rol.length){
		for(j=0;j<rol.length;j++){		
			if (rol[i] == rol[j]){
				cont++;
				posi = j
			}	
		}
		freq.push(cont)
		cont = 0
		xidafrequencia.push(rol[i])
		//variavelgrafico.push(rol[i])
		i = posi + 1;
	}
	for(i=0;i<xidafrequencia.length;i++){
		acumula += xidafrequencia[i] + "</br>";
	}
	document.getElementById("xivariavel").innerHTML = acumula;
	acumula = ""
	nome = 0
	for(i=0;i<xidafrequencia.length;i++){
		acumula += freq[i] + "</br>";
		nome += freq[i];
	}
	document.getElementById("fi").innerHTML = acumula;

	document.getElementById("totalfi").innerHTML = nome;
	fporcem()
} 
function fporcem(){
	var total = 0;
	var i, somafi =0, acumula = "", aux = 0
	var porcem = []
	for(i=0;i<freq.length;i++){
		somafi += freq[i]
	}
	for(i=0;i<freq.length;i++){
		aux = (freq[i] * 100) / somafi
		porcem[i] = parseFloat(aux.toFixed(2))
		porcentagem[i] = porcem[i]
	}
	for(i=0;i<freq.length;i++){
		acumula += porcem[i] + "%" + "</br>"
		total += porcem[i]
	}
	document.getElementById("fp").innerHTML = acumula;
	document.getElementById("totalfp").innerHTML = total.toFixed(2) + "%";
	efao(porcem)
}
function efao(porcem){
	var i,acumula =""
	var fgrande = [], xifi = []
	var fgp = []
	var aux = 0;
	for (i=0;i<freq.length;i++){
		aux += freq[i]
		fgrande[i] = aux
	}
	for (i=0;i<fgrande.length;i++){
		acumula += fgrande[i] + "</br>"
	}
	aux = 0
	document.getElementById("F").innerHTML = acumula;
	acumula= ""
	
	for (i=0;i<porcem.length;i++){
		aux += porcem[i]
		fgp[i] = parseFloat(aux.toFixed(2))
	}
	for (i=0;i<fgp.length;i++){
		acumula += fgp[i] +"%"+ "</br>"
	}
	document.getElementById("fp2").innerHTML = acumula;
	aux = 0;
	acumula= ""
	for (i=0;i<xidafrequencia.length;i++){
		xifi[i] = xidafrequencia[i] * freq[i]
	}
	for (i=0;i<fgp.length;i++){
		acumula += xifi[i] + "</br>"
	}
	document.getElementById("xi.fi").innerHTML = acumula;
	media1(xifi)
	
	
}
function media1(xifi){
	var i, acumula =""
	var somafi=0, somafixi=0;
	for (i=0;i<xifi.length;i++){
		somafixi += xifi[i]
		somafi += freq[i]
	}
	media = somafixi / somafi
	document.getElementById("media").innerHTML = parseFloat(media.toFixed(2));
	document.getElementById("totalxi.fi").innerHTML = parseFloat(media.toFixed(2));
	mediaponderada = parseFloat(media.toFixed(2))
	moda()
	variancia()
	mediana()
}
function moda(){
	var i, posi=0, moda;
	var maior = freq[0]
	for(i=1;i<freq.length;i++){
		if(freq[i]>maior){
			maior = freq[i]
			posi = i
		}
	}
	moda = xidafrequencia[posi];
	document.getElementById("moda").innerHTML = moda;
}
function mediana(){
	var i, mediana = 0 , posi1 = 0, posi2=0, x = rol.length;
	if (x%2 == 0){
		posi1 = x / 2
		posi2 = x / 2 
		posi2 += 1
		mediana = parseFloat(rol[posi1]) + parseFloat(rol[posi2])
		mediana /= 2
	}
	else {
		posi1 = (x + 1)/2
		mediana = parseFloat(rol[posi1])
	}
	document.getElementById("medianas").innerHTML = mediana;
}
function variancia(){
	var i, acumula="",somatorio = 0, somatoriofi = 0, varianciaP , varianciaA, aux;
	var resultado = []
	for(i=0;i<xidafrequencia.length;i++){
		aux = xidafrequencia[i] - media
		aux = aux * aux
		aux = aux * freq[i]
		resultado[i] = aux

	}
	for(i=0;i<xidafrequencia.length;i++){
		acumula += resultado[i] + "</br>"
	}
	document.getElementById("variancia").innerHTML = acumula;
	for(i=0;i<xidafrequencia.length;i++){
		somatorio += resultado[i]
	}
	for(i=0;i<xidafrequencia.length;i++){
		somatoriofi += freq[i]
	}
	varianciaP = somatorio /  somatoriofi
	varianciaA = somatorio / (somatoriofi - 1)
	document.getElementById("variA").innerHTML = parseFloat(varianciaA.toFixed(2));
	document.getElementById("variP").innerHTML = parseFloat(varianciaP.toFixed(2));
	desviop(varianciaP,varianciaA)
}
function desviop(vp,va){
	var dp1,dp2;
	var cv1,cv2
	dp1 = vp ** 0.5 //populacao
	dp2 = va ** 0.5
	document.getElementById("dp2").innerHTML = parseFloat(dp1.toFixed(2));
	document.getElementById("dp1").innerHTML = parseFloat(dp2.toFixed(2));
	//cv
	cv1 = dp1 / media
	cv2 = dp2 / media
	cv1 = cv1 * 100 // populaçao
	cv2 = cv2 * 100
	document.getElementById("cv2").innerHTML = parseFloat(cv1.toFixed(2)) + "%";
	document.getElementById("cv1").innerHTML = parseFloat(cv2.toFixed(2))  + "%";
	desviopadraop = parseFloat(dp1.toFixed(2))
	desviopadraoa = parseFloat(dp2.toFixed(2))
}
//discreta fim////////////////////////////////////////////////////////////////////////////////////////////