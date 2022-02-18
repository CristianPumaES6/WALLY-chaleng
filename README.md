
<img src="https://miwally.com/wp-content/uploads/2021/07/logo-120.svg" width="200px" style="display: block;
  margin-left: auto;
  margin-right: auto; background: white; padding:15px">



# 🎯🎯Reglas🎯🎯:
- Hacer el proyecto desde 0.
- No se permite plantilla.
- Compartir la pantalla de lo que se esta realizando.
- Trabajar en 2 capas: frontend y backend. (lenguaje de preferencia)
- Tiempo 30 minutos.

## 😨 Chaleng 1 :

Crear CRUD de persona, que tenga como atributo nombre y dni.

## 😵‍💫 Chaleng 2

El nombre persona invertir su sentido.



<br>
<br>
-----------------------------------

# ✌✌ SOLUCION: ✌✌

Para el backend se estara usando **NESTJS** 

*NestJS* es un framework que nos permite trabajar con *TypeScript y procesarlo a javascript*, nestjs expone sus servicios usando la libreria *expressJS* esto los podemos revisar desde el archivo *main.js*

<span style="color: green; font-weight: bold;"> app.controller.ts </span>  => Este archivo es donde exponemos los servicios.


<span style="color: green; font-weight: bold;"> app.service.ts </span> => Aqui implementamos la logica.

<span style="color: green; font-weight: bold;"> app.controller.spect.ts </span> => Aqui estan las pruebas unitarias.

------------------------------------

Para el frontend se estara usando **Angular**

Angular es un framework que nos permite trabajar con TypeScript y procesarlo a javascript.

<span style="color: green; font-weight: bold;"> app.service.ts </span> => Este archivo contiene el consumo de los servicios creados por el backend.

<span style="color: green; font-weight: bold;"> app.component.ts  </span> => Aqui esta la logica del componente, este archivo utiza el archivo app.service.ts

<span style="color: green; font-weight: bold;"> app.component.ts  </span> => Aqui tenemos la interfaz.

