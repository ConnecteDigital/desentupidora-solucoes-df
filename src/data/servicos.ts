import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
  destaque?: boolean;
}

// Só os serviços que a empresa faz: vaso, pia, ralo, esgoto e cano.
export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    keyword: 'Desentupimento de vaso sanitário em Brasília',
    resumo: 'Vaso que não desce, transborda ou volta água: desentupimos sem quebrar o piso.',
    metaDescription:
      'Desentupimento de vaso sanitário 24h em Brasília e no DF. Vaso entupido, transbordando ou descendo devagar? Chegamos em até 30 minutos, com garantia.',
    icon: 'toilet',
    destaque: true,
    intro: [
      'Vaso sanitário entupido é uma das emergências mais desagradáveis da casa: a água sobe, a descarga não resolve e o banheiro fica interditado. A Desentupidora Soluções DF atende 24 horas em Brasília e em todo o Distrito Federal, inclusive de madrugada, fins de semana e feriados.',
      'Os entupimentos mais comuns são causados por papel em excesso, lenço umedecido, absorvente, fio dental e objetos que caem no vaso. Usamos equipamentos próprios para alcançar a obstrução por dentro da louça e do ramal, sem precisar tirar o vaso ou quebrar o piso na grande maioria dos casos.',
    ],
    sinais: [
      'A água sobe até a borda quando você dá descarga',
      'O vaso esvazia muito devagar ou faz barulho de borbulha',
      'Água voltando pelo ralo do box quando o vaso é usado',
      'Mau cheiro forte de esgoto no banheiro',
      'Algum objeto caiu dentro do vaso',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está na louça, no ramal ou na rede de esgoto',
      'Desobstruímos com equipamento adequado (pressão ou mola rotativa)',
      'Testamos várias descargas seguidas para confirmar o escoamento',
      'Deixamos o banheiro limpo e explicamos como evitar novos entupimentos',
    ],
    faq: [
      {
        q: 'Precisa tirar o vaso do lugar para desentupir?',
        a: 'Na maioria dos casos, não. Os equipamentos alcançam a obstrução pela própria louça. Só retiramos o vaso quando há um objeto preso que não sai de outra forma, e sempre explicando antes.',
      },
      {
        q: 'Posso usar soda cáustica no vaso?',
        a: 'Não é recomendado. A soda pode danificar a louça e a tubulação, e não resolve entupimentos causados por objetos ou lenços. Além disso, deixa a água perigosa para quem for desentupir depois.',
      },
      {
        q: 'Vocês atendem vaso entupido de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, em Brasília e no DF.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    keyword: 'Desentupimento de pia em Brasília',
    resumo: 'Pia da cozinha ou do banheiro parada? Removemos gordura, restos e o que estiver travando o cano.',
    metaDescription:
      'Desentupimento de pia de cozinha e banheiro 24h em Brasília e no DF. Gordura, restos de comida e sifão entupido. Chegamos em até 30 minutos, com garantia.',
    icon: 'faucet',
    destaque: true,
    intro: [
      'A pia da cozinha entope principalmente por gordura que endurece dentro do cano, somada a restos de comida, borra de café e detergente. Na pia do banheiro, o vilão costuma ser cabelo misturado com sabonete e creme dental.',
      'Desentupimos o sifão, a válvula e o ramal até a caixa de gordura ou a coluna do prédio, removendo a obstrução por completo para que o problema não volte na semana seguinte.',
    ],
    sinais: [
      'Água parada na cuba ou descendo muito devagar',
      'Cheiro ruim saindo pelo ralo da pia',
      'Barulho de borbulha quando a água escoa',
      'Água voltando no tanque ou em outra pia',
      'Gordura acumulada e retorno de sujeira pelo ralo',
    ],
    comoFazemos: [
      'Desmontamos e limpamos o sifão quando necessário',
      'Desobstruímos o ramal com mola rotativa até o ponto do entupimento',
      'Removemos a gordura acumulada nas paredes do cano',
      'Testamos o escoamento com bastante água antes de ir embora',
    ],
    faq: [
      {
        q: 'Água quente com detergente desentope a pia?',
        a: 'Pode ajudar em entupimentos bem leves, mas não remove a gordura endurecida mais para dentro do cano. Se a pia continuar lenta, o ideal é desentupir com equipamento.',
      },
      {
        q: 'Vocês desentopem pia de apartamento?',
        a: 'Sim. Atendemos casas, apartamentos e comércios em todo o DF, incluindo o ramal da cozinha até a coluna do prédio.',
      },
      {
        q: 'Quanto tempo leva para desentupir uma pia?',
        a: 'A maioria dos casos é resolvida na mesma visita, em menos de uma hora. Entupimentos com muita gordura acumulada podem levar um pouco mais.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo',
    keyword: 'Desentupimento de ralo em Brasília',
    resumo: 'Ralo do box, da área de serviço ou da varanda acumulando água? Desentupimos e tiramos o mau cheiro.',
    metaDescription:
      'Desentupimento de ralo 24h em Brasília e no DF: box do banheiro, área de serviço, varanda e quintal. Chegamos em até 30 minutos, com garantia.',
    icon: 'drain',
    destaque: true,
    intro: [
      'Ralo entupido faz o box virar uma piscina, alaga a área de serviço e espalha mau cheiro pela casa. O acúmulo de cabelo, sabão, fiapos de roupa, areia e folhas é a causa mais comum.',
      'Desentupimos ralos de banheiro, área de serviço, varanda, garagem e quintal, limpando a caixa sifonada e o ramal até a saída de esgoto ou de águas pluviais.',
    ],
    sinais: [
      'Água acumulando no box durante o banho',
      'Ralo da área de serviço transbordando quando a máquina de lavar esvazia',
      'Mau cheiro ou aparecimento de baratas pelo ralo',
      'Água voltando pelo ralo quando outro ponto da casa é usado',
      'Ralo de varanda ou quintal que alaga quando chove',
    ],
    comoFazemos: [
      'Abrimos e limpamos a caixa sifonada',
      'Desobstruímos o ramal com mola ou jato de água conforme o caso',
      'Retiramos cabelo, sabão e sujeira acumulada',
      'Testamos o escoamento e fechamos tudo como estava',
    ],
    faq: [
      {
        q: 'Por que o ralo do banheiro fica com cheiro de esgoto?',
        a: 'Geralmente a caixa sifonada está suja ou sem o fecho hídrico (a água que barra o cheiro). Limpar e desobstruir o ralo costuma resolver.',
      },
      {
        q: 'Vocês desentopem ralo de área externa e garagem?',
        a: 'Sim. Atendemos ralos internos e externos, incluindo varandas, quintais e garagens.',
      },
      {
        q: 'O ralo entupido pode estar ligado ao vaso?',
        a: 'Pode. Quando a água volta pelo ralo ao dar descarga, o entupimento costuma estar mais à frente, no ramal de esgoto. Nesse caso desentupimos a linha toda.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    keyword: 'Desentupimento de esgoto em Brasília',
    resumo: 'Rede de esgoto, caixa de inspeção e coluna de prédio desentupidas com equipamento profissional.',
    metaDescription:
      'Desentupimento de esgoto 24h em Brasília e no DF: rede, caixa de inspeção, caixa de gordura e coluna de prédio. Chegamos em até 30 minutos, com garantia.',
    icon: 'sewer',
    destaque: true,
    intro: [
      'Quando o esgoto entope, o problema aparece em vários pontos ao mesmo tempo: vasos que não descem, ralos voltando água e mau cheiro forte. Em prédios, uma coluna entupida pode afetar vários apartamentos.',
      'A Desentupidora Soluções DF desentope redes de esgoto de casas, prédios, condomínios e comércios, incluindo caixas de inspeção, caixas de gordura e colunas, com máquinas de mola rotativa de grande alcance.',
    ],
    sinais: [
      'Vários ralos e vasos entupidos ao mesmo tempo',
      'Caixa de inspeção ou caixa de gordura transbordando',
      'Esgoto voltando no apartamento do térreo ou dos primeiros andares',
      'Mau cheiro forte no quintal, na garagem ou na calçada',
      'Barulho de borbulha nos ralos quando a água desce',
    ],
    comoFazemos: [
      'Localizamos o trecho entupido pelas caixas de inspeção',
      'Desobstruímos a rede com máquina de mola rotativa',
      'Limpamos as caixas de inspeção e de gordura envolvidas',
      'Testamos o escoamento em todos os pontos afetados',
    ],
    faq: [
      {
        q: 'Atendem condomínios e prédios?',
        a: 'Sim. Desentupimos colunas e redes coletivas de esgoto em prédios e condomínios em todo o DF, a qualquer hora.',
      },
      {
        q: 'Precisa quebrar o piso para desentupir o esgoto?',
        a: 'Quase nunca. O acesso é feito pelas caixas de inspeção, ralos e pontos de limpeza. Abertura só é indicada quando o cano está quebrado ou amassado, e sempre com seu aceite antes.',
      },
      {
        q: 'Por que o esgoto volta no apartamento térreo?',
        a: 'Quando a coluna ou a rede do prédio entope, a água procura a saída mais baixa, que costuma ser o ralo e o vaso dos andares de baixo. Desentupindo a coluna, o retorno para.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    nome: 'Desentupimento de Cano',
    keyword: 'Desentupimento de cano em Brasília',
    resumo: 'Cano entupido no tanque, na máquina de lavar ou em qualquer ponto da casa, sem quebra-quebra.',
    metaDescription:
      'Desentupimento de cano e tubulação 24h em Brasília e no DF. Tanque, máquina de lavar, cozinha e ramais. Chegamos em até 30 minutos, com garantia.',
    icon: 'pipe',
    destaque: true,
    intro: [
      'Todo cano de esgoto da casa pode entupir: o do tanque, o da máquina de lavar, o da cozinha e os ramais que ligam cada ponto à rede. Gordura, sabão em pó, fiapos de roupa e resíduos de obra são as causas mais frequentes.',
      'Usamos molas rotativas de diferentes espessuras para alcançar o entupimento por dentro da tubulação, em curvas e trechos longos, sem precisar abrir parede ou piso sempre que possível.',
    ],
    sinais: [
      'Tanque ou máquina de lavar demorando para escoar',
      'Água voltando em um ponto quando outro é usado',
      'Barulho de borbulha nos canos',
      'Mau cheiro saindo da tubulação',
      'Entupimento que volta pouco tempo depois de resolver',
    ],
    comoFazemos: [
      'Identificamos em qual trecho do cano está a obstrução',
      'Escolhemos a mola ou o equipamento adequado para o diâmetro do cano',
      'Desobstruímos e retiramos os resíduos acumulados',
      'Testamos o escoamento com água corrente',
    ],
    faq: [
      {
        q: 'Vocês desentopem cano sem quebrar a parede?',
        a: 'Sim, na grande maioria dos casos. A mola rotativa percorre o cano por dentro, inclusive em curvas. Só indicamos abertura quando o cano está quebrado, e sempre com seu aceite antes.',
      },
      {
        q: 'O entupimento sempre volta. Por quê?',
        a: 'Normalmente porque a obstrução só foi furada e não removida, ou porque há gordura acumulada nas paredes do cano. Fazemos a limpeza completa do trecho para evitar que volte.',
      },
      {
        q: 'Atendem cano de máquina de lavar entupido?',
        a: 'Sim. Desentupimos a saída da máquina, o tanque e o ralo da área de serviço.',
      },
    ],
  },
];

export const servicosDestaque = servicos.filter((s) => s.destaque);

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
