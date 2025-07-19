`config`-In this config folder files for server configuration and logger configuration is done

Setup config.json file in src/config folder using below snippet

```{
  "development": {
    "username": "root",
    "password": "root",
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```
Enter your DB Username and password and config your DB Server

```
By Executing Below command it automatically setsup config.json and various other folder if they are not present already 


Go to Src like ***cd src ***


`````
"execute npx sequelize init command in CLI"

`````

After Entering DB Username and Password create a Database with Below Command

```
npx sequelize db:create

```
````
npx sequelize model:generate --name table_name --attributes modelNumber:string,capacity:integer

````

Use Below Command to commit the migrations file or to create table in database
```
npx sequelize db:migrate
```
Can you Below command to migrate back to previous model
```
npx sequelize db:migrate:undo
```

```
