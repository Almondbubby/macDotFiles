require("almond.remap") 
require("almond.set")

vim.opt.completeopt=menu,menuone,noselect

require('lspconfig').gdscript.setup{capabilities = require('cmp_nvim_lsp').default_capabilities(vim.lsp.protocol.make_client_capabilities())}

