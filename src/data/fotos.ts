import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
// Sem foto, o site mostra o ícone do serviço no lugar.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-vaso-sanitario': 'Técnico desentupindo vaso sanitário com máquina de mola rotativa',
  'desentupimento-de-pia': 'Técnico desentupindo o sifão embaixo da pia da cozinha',
  'desentupimento-de-ralo': 'Mola de desentupimento entrando no ralo do piso',
  'desentupimento-de-esgoto': 'Técnico desentupindo esgoto pela caixa de inspeção com máquina rotativa',
  'desentupimento-de-cano': 'Técnico usando máquina de mola rotativa para desentupir cano',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Desentupimento com equipamento profissional' };
}
