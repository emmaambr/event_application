# Event application 

This is an application where the user can browse through active events or create their own. 

## Project setup:

Java v. 19

- Clone project to VSCode 

- Download docker desktop, and run following command in terminal/cmd: 
- docker run --name mysql -e MYSQL_ROOT_PASSWORD=secretpw -e 'MYSQL_ROOT_HOST= %' -e MYSQL_DATABASE=test -e MYSQL_USER=user -e MYSQL_PASSWORD=password -p 3306:3306 -d mysql:latest
- Create launchfile and add: "env": {"DB_PASSWORD": "password"}
- Install plugin: https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-mysql-client2 
- Create DB connection in VSCode. 

- Open BackendApplication.java file and run project 
- Open integrated terminal in frontend folder and run following command: 
- npm install 
- npm start
