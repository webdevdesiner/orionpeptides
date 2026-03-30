# Especificações Técnicas - Imagens do Catálogo

## 📋 Informações Gerais

Este documento contém as especificações técnicas para criação das imagens dos cards do Acervo de Moléculas.

---

## 🎨 Especificações Técnicas

### **Tamanho da Imagem**
- **Largura:** 256px (64px × 4 = 256px para retina)
- **Altura:** 256px (64px × 4 = 256px para retina)
- **Proporção:** 1:1 (quadrado)
- **Tamanho exibido no card:** 64px × 64px (w-16 h-16 no Tailwind)

### **Formato**
- **Extensão:** `.png` (recomendado) ou `.webp` (para otimização)
- **Formato:** PNG com transparência (alpha channel)
- **Modo de cor:** RGB

### **Qualidade e Otimização**
- **Resolução:** Mínimo 256×256px (recomendado 512×512px para melhor qualidade em telas retina)
- **Profundidade de cor:** 24-bit RGB + canal alpha (32-bit total)
- **Compressão:** PNG sem perda ou WebP com qualidade 90-95%

---

## 📁 Estrutura de Arquivos

As imagens devem ser salvas no diretório:
```
/public/image/catalogo/
```

### **Nomenclatura dos Arquivos**

| Produto | Nome do Arquivo |
|---------|----------------|
| Tirzepatide | `tirzepatide.png` |
| Retatrutide | `retatrutide.png` |
| BPC-157 | `bpc-157.png` |
| TB-500 | `tb-500.png` |
| CJC-1295 + TB-500 | `cjc-tb-500.png` |
| NAD+ | `nad-plus.png` |
| MOTS-C | `mots-c.png` |
| GHK-Cu | `ghk-cu.png` |
| Tesamorelin | `tesamorelin.png` |
| Água Bacteriostática | `agua-esteril.png` |

---

## 🎨 Diretrizes de Design

### **Estilo Visual**
- **Tema:** Bio-Futurista / Científico
- **Estilo:** Ícones ou ilustrações minimalistas
- **Fundo:** Transparente (PNG com alpha)
- **Cores:** Preferencialmente monocromáticas ou com gradiente sutil
- **Linhas:** Finas e precisas (estilo científico/laboratorial)

### **Sugestões de Representação Visual**

#### **Emagrecimento (Amber Glow)**
- Tirzepatide, Retatrutide
- **Sugestão:** Célula de gordura, molécula de lipídio, ou representação metabólica
- **Cor sugerida:** Tons de amarelo/âmbar

#### **Reparação (Emerald Glow)**
- BPC-157, TB-500, GHK-Cu
- **Sugestão:** DNA helix, estrutura molecular de reparo, ou símbolo de regeneração
- **Cor sugerida:** Tons de verde/esmeralda

#### **Músculo/Performance (Red Glow)**
- CJC-1295 + TB-500, Tesamorelin
- **Sugestão:** Músculo estilizado, mitocôndria, ou símbolo de força
- **Cor sugerida:** Tons de vermelho

#### **Cognitivo/Longevidade (Cyan Glow)**
- NAD+, MOTS-C
- **Sugestão:** Neurônio, mitocôndria, ou estrutura molecular de energia
- **Cor sugerida:** Tons de ciano/azul claro

#### **Suprimento (Blue Glow)**
- Água Bacteriostática
- **Sugestão:** Tubo de ensaio, gota de água estilizada, ou símbolo de pureza
- **Cor sugerida:** Tons de azul

---

## 💡 Efeitos Aplicados no Código

As imagens receberão automaticamente:

1. **Drop Shadow Colorido:**
   - Baseado na categoria (amber, emerald, red, cyan, blue)
   - Intensidade: `0 0 15px rgba(cor, 0.5)`

2. **Animação de Flutuação:**
   - Movimento suave vertical (float)
   - Duração: 3 segundos
   - Loop infinito

3. **Background Circular:**
   - Círculo sutil atrás da imagem (`bg-white/5`)
   - Efeito de pulso no hover

---

## ✅ Checklist de Entrega

- [ ] Imagem em formato PNG com transparência
- [ ] Tamanho mínimo: 256×256px (recomendado 512×512px)
- [ ] Proporção 1:1 (quadrado)
- [ ] Nome do arquivo conforme tabela acima
- [ ] Salvo em `/public/image/catalogo/`
- [ ] Fundo transparente
- [ ] Estilo bio-futurista/científico
- [ ] Otimizado para web (tamanho de arquivo razoável)

---

## 📝 Notas Importantes

1. **Transparência:** É essencial que o fundo seja transparente, pois o card tem um background circular sutil.

2. **Cores:** As cores da imagem serão complementadas pelo drop-shadow colorido aplicado via CSS. Você pode criar imagens monocromáticas ou com cores sutis.

3. **Estilo:** Mantenha o estilo consistente entre todas as imagens para uma aparência profissional.

4. **Tamanho do Arquivo:** Tente manter cada imagem abaixo de 100KB para melhor performance.

5. **Retina Display:** Se possível, crie versões @2x (512×512px) para telas de alta resolução.

---

## 🔗 Referências de Cores para Glow

| Categoria | Cor RGB | Código Hex |
|-----------|---------|------------|
| Amber | `rgba(245,158,11,0.5)` | `#F59E0B` |
| Emerald | `rgba(16,185,129,0.5)` | `#10B981` |
| Red | `rgba(239,68,68,0.5)` | `#EF4444` |
| Cyan | `rgba(6,182,212,0.5)` | `#06B6D4` |
| Blue | `rgba(59,130,246,0.5)` | `#3B82F6` |

---

**Última atualização:** Janeiro 2026
