@echo off
title Servidor - Monitor Epidemiológico em Tempo Real
color 0b
cd /d "%~dp0"

echo ====================================================================
echo   INICIANDO MONITOR EPIDEMIOLOGICO E VIGILANCIA SANITARIA (AO VIVO)
echo ====================================================================
echo.
echo [1/3] Verificando dependencias...
if not exist node_modules (
    echo Instalando pacotes necessarios...
    call npm install
)

echo [2/3] Abrindo o painel no navegador em http://localhost:3000...
start http://localhost:3000

echo [3/3] Iniciando o servidor Node.js...
echo.
echo ====================================================================
echo Servidor ativo em: http://localhost:3000
echo Para encerrar o servidor, pressione Ctrl + C ou feche esta janela.
echo ====================================================================
echo.
node server.js

pause
