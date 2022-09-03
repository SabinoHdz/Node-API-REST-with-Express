# Node-API-REST-with-Express
Desarrollo de API REST utilizando la librería Express de Node

## Instalar el proyecto
* ```npm install```
## Entorno de desarrollo
  * ```npm run dev```
## Entorno de produccion
  *  ```npm run start```
## Informacion de la API o ENDPOINTS
  + Dirección General o fija:
    exmaple: http://localhost:4000/api/v1/
  + Productos
    | Endpoind|Type request| Descripcition|
    |--------|--------|--------|
    |    products   |    GET    | Obtener todos los productos|
    |    products/{id}    |    GET    |Obtener producto por su ID|
    |    products    |    POST    |Agregar producto|
    |    products/{id}    |    PATH    | Actualizar producto por su ID |
    |    products/{id}    |    DELETE   |Eliminar producto por su ID  |
  + Usuarios
      | Endpoind|Type request| Descripcition|
    |--------|--------|--------|
    |    users   |    GET    | Obtener todos los usuarios|
    |    users/{id}    |    GET    |Obtener usuario por su ID|
    |    users    |    POST    |Agregar usuario|
    |    users/{id}    |    PATH    | Actualizar usuario por su ID |
    |    users/{id}    |    DELETE   |Eliminar usuario por su ID  |
   
  + Categorias
    * En desarrollo
## Actualizaciones
  Implementar la funcionalidad de categorias
## Errores encontrados
  * Mostrar información de las categorias
## Librerias Utilizadas
* nodemon
* express
* faker
* joi
* boom
## Herramientas
  * Insomnia o Postman
  * Visual Studio
  * Navegador
## version
  * V 1.0.0
