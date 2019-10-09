
<div align="center">
	<div>
		<img width="200" src="http://e-volution.co/wp-content/uploads/2017/09/evolution-desktop.png" alt="Footters Core">
	</div>
    <h1 width="200">Junior Web Developer Test</h1>
	<p>La siguiente es una prueba para evaluar aspectos técnicos de los candidatos a  <b>desarrollador Web Junior</b>.</p>
</div>

## Introducción
Este repositorio contiene una serie de requerimientos de un Caso Práctico, que busca evaluar las capacidades técnicas del candidato con respecto a las principales funciones y responsabilidades que se requieren dentro del área de Desarrollo de Tecnología de _e-volution_.

#### ¿Qué se busca evaluar?
Principalmente los siguientes aspectos:
* Creatividad para resolver los requerimientos.
* Calidad del código entregado (estructura y buenas prácticas).
* Eficiencia de la solución entregada.
* Familiaridad con librerías, frameworks y plataformas de desarrollo.

## Importante
1. No hay tiempo establecido para entregar la prueba. Aun así, recomendamos emplear un máximo de **3-4 días** y enviar todo lo que puedas.
2. Se requiere de una **cuenta de GitHub** para realizar este ejercicio.
3. **Antes de comenzar a programar:**
    * Realizar un `Fork` de este repositorio (https://github.com/evogit/junior-web-developer-test).
    * Clonar el fork a su máquina local  `git clone git@github.com:USERNAME/FORKED-PROJECT.git`
    * Crear un `branch` en su cuenta de GitHub utilizando su nombre completo.
4. Se recomienda añadir un `archivo.md` en la solución aportada para explicar mediante texto lo que se considere oportuno.
5. **Al finalizar**, existen 2 opciones para entregar su proyecto:
    * 1) Realizar un `Commit` de su proyecto, **enviar un `Pull Request` al branch con su nombre**, y notificar a la siguiente dirección de correo electrónico  [jfvalencia@e-volution.co](mailto:jfvalencia@e-volution.co).
    * 2) Crear un archivo comprimido ( _.zip_ ) de su proyecto y enviar a la siguiente dirección de correo electrónico  [jfvalencia@e-volution.co](mailto:jfvalencia@e-volution.co).

## Descripción
Se solicita la creación de una aplicación web para el manejo de los contratistas de una empresa.

### Especificaciones
1. Módulo de CRUD de empleados (Creación, edición, consulta y eliminación de empleados) cuyos campos pueden ser Nombre, apellido, identificación, tipo de contrato, fecha de nacimiento, dirección, teléfono, email
2. Módulo de CRUD de contratistas (Creación, edición, consulta y eliminación de contratistas) cuyos campos pueden ser Nombre, apellido, identificación, fecha de nacimiento, dirección, teléfono, email, empresa. Este módulo debe tener la capacidad de asociar o desasociar por cada contratista n cantidad de empleados (tipo DragDrop) definiendo a esta relación el tiempo en horas a trabajar, el día de inicio de trabajo y el nombre de la obra (No es necesario crud de obras).
3. Un informe tipo tabla cuyo contenido sea el detalle de la relación Contratista-Empleado que contenga las siguientes columnas: Nombre Contratista, nombre empleado, tiempo trabajados en horas, horas que faltan para terminar el contrato, nombre de la obra.


### Notas
* La prueba debe realizarse en NodeJs.
* La prueba debe realizarse con algun framework de Javascript como ReactJs, Angular ó VueJs.
* Se puede usar cualquier motor base de datos, aunque valoramos preferiblemente MongoDB.
* Puntos extras por implementación de unit tests.
* Se valorará un correcto control de errores.
* Total libertad para añadir cualquier funcionalidad extra que considere interesante, ya sea para extender o mejorar la descrita. Siempre bienvenida.
