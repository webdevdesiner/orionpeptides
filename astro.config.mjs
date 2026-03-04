// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://orionpeptideos.com',
	integrations: [tailwind(), sitemap()],
	redirects: {
		// Rota de teste → WhatsApp Orion (texto URL-encoded)
		'/par': 'https://wa.me/5511911387063?text=Oi%2C%20equipe%20Orion!%20Cheguei%20pela%20indica%C3%A7%C3%A3o%20de%20Teste%20de%20Desenvolvimento%20e%20gostaria%20de%20um%20atendimento.',
	},

	
	// Para adicionar novas rotas de redirect no futuro:
	// 1. Inclua um novo par "rota": "url-destino" dentro de redirects.
	// 2. Para links do WhatsApp, use: 'https://wa.me/NUMERO?text=' + encodeURIComponent('seu texto aqui').
	// 3. Gere o texto codificado em um console (encodeURIComponent('...')) ou em um site de URL encode.
	// Exemplo: '/minha-rota': 'https://wa.me/5511999999999?text=Ol%C3%A1%21'
});
