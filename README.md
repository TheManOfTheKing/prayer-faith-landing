# Prayer Faith Landing Page

Landing page desenvolvida com React, Vite, TailwindCSS e componentes 3D.

## 🚀 Deploy na Vercel via Github

### Passo 1: Criar Repositório no Github

1. Acesse [github.com/new](https://github.com/new)
2. Nomeie o repositório como `prayer-faith-landing` (ou o nome que preferir)
3. **NÃO** inicialize com README, .gitignore ou licença (já temos esses arquivos)
4. Clique em "Create repository"

### Passo 2: Fazer Push do Código

Após criar o repositório, execute os seguintes comandos no terminal (substitua `SEU_USUARIO` pelo seu nome de usuário do Github):

```bash
cd /home/ubuntu/prayer-faith-landing
git remote add origin https://github.com/SEU_USUARIO/prayer-faith-landing.git
git push -u origin main
```

Quando solicitado, use seu token pessoal como senha.

### Passo 3: Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login
2. Clique em "Add New Project"
3. Selecione "Import Git Repository"
4. Escolha o repositório `prayer-faith-landing` que você acabou de criar
5. Configure o projeto:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (deixe como está)
   - **Build Command**: `pnpm build` (ou deixe o padrão)
   - **Output Directory**: `dist/public` (IMPORTANTE!)
   - **Install Command**: `pnpm install` (ou deixe o padrão)

6. Clique em "Deploy"

### Configurações Importantes para a Vercel

A Vercel precisa saber que o diretório de saída é `dist/public` (não apenas `dist`).

Se você precisar ajustar depois do primeiro deploy:

1. Vá em "Settings" do seu projeto na Vercel
2. Em "Build & Development Settings"
3. Altere "Output Directory" para `dist/public`
4. Salve e faça um novo deploy

## 📦 Estrutura do Projeto

```
prayer-faith-landing/
├── client/           # Frontend React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
│   └── index.html
├── server/           # Backend Express (opcional)
├── shared/           # Código compartilhado
└── package.json
```

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Preview do build
pnpm preview
```

## 📝 Notas

- O projeto usa **pnpm** como gerenciador de pacotes
- Build configurado para gerar arquivos em `dist/public`
- Servidor Express opcional (não necessário para deploy estático na Vercel)
