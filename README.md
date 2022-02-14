# pokedex

# Preview Image
### Tamaño Web
![image](https://user-images.githubusercontent.com/57992471/153250363-94e25bca-bbf2-4dd7-b07c-94bcbca3cf18.png)

### Tamaño Mobile
![image](https://user-images.githubusercontent.com/57992471/153250433-45d65be2-34d7-4a21-a85a-29cb57bb41fb.png)


Proyecto de Vue Js, implementando la API de [Pokemon](https://pokeapi.co/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Special Directories

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `src/main.js`.

### `router`

The router directory contains your application routes, these routes are from the views and each needs to be imported.

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

### `views`

This directory contains your application views

### Tecnologías usadas

`Vue js`, `Vuetify`, `Jest`, `SonarQube`, `axios`, `vue router `

Para la instalación de SonarQube se puede realizar desde la imagen de docker
[SonarQube](https://hub.docker.com/_/sonarqube?tab=tags)
y seguir los pasos del siguiente [link](https://docs.sonarqube.org/latest/setup/get-started-2-minutes/)

para la configuración sólo se debe editar el archivo que está en la raiz del proyecto, sonar.js

```js
    serverUrl: 'http://localhost:9000/',
    token: 'tokenGeneradoPorSonar',

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
