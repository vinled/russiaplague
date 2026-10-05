@echo off
title Centro de Vigilância Epidemiológica - Monitor em Tempo Real
echo =================================================================
echo   Iniciando Monitor de Vigilancia Epidemiologica e Alertas
echo   Foco: Incidente Irkutsk (Siberia, Russia) e Disseminacao
echo =================================================================
echo.
echo Abrindo navegador em http://localhost:3000...
start http://localhost:3000
echo.
echo Iniciando servidor em tempo real (Pressione Ctrl+C para encerrar)...
node server.js
pause
