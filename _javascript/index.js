function bod(){
    var _interface =
//cabeçalho/////////////////////////////////////////////////////////////////////////////////////
            '<header id="cabecalho">'+ 
            '<figure><img src="../_img/logo_estatistica4.png" /></figure>"'+
            '<nav id="menuEstatistica">'+
                '<ul type="disc">'+
                    '<li ><a onclick="abrirCorpoConceitos()">Conceitos</a></li>'+
                    '<li ><a target="_blank" href="">Técnicas de</br> Amostragem</a></li>'+
                    '<li ><a onclick="abrirCorpoFrequencia()">Distribuição de</br> Frequência</a></li>'+
                    '<li ><a  href="">Distribuição</br> Normal</a></li>'+
                    '<li ><a target="_blank" href="">Distribuição</br> Binomial</a></li>'+
                    '<li ><a target="_blank" href="">Distribuição de</br> Poisson</a></li>'+
                    '<li ><a target="_blank" href="">Intervalo de</br> confiança</a></li>'+
                    '<li ><a target="_blank" href="">Distribuição</br> Uniforme</a></li>'+
                    '<li ><a target="_blank" href="">Correlação</a></li>'+
                '</ul>'+
            '</nav>'+
            '</header>'+
//campo da tabela dos dados//////////////////////////////////////////////////////////////////////
//rol e dados////////////////////////////////////////////////////////////////////////////////////
            '<div id="corpoFrequencia" style="display:none">'+
                '<section id="corpoTabelaFrequencia">  '+
                    '<table id="tabelaFrequencia"> '+
                        '<tr >'+
                            '<td> <strong class="passarMouse">Adicionados<div id="mostrar">'+
                                'cccccccccccccccc</br>'+
                                'cccccccccccccccc</br>'+
                                'cccccccccccccccc</br>'+
                                'cccccccccccccccc</br></div></strong>'+
                            '</td>'+
                            '<td> <strong class="passarMouse">Rol<div id="mostrar">cccccccccccccccc</br>'+
                                'cccccccccccccccc</br>'+
                                'cccccccccccccccc</br>'+
                                'cccccccccccccccc</br></div></strong>'+
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
                            '<button type="button" class="botao" onclick="adicionar()"> Adicionar </button>'+
                            '<button type="button" class="botao" onclick="desfazer()"> Desfazer </button></br>'+
                            '<button type="button" class="botao" onclick="limpar()"> Reiniciar </button>'+
                            '<button type="button" class="botao" onclick="retirar()"> Retirar elemento </button>'+
                        '</h4>'+
                    '</div> '+                              
                    '</br>'+
                    '<table > '+
                        '<tr><td> <strong>Total de Números Inseridos</strong> </td></tr>'+
                        '<tr><td id="total"></td></tr>'+
                    '</table>'+    
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
            '<div id="corpoConceitos">'+
                '<h1>Conceitos</h1>'+
                '<p>aa</p>'+
            '</div>';          
document.getElementById("interface").innerHTML = _interface
}
// mudança dos menus//////////////////////////////////////////////////////////////////////////////
function abrirCorpoFrequencia(){
    document.getElementById("corpoFrequencia").style.display="block";
    document.getElementById("corpoConceitos").style.display="none";
}
function abrirCorpoConceitos(){
    document.getElementById("corpoConceitos").style.display="block";
    document.getElementById("corpoFrequencia").style.display="none";
}
