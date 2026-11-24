import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
// Sem foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-vaso-sanitario': 'Técnico da Desentupidora Soluções DF desentupindo vaso sanitário em Brasília',
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha com mola rotativa',
  'desentupimento-de-ralo': 'Ralo de banheiro sendo desentupido',
  'desentupimento-de-esgoto': 'Desentupimento de rede de esgoto pela caixa de inspeção',
  'desentupimento-de-cano': 'Máquina de mola rotativa desentupindo cano',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pela Desentupidora Soluções DF' };
}
