# 🎨 Douglas Pinturas - Website Profissional

Site institucional desenvolvido em **React** para apresentação de serviços de pintura, galeria de trabalhos realizados e captura de orçamentos via WhatsApp.



## 🚀 Funcionalidades

* **Galeria de Fotos Dinâmica**: Carregamento automático de imagens da pasta `assets` utilizando o sistema de globbing do Vite.
* **Rotas SPA (Single Page Application)**: Navegação fluida entre páginas (Início, Equipe, Galeria, etc.) sem recarregamento de página usando `react-router-dom`.
* **Integração com WhatsApp**: Formulários de "Orçamento" e "Trabalhe Conosco" que formatam os dados e abrem diretamente no WhatsApp do administrador.
* **Design Responsivo**: Adaptado para visualização em dispositivos móveis e desktops.

## 🛠️ Tecnologias Utilizadas

* **React** (Biblioteca principal)
* **Vite** (Ferramenta de build e desenvolvimento rápido)
* **React Router Dom** (Gerenciamento de rotas)
* **CSS3** (Estilização com Flexbox e Grid)

## 📁 Estrutura de Pastas Principal

```text
src/
 ├── assets/
 │    └── images/
 │         └── fotos/      <-- Adicione novas fotos aqui para a galeria
 ├── components/
 │    ├── Galeria.jsx      <-- Lógica de carregamento automático
 │    ├── Menu.jsx         <-- Navegação SPA
 │    └── WhatsAppButton.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── Orcamento.jsx    <-- Form de orçamento via WhatsApp
 │    └── Oportunidade.jsx <-- Form de vagas via WhatsApp
 └── App.jsx               <-- Configuração de rotas
