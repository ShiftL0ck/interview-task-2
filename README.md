# interview-task-2
Electron приложение запрашивает у Tornado сервера список имён пользователей и сервер высылает ему этот (рандомно) сгенерированный список. 
Вместе с Pyton у вас скорее всего установлен PIP, но всё же отмечу что он обязателен для скачивания и установки зависимостей.
Есть два способа запустить это приложение: первый это как вы и просили отдельным файлом скрипт "install-and-run-script.bat" (возможно его понадобится открыть от имени администратора)
который установит нужные зависимости и затем запустит приложение которое в свою очередь поднимет сервер. Также можно через командную строку запустить скрипты из 
package.json (npm run setup & npm start) с тем же результатом.
Илья
