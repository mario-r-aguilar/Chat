# CAB Chat

## Observaciones del proyecto

Código realizado durante el curso de Programación Backend en conjunto con el profesor.
Finalizada la clase se incorporaron los estilos y las funcionalidades para dar aviso de
la conexión de un nuevo usuario y la limitación de la cantidad de mensajes del historial
que se envían por websocket. Asimismo se corrigió el inconveniente de mostrar el
historial cuando un nuevo usuario se conectaba solo cuando escribía por primera vez.

## Dependencias utilizadas

-  El servidor se realizo con **Express**
-  Para la funcionalidad de websocket se utilizó **Socket.io**
-  Las vistas fueron creadas empleando plantillas de **Handlebars**
-  Se uso **Bootstrap** para los estilos
-  Las alertas se manejaron con **Sweetalert2**

## Funcionamiento del chat

1. Al ingresar te pedira que registres tu nombre de usuario.
2. Una vez dentro podrás enviar los mensajes que desees y los mismos iran apareciendo al lado derecho.
3. La página solo mostrará los últimos diez mensajes, siendo el último el que verás primero.
4. Cada vez que ingrese un nuevo usuario te mostrará una alerta avisándote.
