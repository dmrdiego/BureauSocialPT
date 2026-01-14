# Como Publicar o Site Bureau Social

## 🎯 Situação Atual

- ✅ **Código atualizado** com página de Projetos completa
- ✅ **Checkpoint salvo** (versão 96fb77bb)
- ✅ **Servidor de desenvolvimento** funcionando
- ❌ **Site publicado** (https://bureau-q77ebc.manus.space/) ainda mostra versão antiga

## 📋 Como Publicar a Nova Versão

### Opção 1: Via Interface Manus (Recomendado)

1. **Abrir o painel do projeto** no Manus
2. **Localizar o card do checkpoint** mais recente (96fb77bb)
3. **Clicar no botão "Publish"** ou "Publicar"
4. **Confirmar a publicação**
5. **Aguardar** alguns segundos para o deploy
6. **Acessar** https://bureau-q77ebc.manus.space/ para verificar

### Opção 2: Via Build Manual

Se a opção 1 não funcionar, você pode fazer o build manualmente:

```bash
cd /home/ubuntu/bureau-social-portal
pnpm build
```

O build será gerado na pasta `dist/` e pode ser deployado em qualquer serviço de hospedagem estática.

## 🔍 Como Verificar se Funcionou

Após publicar, acesse https://bureau-q77ebc.manus.space/ e verifique:

1. ✅ Menu deve ter: **Início**, **Projetos**, **Contato**
2. ✅ Deve ter seletor de idioma **PT/EN** no header
3. ✅ Ao clicar em "Projetos", deve mostrar:
   - Quinta do Visconde de Salreu
   - Financiamento e Fundos
   - Oportunidades de Parceria
   - Botão de download do relatório PDF

## ❌ Se o Site Antigo Ainda Aparecer

1. **Limpar cache** do navegador (Ctrl+Shift+R ou Cmd+Shift+R)
2. **Abrir em aba anônima** para verificar
3. **Aguardar** alguns minutos (pode haver cache do CDN)

## 📞 Suporte

Se continuar com problemas, entre em contato com o suporte do Manus.

---

**Última atualização:** 04/12/2025  
**Versão do checkpoint:** 96fb77bb
