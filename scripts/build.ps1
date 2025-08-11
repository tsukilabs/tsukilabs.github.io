$ErrorActionPreference = 'Stop'
$PSNativeCommandUseErrorActionPreference = $true

pnpm install
pnpm run build

New-Item './dist/CNAME' -Force -ItemType 'file' -Value 'nil.dev.br'
New-Item './dist/.nojekyll' -Force -ItemType 'file'
