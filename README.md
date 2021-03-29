# Prueba Técnica - Novae

_Repositorio que contiene los fuentes de la presentación de la prueba técnica para
optar por el cargo de desarrollador para la empresa Novae_

_Para cumplir con los requerimientos de la prueba, se utilizan las siguientes tecnologias:_

_Docker_

_Postgres_

_Spring Boot_

_Java 1.8_

_ReactJS_

_NodeJS_

_Git_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo._

Mira **Despliegue** para conocer como instalar el proyecto en un ambiente local.


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

_Puertos locales del Computador_

_Verficar que los puertos 6002 (ReactAPP), 6001 (SpringBoot App) y 5454 (Postgresql) estan disponibles_

**nota:** no es propósito de esta guia, explicar la instalación y configuración de _Docker_ o _Git_, se asume
que ya estan instalados y configurados.

### Instalación 🔧

_Las siguientes instrucciones se deben seguir en orden y secuencialmente para poder tener la instalación del proyecto_

_Clonar el repositorio que contiene todo el codigo fuente en alguna ubicación_

```
# git clone https://github.com/admezalo/novae_poc.git
```

_Ubicarse o ingresar al repositorio que se acabo de clonar que se llama **novae_poc**_

```
novae_poc # 
```

_Crear una red interna en docker para la conexión de los contenedores_

```
novae_poc # docker network create net_poc_novae_test
```

_Ejecutar el siguiente comando Docker para crear el contenedor de BDD Postgresql_

```
novae_poc # docker run -p 5454:5432 --name novae_postgresql -e POSTGRES_PASSWORD=novae_test_2021 --network net_poc_novae_test -d postgres
```

_Ya descarga la imagen de postgresql y ejecutandose el contenedor, consultar el id del contenedor con el siguiente comando_

```
novae_poc # docker ps
```

**Nota** se debe copiar y guardar para uso posterior el numero llamado _CONTAINER ID_

_En una terminal nueva, vamos a ingresar a ese contenedor para cargar los scripts de BDD, con el id del contenedor que se consulto en el paso previo, por ejemplo mi id fue **ce62d9b75c61**_

```
novae_poc # docker exec -it ce62d9b75c61 bash
```

_Asi ya ingresamos al contenedor de Postgresql en una terminal **bash** y se deberia ver algo parecido a lo siguente, puede variar el id del nombre del contenedor:_

```
root@4f7da5336fcd:/#
```

_Desde ese mismo terminal, ahora vamos a ingresar al motor de base de datos postgresql con el siguiente comando_

```
root@4f7da5336fcd:/# psql -U postgres
```

_Se debe ver algo asi para confirmar que ya estamos adentro de la base de datos, puede variar el nombre de la terminal dependiendo el id del contenedor_

```
postgres=#
```

_Cargar los scripts de base de datos, estan en este mismo proyecto en la carpeta **./resource_app/ScriptBDD.SQL**, copiar todo el contenido y pegarlo en la terminal de postgresql que esta abierta del paso anterior_


_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Autor ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Alex Daniel Meza López**