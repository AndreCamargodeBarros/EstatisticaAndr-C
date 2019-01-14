// mudança dos menus//////////////////////////////////////////////////////////////////////////////
function abrirCorpo(id){
    document.getElementById('aCC').className='menu';
    document.getElementById('aCF').className='menu';
    if(id=="C"){
        document.getElementById("aCC").className="teste";
        document.getElementById("corpoConceitos").style.display="block";
        document.getElementById("corpoFrequencia").style.display="none";
    }else if(id=="DF"){
        document.getElementById("aCF").className="teste";
        document.getElementById("corpoFrequencia").style.display="block";
        document.getElementById("corpoConceitos").style.display="none";
    }
}
//função da interface////////////////////////////////////////////////////////////////////////////
function bod(){
    var C="'C'", DF="'DF'";//variaveis dos menus
    var _interface =
//cabeçalho/////////////////////////////////////////////////////////////////////////////////////
            '<header id="cabecalho">'+ 
            '<figure><img src="../_img/logo_estatistica4.png" /></figure>"'+
            '<nav class="menuEstatistica">'+
                '<ul type="disc">'+
                    '<li ><a class="menu" id="aCC" onclick="abrirCorpo('+C+');">Conceitos</a></li>'+
                    '<li ><a class="menu"       target="_blank" href="">Técnicas de</br> Amostragem</a></li>'+
                    '<li ><a class="teste" id="aCF" onclick="abrirCorpo('+DF+');">Distribuição de</br> Frequência</a></li>'+
                    '<li ><a class="menu"       href="">Distribuição</br> Normal</a></li>'+
                    '<li ><a class="menu"       target="_blank" href="">Distribuição</br> Binomial</a></li>'+
                    '<li ><a class="menu"       target="_blank" href="">Distribuição de</br> Poisson</a></li>'+
                    '<li ><a class="menu"       target="_blank" href="">Intervalo de</br> confiança</a></li>'+
                    '<li ><a class="menu"       target="_blank" href="">Distribuição</br> Uniforme</a></li>'+
                    '<li ><a class="menu"       target="_blank" href="">Correlação</a></li>'+
                '</ul>'+
            '</nav>'+
            '</header>'+
//campo da tabela dos dados//////////////////////////////////////////////////////////////////////
//rol e dados////////////////////////////////////////////////////////////////////////////////////
            '<div id="corpoFrequencia" style="display:block">'+
                '<section id="corpoTabelaFrequencia">  '+
                    '<table id="tabelaFrequencia"> '+
                        '<tr >'+
                            '<td> <strong class="passarMouse">Adicionados &#8227;<div id="mostrar">'+
                                'Neste campo da tabela </br>'+
                                'seram inseridos os dados </br>'+
                                'na ordem de insersão.</br></div></strong>'+
                            '</td>'+
                            '<td> <strong class="passarMouse">Rol &#8227;<div id="mostrar">'+
                                'Rol é a sequência dos </br>'+
                                'dados brutos ordenada de </br>'+
                                'forma não decrescente.</br>'+
                                '</div></strong>'+
                            '</td>'+
                        '</tr>'+
                        '<tr><td id="adicionados"> </td> <td id="organizado"></td></tr>'+
                    '</table>'+                
                '</section>'+
//inicio da campo de incersão de dados///////////////////////////////////////////////////////////
                '<section id="dadosIniciais">'+
                    '<div>'+
                        '<h1><strong>Distribuição de Frequência</STRONG></h1>'+
                        '<h2><strong> Coleta de Dados </STRONG></h2>'+
                        '<h4> Nome :<input class="campo" type="text" placeholder="Nome da Variável" id="nome"></h4>'+
                        '<h4> Dados:<input class="campo" type="number" placeholder="Números" id="dados"></br>'+
                            '<div class="botoes">'+
                                '<button type="button" class="botao" onclick="adicionar()"> Adicionar </button>'+
                                '<button type="button" class="botao" onclick="desfazer()"> Desfazer </button></br>'+
                                '<button type="button" class="botao" onclick="limpar()"> Reiniciar </button>'+
                                '<button type="button" class="botao" onclick="retirar()"> Retirar </button>'+
                            '</div>'+
                        '</h4>'+
                    '</div> '+                              
                    '<table > '+
                        '<tr><td style="padding:0px"><strong>Total Inseridos:</strong> </td>'+
                        '<td  style="padding-left: 3em" id="total"></td></tr>'+
                    '</table>'+
                    '<div>'+
				        '<h2 class="h2tb"><strong>Tabelas:</strong></h2>'+
				        '<div class="botoestb">'+
                            '<button type="button" class="botaotb" onclick="tbDiscreta()">Discreta</button>'+
				            '<button type="button" class="botaotb" onclick="tbContinua()">Continua</button>'+
                        '</div>'+
                    '</div>'+
                '</section>'+
                '<section id="tbdiscreta">'+
                '</section>'+
                '<section id="calculos"'+
                '</section>'+
            '</div>'+
            
//footer////////////////////////////////////////////////////////////////////////////////////////////////
            '<footer>'+
                '<p>'+
                    'Copyright &copy; 2019 - André Camargo de Barros</br>'+
                    'Facebook  |  Linkedin  | acamargobarros@gmail.com</acamargobarros@gmail>'+
                '</p>'+
            '</footer>'+
//conseitos/////////////////////////////////////////////////////////////////////////////////////////////
            '<div id="corpoConceitos" style="display:none">'+
                '<h1>Conceitos</h1>'+
                '<p>aa</p>'+
            '</div>';          
document.getElementById("interface").innerHTML = _interface
}
//função das tabelas////////////////////////////////////////////////////////////////////////////////////
function tbDiscreta(){
    var escreve =   
                '<div class="corpoTabelaDiscreta">'+
                
                    '<table class="tabelaDiscreta">'+
                        '<h2>Tabela Discreta</h2>'+

                        '<p id="nomevariavel"></p>'+
                        
                        '<td class="tbF">X<sub>i</sub> &#8227;</td>'+
                        '<td class="tbF">f<sub>i</sub> &#8227;</td>'+
                        '<td class="tbF">f<sub>ri</sub>(%) &#8227;</td>'+
                        '<td class="tbF">F<sub>i</sub> &#8227;</td>'+
                        '<td class="tbF">F<sub>ri</sub>(%) &#8227;</td>'+
                        '<td class="tbF" style="text-decoration: overline;">X<sub>p</sub> &#8227;</td>'+
                        '<td class="tbF">&sigma;<sup>2</sup> &#8227;</td>'+
							'<tr>'+
                                '<td class="tbD" id="xivariavel"></td>'+
                                '<td class="tbD" id="fi"> </td>'+
                                '<td class="tbD" Id="fp"> </td>'+
                                '<td class="tbD" Id="F"> </td>'+
                                '<td class="tbD" id="fp2"> </td>'+
                                '<td class="tbD" Id="xi.fi"> </td>'+
								'<td class="tbD" id="variancia"></td>'+
							'</tr>'+
							'<tr>'+
                                '<td class="tbD">Total:</td>'+
                                '<td id="totalfi"> </td> '+
                                '<td class="tbD" Id="totalfp"> </td>'+
                                '<td> </td>'+
								'<td class="tbD"></td><td Id="totalxi.fi"> </td>'+
								'<td Id="variancia"> </td>'+
							'</tr>'+
                    '</table>'+
                    '<div class="tbmedias">'+
					    '<label class="tbLmedias">Média:</label> <label id="media"></label>'+
					    '<label class="tbLmedias">Moda:</label> <label id="moda"></label>'+
					    '<label class="tbLmedias">Mediana:</label> <label id="medianas"></label>'+
                    '</div>'+

                    '<div class="tbdesvio">'+
					'<table >'+
						'<tr>'+
                            '<td class="tbV"></td>'+
                            '<td class="tbV"><strong>Variancia</strong></td>'+
                            '<td class="tbV"><strong>Desvio Padrão</strong></td>'+
                            '<td class="tbVc"><strong>Coeficiente de Variação</strong></td>'+
						'</tr>'+
						'<tr>'+
                            '<td class="tbV"><strong>Amostra</strong></td>'+
                            '<td class="tbV" Id="variA"></td>'+
                            '<td class="tbV" id="dp1"> </td>'+
                            '<td class="tbVc" Id="cv1"> </td>'+ 
						'</tr>'+
						'<tr>'+
                            '<td class="tbV"><strong>População</strong></td>'+
                            '<td class="tbV" Id="variP"></td>'+
                            '<td class="tbV" id="dp2"></td>'+
                            '<td class="tbVc" Id="cv2"> </td>'+
						'</tr>'+
					'</table>'+
				'</div>'+
                '</div>';
		document.getElementById("tbdiscreta").innerHTML = escreve
		calculos()
		discreta()
		
}
function calculos(){
	var escreve = 
				'<button class="btn btn-primary" onclick="grafico()">Gerar Grafico</button>';
	document.getElementById("calculos").innerHTML = escreve;
	
}   