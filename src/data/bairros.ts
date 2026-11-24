// Regiões administrativas do DF atendidas. Cada uma vira /desentupidora-em-<slug>/.
export type Zona = 'Plano Piloto' | 'Região Central' | 'Região Oeste' | 'Região Sul' | 'Região Leste e Norte';

export interface Bairro {
  slug: string;
  nome: string;
  zona: Zona;
  // Texto exclusivo da página para não repetir conteúdo entre bairros
  sobre: string;
  vizinhos: string[];
}

// Regiões em foco aparecem com selo "Foco" (vazio = todas iguais)
export const zonasPrioritarias: Zona[] = [];
export const ordemZonas: Zona[] = ['Plano Piloto', 'Região Central', 'Região Oeste', 'Região Sul', 'Região Leste e Norte'];

export const bairros: Bairro[] = [
  {
    slug: 'asa-norte',
    nome: 'Asa Norte',
    zona: 'Plano Piloto',
    sobre:
      'Na Asa Norte, os prédios das superquadras e os comércios das entrequadras dividem colunas e redes de esgoto antigas. São comuns chamados de coluna entupida, caixa de gordura de restaurante transbordando e pia de cozinha de apartamento parada.',
    vizinhos: ['Asa Sul', 'Noroeste', 'Lago Norte', 'Cruzeiro'],
  },
  {
    slug: 'asa-sul',
    nome: 'Asa Sul',
    zona: 'Plano Piloto',
    sobre:
      'A Asa Sul tem alguns dos prédios mais antigos de Brasília, com tubulações que já acumulam décadas de gordura e resíduos. Atendemos apartamentos, blocos inteiros e o comércio das quadras 100, 200, 300 e 400.',
    vizinhos: ['Asa Norte', 'Sudoeste', 'Lago Sul', 'Cruzeiro'],
  },
  {
    slug: 'sudoeste',
    nome: 'Sudoeste',
    zona: 'Plano Piloto',
    sobre:
      'No Sudoeste, os prédios residenciais têm muitos apartamentos por coluna, e um entupimento na prumada afeta vários andares. Atendemos desde o vaso de um apartamento até a rede do condomínio.',
    vizinhos: ['Octogonal', 'Cruzeiro', 'Asa Sul', 'Guará'],
  },
  {
    slug: 'noroeste',
    nome: 'Noroeste',
    zona: 'Plano Piloto',
    sobre:
      'O Noroeste tem prédios novos, mas também tem entupimento: resíduos de obra, lenços umedecidos e gordura são as causas mais comuns em ralos, pias e vasos dos apartamentos.',
    vizinhos: ['Asa Norte', 'Cruzeiro', 'Sudoeste', 'Lago Norte'],
  },
  {
    slug: 'lago-sul',
    nome: 'Lago Sul',
    zona: 'Plano Piloto',
    sobre:
      'No Lago Sul predominam casas grandes, com várias caixas de inspeção, ralos externos e áreas de churrasqueira. Atendemos entupimento de esgoto, caixa de gordura e ralos de quintal e garagem.',
    vizinhos: ['Jardim Botânico', 'Asa Sul', 'Park Way', 'São Sebastião'],
  },
  {
    slug: 'lago-norte',
    nome: 'Lago Norte',
    zona: 'Plano Piloto',
    sobre:
      'O Lago Norte mistura casas e condomínios. Os chamados mais comuns são de rede de esgoto entupida entre as caixas de inspeção, ralos externos e pias de cozinha com gordura acumulada.',
    vizinhos: ['Varjão', 'Asa Norte', 'Paranoá', 'Sobradinho'],
  },
  {
    slug: 'cruzeiro',
    nome: 'Cruzeiro',
    zona: 'Região Central',
    sobre:
      'No Cruzeiro há muitos blocos residenciais antigos e casas no Cruzeiro Velho. Atendemos colunas de esgoto entupidas, vasos e ralos de apartamentos e caixas de inspeção das casas.',
    vizinhos: ['Sudoeste', 'Octogonal', 'Asa Norte', 'Guará'],
  },
  {
    slug: 'guara',
    nome: 'Guará',
    zona: 'Região Central',
    sobre:
      'O Guará tem casas, prédios e muito comércio. Atendemos desde a pia entupida de uma cozinha residencial até a caixa de gordura de restaurantes e lanchonetes da região.',
    vizinhos: ['Águas Claras', 'Núcleo Bandeirante', 'Park Way', 'Cruzeiro'],
  },
  {
    slug: 'nucleo-bandeirante',
    nome: 'Núcleo Bandeirante',
    zona: 'Região Central',
    sobre:
      'No Núcleo Bandeirante, as casas e comércios antigos da Avenida Central costumam ter redes de esgoto com muitas emendas e caixas de gordura que precisam de desentupimento periódico.',
    vizinhos: ['Candangolândia', 'Riacho Fundo', 'Park Way', 'Guará'],
  },
  {
    slug: 'aguas-claras',
    nome: 'Águas Claras',
    zona: 'Região Oeste',
    sobre:
      'Águas Claras é cheia de torres altas, e uma coluna entupida pode fazer o esgoto voltar nos andares de baixo. Atendemos apartamentos e condomínios a qualquer hora, inclusive de madrugada.',
    vizinhos: ['Taguatinga', 'Vicente Pires', 'Guará', 'Arniqueira'],
  },
  {
    slug: 'taguatinga',
    nome: 'Taguatinga',
    zona: 'Região Oeste',
    sobre:
      'Taguatinga é uma das regiões mais movimentadas do DF, com muitas casas, prédios e comércios. Desentupimos pias, ralos, vasos e redes de esgoto em Taguatinga Norte, Sul e Centro.',
    vizinhos: ['Águas Claras', 'Ceilândia', 'Vicente Pires', 'Samambaia'],
  },
  {
    slug: 'vicente-pires',
    nome: 'Vicente Pires',
    zona: 'Região Oeste',
    sobre:
      'Em Vicente Pires predominam casas e condomínios horizontais, com quintais, garagens e ralos externos. Atendemos entupimento de esgoto, ralo de área externa e pia de cozinha.',
    vizinhos: ['Taguatinga', 'Águas Claras', 'Guará', 'Estrutural'],
  },
  {
    slug: 'ceilandia',
    nome: 'Ceilândia',
    zona: 'Região Oeste',
    sobre:
      'A Ceilândia é a região mais populosa do DF, com muitas casas e comércios. Atendemos desentupimento de vaso, pia, ralo, cano e rede de esgoto em todos os setores.',
    vizinhos: ['Taguatinga', 'Samambaia', 'Sol Nascente', 'Brazlândia'],
  },
  {
    slug: 'samambaia',
    nome: 'Samambaia',
    zona: 'Região Oeste',
    sobre:
      'Samambaia tem casas, prédios e condomínios novos. Os chamados mais frequentes são de vaso e ralo entupidos e de esgoto voltando em apartamentos térreos.',
    vizinhos: ['Taguatinga', 'Ceilândia', 'Recanto das Emas', 'Riacho Fundo'],
  },
  {
    slug: 'riacho-fundo',
    nome: 'Riacho Fundo',
    zona: 'Região Sul',
    sobre:
      'No Riacho Fundo I e II atendemos casas e condomínios, principalmente com entupimento de pia de cozinha, ralo de área de serviço e rede de esgoto até a caixa de inspeção.',
    vizinhos: ['Núcleo Bandeirante', 'Recanto das Emas', 'Samambaia', 'Park Way'],
  },
  {
    slug: 'recanto-das-emas',
    nome: 'Recanto das Emas',
    zona: 'Região Sul',
    sobre:
      'No Recanto das Emas predominam casas com quintal. Atendemos vaso sanitário entupido, ralos externos e cano do tanque e da máquina de lavar.',
    vizinhos: ['Samambaia', 'Riacho Fundo', 'Gama', 'Santa Maria'],
  },
  {
    slug: 'gama',
    nome: 'Gama',
    zona: 'Região Sul',
    sobre:
      'O Gama tem casas antigas e muitos comércios. Desentupimos redes de esgoto, caixas de gordura, pias e vasos em todos os setores, a qualquer hora do dia ou da noite.',
    vizinhos: ['Santa Maria', 'Recanto das Emas', 'Park Way', 'Riacho Fundo'],
  },
  {
    slug: 'santa-maria',
    nome: 'Santa Maria',
    zona: 'Região Sul',
    sobre:
      'Em Santa Maria atendemos casas, prédios e comércios com desentupimento de vaso, pia, ralo, cano e esgoto, chegando rápido pelos acessos da BR-040.',
    vizinhos: ['Gama', 'Park Way', 'Recanto das Emas', 'Riacho Fundo'],
  },
  {
    slug: 'park-way',
    nome: 'Park Way',
    zona: 'Região Sul',
    sobre:
      'No Park Way as casas ficam em lotes grandes, com redes de esgoto longas até a rua. Usamos molas de grande alcance para desentupir a tubulação sem precisar abrir o terreno.',
    vizinhos: ['Núcleo Bandeirante', 'Lago Sul', 'Guará', 'Riacho Fundo'],
  },
  {
    slug: 'jardim-botanico',
    nome: 'Jardim Botânico',
    zona: 'Região Leste e Norte',
    sobre:
      'No Jardim Botânico predominam condomínios horizontais. Atendemos entupimento de rede de esgoto, caixas de inspeção, ralos externos e pias de cozinha.',
    vizinhos: ['Lago Sul', 'São Sebastião', 'Paranoá', 'Park Way'],
  },
  {
    slug: 'sao-sebastiao',
    nome: 'São Sebastião',
    zona: 'Região Leste e Norte',
    sobre:
      'Em São Sebastião atendemos casas e comércios com desentupimento de vaso, pia, ralo e esgoto, 24 horas por dia.',
    vizinhos: ['Jardim Botânico', 'Lago Sul', 'Paranoá', 'Park Way'],
  },
  {
    slug: 'sobradinho',
    nome: 'Sobradinho',
    zona: 'Região Leste e Norte',
    sobre:
      'Em Sobradinho I e II e nos condomínios da região atendemos desentupimento de esgoto, caixa de gordura, pia, ralo e vaso sanitário.',
    vizinhos: ['Planaltina', 'Lago Norte', 'Paranoá', 'Grande Colorado'],
  },
  {
    slug: 'planaltina',
    nome: 'Planaltina',
    zona: 'Região Leste e Norte',
    sobre:
      'Planaltina tem casas antigas no centro histórico e muitos bairros novos. Atendemos entupimento de vaso, pia, ralo, cano e rede de esgoto em toda a região.',
    vizinhos: ['Sobradinho', 'Arapoanga', 'Paranoá', 'Vale do Amanhecer'],
  },
];

export function bairroPath(b: Bairro) {
  return `/desentupidora-em-${b.slug}/`;
}

export function bairrosPorZona() {
  return ordemZonas
    .map((zona) => ({ zona, bairros: bairros.filter((b) => b.zona === zona) }))
    .filter((g) => g.bairros.length > 0);
}
