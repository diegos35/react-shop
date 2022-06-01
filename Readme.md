1. git init
2. npm init

3. instalacion de react
npm install react react-dom

4.  Creamos Carpeta SRC (se creará el codigo)

5. Creamos Carpeta public (archivos públicos)
Dentro de public y de src creamos index.js

Dentro src creamos carpeta componentes
Dentro de components creamos archivos App.jsx

** Shotcut **
imr 
slr (stateless componet)

instalacion de babel para que el código sirva en cualquier navegador
npm install @babel/core @babel/preset-env @babel/preset-react 

***Instalacion de Webpack******
npm install webpack webpack-cli webpack-dev-server 
webpack y webpack-cli ⇒ bundler del proyecto

webpack-dev-server ⇒ inicializar un servidor en local para mostrar en modo producción o desarrollo nuestra aplicación

babel core ⇒ núcleo de babel

babel/preset-env ⇒ para que javascript y las nuevas funcionalidades funcionen en cualquier navegador

babel/preset-react ⇒ para que react funcione en cualquier navegador

webpack y webpack-cli ⇒ bundler del proyecto

webpack-dev-server ⇒ inicializar un servidor en local para mostrar en modo producción o desarrollo nuestra aplicación

loaders y plugin ⇒ sirven para optimizar o extraer html de los archivos (i.e React)

Archivos de configuración

instalar Css y Sass
1. npm i mini-css-extract-plugin css-loader style-loader sass sass-loader -D

para colocar la imagen 
npm i -D file-loader

para instalar router en react
npm install react-router-dom

****ATOMIC DESING***
<!-- Átomos -->:
Representación de pequeños elementos o unidades
Botón, texto, imagen, etc.
<!-- Molécula -->
Es la uniónde átomos .
Texto + imagen, etc.
<!-- Organismo -->
Es la unión de moléculas
Un header: logo + nav + buscador
<!-- Templates: -->
Es la unión de organismos de forma estructurada formando una sección
Home, about, etc.
<!-- Page: -->
Es la combinación del template, API e interacciones del usuario.

npm install axios
npm install @babel/plugin-transform-runtime