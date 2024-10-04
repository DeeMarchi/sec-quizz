# SegureMePoll
Um poll didático do básico de segurança do usuário, feito com nodeJs, HTML, CSS e SQL para banco de dados (podendo ser MSSQL, MYSQL ou outra escolha de tecnologia)

Para instalar e executar a aplicação em um ambiente local, realize os seguintes passos

Clone o projeto

	git clone https://github.com/DeeMarchi/sec-quizz.git

Instale os módulos NPM, executando o comando npm install na raíz do projeto

	 npm install


Crie um arquivo ".env" (sem as aspas) na raíz do projeto, que conterá configurações referentes ao banco de dados

	DB_USER=usuarioDb
	DB_PASSWORD=senhaDb
	DB_DATABASE=dbExemplo
	DB_HOST=localhost
	DB_PORT=3306
	DB_DIALECT=mysql

Estando tamém na pasta raíz do projeto, execute os seguintes comandos

	npx sequelize db:create
	npx sequelize db:migrate
	npx sequelize db:seed:all

Estes três comandos realizam as seguintes operações na ordem, cria o banco de dados, cria as tabelas e por último (opcional) adiciona algumas perguntas demo ai projeto

E por fim, exectuar o projeto

	node -r dotenv/config ./server.js

Opcionalmente é possível, rodar utilizando o gerenciador de processos "pm2", para isto será necessário instalar o módulo "pm2" globalmente

	npm i -g pm2

E então por fim, estando ainda na pasta raíz do projeto

	pm2 start
