@echo off
title Hi!
echo Wait for instalation process to complete.
cd %CD%
cd %~dp0
npm run setup & npm start
pause