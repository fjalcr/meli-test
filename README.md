## Test Mercado Libre - Frontend

Puedes revisar las instrucciones de la prueba en el siguiente [enlace](https://github.com/fjalcr/meli-test/blob/main/INSTRUCTIONS.md)

El siguiente proyecto consta de dos secciones

- cliente (NextJs v13).
- Servidor (ExpressJs v4).

Para ambos proyectos, es requerido el uso de las siguientes versiones de Node y NPM:

- NodeJs v14.19.1 o superior
- NPM v6.14.16 o superior

### Inicializar Cliente

- ##### Instalamos las dependencias con el siguiente comando
  #
  ```
  npm install
  ```
- ##### renombrar el archivo de variables de entorno .env.example a .env
  #
- ##### Iniciamos el cliente
  #
  ```
  npm run dev
  ```

### Inicializar Servidor

- ##### Instalamos las dependencias con el siguiente comando
  #
  ```
  npm install
  ```
- ##### renombrar el archivo de variables de entorno .env.example a .env
  #
- ##### Iniciamos el cliente
  #
  ```
  npm run dev
  ```

### Extras

En ambos proyectos podrás encontrar algunos test unitarios a modo de ejemplo

##### Para correr los test en los proyectos, es necesario que utilices el siguiente comando en tu terminal

#

```
npm run test
```

## Consideraciones futuras

En este y otros proyectos, se pueden realizar mejoras, algunas de las mejoras que aplicaría a este proyecto son:

- ###### Cliente
  - Crearía componentes de Loading a fin de alertar al usuario cuando se esté ejecutando una petición a una API y el render del contenido aún no está listo para mostrarse en pantalla.
  - Agregar test end to end a fin de comprobar la mayor cantidad de flujos que un usuario pueda realizar.
  - Agregar un agente de alertas a fin de monitorear cuando algún servicio no está disponible, como por ejemplo. [Sentry](https://sentry.io/welcome/)
  - Utilizaría las imágenes desde alguna CDN a fin de obtener la imagen más apta para la conexión del usuario, por ejemplo con akamai o aws.

#

- ###### Servidor
  - Implementaría JWT a fin de segurizar más los endpoints.
  - Cambiaría el uso de JS por TypeScript, ya que con esto podríamos tener una mejor escalabilidad, mantenimiento y minimizamos errores en la construcción y modificaciónn de los endpoints. (se trabajó con javascript a fin de agilizar el desarrollo debido a que es lo que más uso hoy en día y para realizarlo con typescript requeriría más tiempo para retomar el aprendizaje, sin embargo, recomiendo más el uso de typescript).
  - A futuro, optaría por trabajar un esquema de microservicios, de requerir implementar login, pagos, etc. para este caso, como solo se consume información de los productos, no fue necesario, sin embargo, si se requieren implementar otro tipo de funcionalidades, optaría por el esquema antes mencionado.
  - En este ejercicio se realizó la limpieza de datos, ya que mucha de la información no es requerida, en ese caso optaria por trabajar con Graphql y que con esto el cliente (frontend) puede obtener únicamente los datos que requiera y evitamos agregar procesamiento y mantenimiento al filtrado de datos.
