# Prueba Técnica - Novae

_Repositorio que contiene los fuentes de la presentación de la prueba técnica para
optar por el cargo de desarrollador para la empresa Novae_

_Para cumplir con los requerimientos de la prueba, se utilizan las siguientes tecnologias:_

_Docker_

_Postgres_

_Spring Boot_

_Java 1.8_

_maven_

_ReactJS_

_NodeJS_

_Git_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo._

Mira **Instalación** para conocer como instalar el proyecto en un ambiente local.


### Pre-requisitos 📋

_Que software necesitas y como verificar que lo tienes instalado ?_

_Docker_

_Verificar que esta instalado y se esta ejecutando el servicio con el siguente comando_
```
# docker info
```

_Git_

_Verficar que esta instalado con el siguiente comando_

```
# git version
```

_maven_

_Verficar que esta instalado con el siguiente comando_

```
# mvn --v
```

_Puertos locales del Computador_

_Verficar que los puertos 6002 (ReactAPP), 6001 (SpringBoot App) y 5432 (Postgresql) estan disponibles, ya que son utilizados por los contenedores Docker del proyecto_

**nota:** no es propósito de esta guia, explicar la instalación y configuración de _Docker_, _Git_ o _maven_, se asume que ya estan instalados y configurados.

### Instalación POSTGRESQL 🔧

_Las siguientes instrucciones se deben seguir en orden y secuencialmente para poder tener la instalación del proyecto_

_Clonar el repositorio que contiene todo el codigo fuente en alguna ubicación_

```
# git clone https://github.com/admezalo/novae_poc.git
```

_Ubicarse o ingresar al repositorio que se acabo de clonar que se llama **novae_poc**_

```
novae_poc# 
```

_Crear una red interna en docker para la conexión de los contenedores_

```
novae_poc# docker network create --driver=bridge --subnet=192.168.90.0/24 br5
```

_Ejecutar el siguiente comando Docker para crear el contenedor de BDD Postgresql_

```
novae_poc# docker run -p 5432:5432 --name novae_postgresql --hostname novae_postgresql -e POSTGRES_PASSWORD=novae_test_2021 --network br5 --ip 192.168.90.5 -d postgres
```

_Ya descargada la imagen de postgresql y ejecutandose el contenedor, consultar el nombre del contenedor con el siguiente comando para confirmar que se creo con exito_

```
novae_poc# docker ps
```

**Nota** debe aparecer el contenedor con el nombre **novae_postgresql**

_En una terminal nueva, vamos a ingresar a ese contenedor para cargar los scripts de BDD, con el nombre del contenedor que se consulto en el paso previo_

```
novae_poc# docker exec -it novae_postgresql bash
```

_Asi ya ingresamos al contenedor de Postgresql en una terminal **bash** y se deberia ver algo parecido a lo siguente, puede variar el id del nombre del contenedor:_

```
root@novae_postgresql:/#
```

_Desde ese mismo terminal, ahora vamos a ingresar al motor de base de datos postgresql con el siguiente comando_

```
root@novae_postgresql:/# psql -U postgres
```

_Se debe ver algo asi para confirmar que ya estamos adentro de la base de datos, puede variar el nombre de la terminal dependiendo el id del contenedor_

```
postgres=#
```

_Cargar los scripts de base de datos, estan en este mismo proyecto en la carpeta **./resource_app/ScriptBDD.SQL**, copiar todo el contenido y pegarlo en la terminal de postgresql que esta abierta del paso anterior_

_O cargar los scripts a traves del gestor de base de datos de su preferencia, conectandose al contenedor con los siguientes datos de autenticacion_

**Pueerto** 5432
**Usuario** postgres
**Contraseña** novae_test_2021

_Verificar que no existieran errores en la carga de los script de base de datos._



_Podemos salir de las terminales con el comando **exit**, la terminal de postgresql, y la terminal del contenedor, ya no se necesitan mas_

**Nota** Asegurarse que el contenedor de _postgresql_ sigue ejecutandose despues de cerrar las terminales, se puede ver con el siguiente comando

```
novae_poc# docker ps
```

### Instalación SPRINGBOOT APP 🔧

_Ingresar al siguiente directorio del proyecto_

```
novae_poc# cd ./docker_springboot_back
```

_Ejecutar el siguiente comando limpiar cache de maven_

```
docker_springboot_back# mvn clean
```

_Ejecutar el siguiente comando construir el jar con maven_

```
docker_springboot_back# mvn package
```

_Ejecutar el siguiente comando Docker para construir la imagen_

```
docker_springboot_back# docker build -t docker_springboot_back .
```

_Cuando finalice la descarga y construcción de la imagen, ejecutar el siguiente comando docker para crear el contenedor_

```
docker_springboot_back# docker run -p 6001:6001 --name docker_springboot_back --network br5 --ip 192.168.90.6 --link novae_postgresql -e spring.datasource.url=jdbc:postgresql://192.168.90.5:5432/postgres -d docker_springboot_back
```

### Instalación REACTJS APP 🔧

_Ingresar al siguiente directorio del proyecto_

```
novae_poc# cd ./docker_reactjs_front
```

_Ejecutar el siguiente comando para la instalación de dependencias npm_

```
docker_reactjs_front# npm install
```

_Ejecutar el siguiente comando para la construcción de fuentes para empaquetar_

```
docker_reactjs_front# npm run build
```

_Ejecutar el siguiente comando Docker para construir la imagen_

```
docker_reactjs_front# docker build -t docker_react_front .
```

_Cuando finalice la descarga y construcción de la imagen, ejecutar el siguiente comando docker para crear el contenedor_

```
docker_reactjs_front#  docker run -p 6002:6002 --name docker_react_front --network br5 -d docker_react_front
```

### Verificación del despliegue 🔧

_Desde cualquier terminal, con el siguiente comando se deben poder ver los tres contenedores ejecutandose_

```
novae_poc# docker ps
```

_Desde el navegador ingresar a la direccion **http://localhost:6002/** y poder navegar en la APP Web_

### RUTAS SpringBoot APP Modelo tb_user 🔧

**GET**

_Todos los Usuarios_

http://localhost:6001/api/v1/user

_Usuario por DNI_

http://localhost:6001/api/v1/user/{DNI}

**POST**

_Guardar un Usuario_

http://localhost:6001/api/v1/user

**DELETE**

_Eliminar Usuario por DNI_

http://localhost:6001/api/v1/user/{DNI}


### RUTAS SpringBoot APP Modelo tb_credit_card 🔧

**GET**

_Todos las tarjetas de crédito_

http://localhost:6001/api/v1/card

_Tarjeta de Crédito por numero_

http://localhost:6001/api/v1/card/{card_number}

_Tarjeta de Crédito asociadas a una persona por DNI_

http://localhost:6001/api/v1/card/dni/{DNI}

**POST**

_Guardar una Tarjeta de Crédito_

http://localhost:6001/api/v1/card

**DELETE**

_Eliminar tarjeta de credito por numero_

http://localhost:6001/api/v1/card/{card_number}


## Autor ✒️

* **Alex Daniel Meza López**