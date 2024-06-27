<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# Conversores multiples
### 1. Conversor de divisas mundiales
### 2. Conversor de criptomonedas
### 3. Conversor de temperaturas

- Este es un proyecto simple y pequeño en donde se usa una API para la conversión entre divisas extranjeas a su moneda local, precios de criptomonedas, así como también, el uso de formulas matematicas para la conversión de temperaturas

- Para la creación de este proyecto, solamente se uso las siguientes tecnologías como stack:

```
- MongoDB
- Nest
- Express
- Svelte
- Astro
- Node
```

# Aclaraciones importantes
## API de Divisas
- La API se encuentran en actualizaciones constantes, pero puede variar con respecto a las actualizaciones diarias o incluso semanales
- La API usa como base el dólar estadounidense, siendo que tiene el valor de ```1```  con respecto a las otras monedas
- Para la conversión entre diferentes monedas ajenas al dolar, se usa la formula:
    ``` DivisaUno = DivisaDos/Dólar estadounidense```
- Por último, solamente se hace uso de la petición get para obtener un JSON extenso con dichos valores, favor de leer la fuente https://dinero.today/pages/api

**Api de divisas mundiales: https://dinero.today/pages/api**

## Criptomonedas
- Por el momento, los valores de las criptomonedas están guardadas de forma local, dado que no usé una api de paga para las criptomonedas, pero sin embargo, varias de las apis tienen su versión gratuita mediante un registro

## Temperaturas
- Las temperaturas disponibles son las 3 más comunes/conocidas a nivel mundial: **Celsius C°; Kelvin k; y Farenheit F°**
- Las formulas a usar son las siguientes:
1. Celsius a Farenheit--->**°C**===>**°F**: ```° f = 9/5 (° c) + 32```
1. Kelvin a Farenheit---->**°K**===>**°F**: ```° f = 9/5 (k - 273) + 32```
1. Farenheit a Celsius---> **F°**===>**°C**: ```° c = 5/9 (° f - 32)```
1. Kelvin a Celsius------> **K**====>**°C**: ```°c = k - 273```
1. Celsius a Kelvin------> **°C**===>**K**: ```K = ° c + 273```
1. Farenheit a Celsius --> **°F**===>**K**:```k = 5/9 (° f - 32) + 273```



# [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Pasos para instalar el proyecto de forma local
1. Descargue el proyecto en formato .zip, 
2. O bien, copie el siguiente enlace: `````` y realice el ```git clone``` del repositorio
3. En la terminal de su S.O. o la terminal integrada de su editor de código, realice:
 ```bash
$ npm install
$ yarn
$ pnpm install
 ``` 
para instalar las dependencias de node
4. Use el archivo **.env.template** para ajustar sus necesidadedes de entorno y renombrarlo a **.env**
5. Use el comando ```docker-compose up -d``` para levantar la base de datos
6. Use el comando 
```bash
$ npm run start:dev
$ yarn start:dev
$ pnpm start:dev
```
7. para ejecutar el proyecto en su maquina. 

## Otros comandos
## Test

```bash
# unit tests
$ npm run test
$ yarn test
$ pnpm run test

# e2e tests
$ npm run test:e2e
$ yarn test:e2e
$ pnpm run test:e2e

# test coverage
$ npm run test:cov
$ yarn test:cov
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
