# Especificações da Imagem do Banner - Catálogo

## 📐 Dimensões e Formato

### Dimensões Recomendadas:
- **Largura:** 1920px (Full HD)
- **Altura:** 600px - 800px (proporção 16:5 ou 16:6)
- **Formato:** PNG ou JPG
- **Resolução:** 72-150 DPI (web)

### Dimensões Alternativas (Responsivas):
- **Mobile:** 768px x 400px
- **Tablet:** 1024px x 500px
- **Desktop:** 1920px x 700px

---

## 🎨 Estilo Visual

### Paleta de Cores:
- **Base:** Tons escuros (preto/cinza escuro)
- **Acentos:** Azuis neon sutis (#3b82f6, #60a5fa)
- **Gradientes:** Transições suaves de preto para cinza escuro

### Estilo de Imagem:
- **Tema:** Científico/Futurista
- **Estética:** Dark Mode / Sci-Fi Clean
- **Elementos Sugeridos:**
  - Estruturas moleculares/peptídeos estilizados
  - Linhas geométricas/redes
  - Partículas/efeitos de luz sutis
  - Padrões abstratos científicos

---

## 🔧 Configurações Técnicas

### Como a Imagem Será Usada:
```html
<img 
    src="/image/catalogo-banner.png" 
    alt="" 
    class="w-full h-full object-cover opacity-40"
/>
```

### Overlay Aplicado:
- **Opacidade da imagem:** 40% (`opacity-40`)
- **Gradiente sobreposto:** Gradiente horizontal escuro no centro
- **Background base:** Gradiente de preto para cinza escuro

### Efeitos Visuais:
- A imagem ficará **sutil** (40% de opacidade)
- Haverá um **gradiente escuro** sobreposto no centro
- O texto ficará **legível** sobre a imagem

---

## 📁 Localização do Arquivo

### Caminho no Projeto:
```
/public/image/catalogo-banner.png
```

### Nome do Arquivo:
- **Recomendado:** `catalogo-banner.png`
- **Alternativas:** `catalogo-hero.png`, `banner-catalogo.png`

---

## 🎯 Referências Visuais

### Páginas Similares no Projeto:
1. **Página Ciência** (`/ciencia`):
   - Usa: `/image/backgroundimage.png`
   - Estilo: Imagem científica com overlay escuro

2. **Página Inicial** (`/`):
   - Usa: Vídeo de fundo (`/video/plexus.mp4`)
   - Estilo: Animado, futurista

### Inspiração para o Banner do Catálogo:
- **Tema:** Produtos/Peptídeos em destaque
- **Estilo:** Similar à página ciência, mas focado em catálogo/produtos
- **Elementos:** Frascos, estruturas moleculares, linhas de conexão

---

## ✅ Checklist de Criação

- [ ] Dimensões: 1920px x 700px (ou proporção similar)
- [ ] Formato: PNG (com transparência opcional) ou JPG
- [ ] Paleta: Tons escuros com acentos azuis sutis
- [ ] Estilo: Científico/Futurista
- [ ] Opacidade: Considerar que será usada a 40%
- [ ] Texto: Garantir que não conflite com texto branco sobreposto
- [ ] Responsividade: Funcionar bem em diferentes tamanhos de tela
- [ ] Tamanho do arquivo: Otimizado para web (< 500KB recomendado)

---

## 📝 Notas Importantes

1. **Opacidade:** A imagem será exibida com 40% de opacidade, então pode ser mais vibrante na criação
2. **Gradiente:** Haverá um gradiente escuro sobreposto no centro
3. **Texto:** O texto "Catálogo" ficará centralizado sobre a imagem
4. **Responsividade:** A imagem será redimensionada automaticamente (`object-cover`)

---

## 🔄 Implementação no Código

Após criar a imagem, ela será adicionada ao banner assim:

```astro
<!-- Imagem de Fundo -->
<div class="absolute inset-0 z-0">
    <img 
        src="/image/catalogo-banner.png" 
        alt="" 
        class="w-full h-full object-cover opacity-40"
    />
    <!-- Gradiente: mais claro nas extremidades, mais escuro no meio -->
    <div 
        class="absolute inset-0"
        style="background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%);"
    ></div>
</div>
```

