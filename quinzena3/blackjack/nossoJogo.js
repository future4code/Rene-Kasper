/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   console.log("Bem-vindo ao jogo de Blackjack!")
   if(confirm("Quer iniciar uma nova rodada?")) {
      const uCard1 = comprarCarta();
      const uCard2 = comprarCarta();
      const uPoints = uCard1.valor + uCard2.valor
      console.log("Usuário - cartas: " + uCard1.texto + " e " + uCard2.texto + " - pontuação " + uPoints + " pontos!")

      const cCard1 = comprarCarta();
      const cCard2 = comprarCarta();
      const cPoints = cCard1.valor + cCard2.valor
      console.log("Computador - cartas: " + cCard1.texto + " e " + cCard2.texto + " - pontuação " + cPoints + " pontos!")

      if (cPoints === uPoints) {
         console.log("Empate!")
      } else if (cPoints > uPoints) {
         console.log("Você perdeu!")
      } else {
         console.log("Você ganhou!")
      }
   } else {
      console.log("O jogo acabou.")
   }
   