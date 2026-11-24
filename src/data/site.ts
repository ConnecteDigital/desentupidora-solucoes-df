// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5561996956134';

export const site = {
  name: 'Desentupidora Soluções DF',
  legalName: 'Soluções DF Desentupidora',
  // PROVISÓRIO: trocar pelo domínio definitivo
  url: 'https://desentupidorasolucoesdf.com.br',
  city: 'Brasília',
  state: 'DF',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (61) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
  arrivalMinutes: 30,
  description:
    'Desentupidora 24 horas em Brasília e todo o DF. Desentupimento de vaso sanitário, pia, ralo, esgoto e cano, sem quebra-quebra. Chegamos em até 30 minutos, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Desentupidora Soluções DF e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Contêiner do Google Tag Manager (único rastreamento do site; conversões ficam nele)
export const gtmId = 'GTM-MC7ZFVQJ';
