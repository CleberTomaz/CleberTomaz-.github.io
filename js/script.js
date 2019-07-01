var imagem_premio = ["img/Smart.jpg","img/Smartwatch.jpg","img/BMWI3.jpg","img/iPhoneXR.jpg","img/BatedeiraPlanetária.jpg","img/ImpressoraMultifuncional.jpg","img/ComputadorAll.jpg","img/DroneFênix.jpg","img/HondaBIZ2019.jpg",
"img/lavadoura.jpg",
"img/xbox.jpg","img/oculosVr.jpg","img/ps4P.jpg","img/filmadora.jpg","img/fogao.jpg","img/geladeira.jpg","img/micro-ondas.jpg","img/notebook.jpg","img/tablete.jpg","img/cadeirag.jpg"];

var nome_premio = ["Smart TV LED 43” LG 43LK5750 Full HD","Smartwatch Colmi Veloce - Shelby Fit","BMW I3","iPhone XR 64GB Preto Tela 6.1” iOS 12 4G 12MP","Batedeira Planetária Kitchenaid Stand Mixer Artisan 10 velocidades",
"Impressora Multifuncional Tanque de Tinta HP Ink Tank 316","Intel Core i3 4GB 1TB LED 21.5 Full HD Windows 10","Drone Fênix GPS Alcance de 300 Metros Multilaser ES204 Branco",
"Honda BIZ 2019","Lavadora de Roupas Samsung 11Kg Automática 12 Programas de Lavagem","Xbox One","Oculos Gear VR Samsung C/ Controle","Playstation 4 Pro 1TB + Controle Wireless",
"Filmadora Sony HDR-PJ270 8GB Full HD Vermelha","Fogão 5 Bocas Consul CFS5 NAR - Acendimento Automático Inox","Geladeira Brastemp Inverse Frost Free",
"Micro-ondas Electrolux MTD30 20 Litros Branco","Notebook Samsung Expert X50 Intel Core i7 8GB 1TB - 15.6” Full HD Placa de Vídeo 2GB Windows 10","Tablet Samsung Galaxy Tab A 10.5 T595 - Preto",
"Cadeira Gamer PCYes Mad Racer V8 Preto"];

var nome_valor = ["1.424,91","191,60","205.950,00","3.519,99","1.499,00","711,55","2.519,10","899,99","9.390,00",
  "2.299,00","1.489,00","589,00","2.999,99","1.359,90","953,10","3.149,00","359,00","2.879,10","1.359,20","974,90"];

var valor_premio = [1424.91,191.60,205950.00,3519.99,1499.00,711.55,2519.10,899.99,9390.00,
  2299.00,1489.00,589.00,2999.99,1359.90,953.10,3149.00,359.00,2879.10,1359.20,974.90];

var valor_palpite;
var rodada_resultado_ganhou=[]
var rodada_resultado_perdeu=[]
var text1
var text2
var contador = -1;


function rodada(){                                                                              //funcao que modifica cada rodada do jogo

  if(contador>18){                                                                              //limpa os elementos da última rodada
    verificar_resposta()
    let element = document.getElementById("principal");
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    document.getElementById('principal').className='esconder_campo';
    document.getElementById('final').className='designdiv';                                     //posiciona os elementos do final
    document.getElementById('titulo_final').innerHTML ="Final do Jogo";
    lista_ganhou = listar_array(rodada_resultado_ganhou)
    lista_perdeu = listar_array(rodada_resultado_perdeu)
    document.getElementById("resultado_ganhou").innerHTML = "Listas de itens que você ganhou:\n" + lista_ganhou;
    document.getElementById("resultado_perdeu").innerHTML = "Listas de itens que você Perdeu:\n" + lista_perdeu;
   }

   else if (contador==-1) {                                                                      //posiciona os elementos do jogo na página
     contador++
     document.getElementById('Valor_rodada').innerHTML ="Rodada: " + (contador+1);
     document.getElementById('nome_premio').innerHTML ="Prêmio: " + nome_premio[contador];
     document.getElementById('nome_botao').innerHTML ="Verificar Resposta";
     document.getElementById('div').className='justifica';
     document.getElementById('img_premio').src = imagem_premio[contador];
     document.getElementById("valor_palpite").placeholder = "0,00";
   }

    else {                                                                                         //modifica os elementos do jogo na página a cada rodada
      verificar_resposta()
      contador++;
      document.getElementById('Valor_rodada').innerHTML ="Rodada: " + (contador+1);
      document.getElementById('nome_premio').innerHTML ="Prêmio: " + nome_premio[contador];
      document.getElementById('img_premio').src = imagem_premio[contador];
      document.getElementById("valor_palpite").value = "";
      document.getElementById("valor_palpite").placeholder = "0,00";
    }
   }

function verificar_resposta(){                                                                      //verifica cada resposta do jogador
valor_palpite = document.getElementById("valor_palpite").value;

  if (valor_palpite >= (valor_premio[contador]*0.9) && valor_palpite <= valor_premio[contador]){    //caso o palpite estiver entre 90% a 100% do preco certo, a pessoa acerta.
    rodada_resultado_ganhou.push(nome_premio[contador]);

    alert('Você GANHOU essa rodada!');
    }
   else{                                                                                            //caso o palpite não estiver entre 90% a 100% do preco certo, a pessoa erra.
      rodada_resultado_perdeu.push(nome_premio[contador]);
      alert('Você PERDEU essa rodada!\n\n' + 'Valor Correto: ' + nome_valor[contador]);
    }
  }

function listar_array(pArray){                                                                      //cria lista de itens a partir de um array
  var  fLen, i;
  fLen = pArray.length;

  text = "<ul>";
  for (i = 0; i < fLen; i++) {
    text += "<li>" + pArray[i] + "</li>";
  }
  text += "</ul>";
  return text
}
