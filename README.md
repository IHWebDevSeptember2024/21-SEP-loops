# Fork en github con colaboradores

## ¿Qué es un fork?

Un fork es una copia de un repositorio. Hacer un fork de un repositorio es crear una copia de un repositorio en tu propia cuenta de GitHub. Los forks permiten que desarrolles un proyecto sin afectar al proyecto original. Normalmente se utiliza para proponer cambios al proyecto original o para usar el proyecto original como punto de partida para un nuevo proyecto.

## PASO 1: Hacer un fork de un repositorio de ironhack
Solamente una persona de tu grupo debe hacer un fork de un repositorio de ironhack. Para hacer un fork de un repositorio de ironhack, sigue los siguientes pasos:

1. Entra en la página del repositorio de ironhack que quieres hacer un fork.
2. Haz click en el botón "Fork" en la esquina superior derecha de la página.

## PASO 2: Añadir colaboradores
Una vez que hayas hecho un fork de un repositorio de ironhack, añade a tus compañeros de grupo como colaboradores. Para añadir colaboradores a un repositorio de GitHub, sigue los siguientes pasos:

1. Entra en la página de tu fork.
2. Haz click en la pestaña "Settings" en la parte superior derecha de la página.
3. Haz click en "Collaborators" en el menú de la izquierda.
4. Escribe el nombre de usuario de tus compañeros de grupo en el campo de búsqueda.

## PASO 3: Clonar el repositorio
Todas las personas de tu grupo deben clonar el repositorio de GitHub en su ordenador. Para clonar un repositorio de GitHub, sigue los siguientes pasos:

1. Haz click en el botón "Code" en la página del repositorio.
2. Copia la URL del repositorio.
3. Abre la terminal.
4. Navega a la carpeta donde quieres clonar el repositorio.
5. Escribe el comando `git clone` seguido de la URL del repositorio.

## PASO 4: Trabajar en el ejercicio por turnos
Una vez que todas las personas de tu grupo hayan clonado el repositorio, podéis empezar a trabajar en el ejercicio por turnos. Para trabajar en el ejercicio por turnos, sigue los siguientes pasos:

1. La primera persona de tu grupo debe hacer un cambio en el repositorio y subirlo a GitHub.

```bash
git add .
git commit -m "Mensaje del commit"
git push origin main
```

2. La segunda persona de tu grupo debe hacer un cambio en el repositorio y subirlo a GitHub.

```bash
git pull origin main
```

Repeta los pasos 1 y 2 tantas veces como rotaciones haya en tu grupo.