const personajes = [
  /*Array con lista de Personajes*/
  {
    nombre: "Goku",
    danio: 35,
    defensa: 40,
    salud: 100,
  },
  {
    nombre: "Jiren",
    danio: 30,
    defensa: 60,
    salud: 120,
  },
  {
    nombre: "Broly",
    danio: 50,
    defensa: 20,
    salud: 90,
  },
];

function elegirPersonaje() {
  /*Mostrar Lista de Personajes*/
  console.log("Lista de personajes disponibles:");
  personajes.forEach((personaje, index) => {
    console.log(`${index + 1}. ${personaje.nombre}`);
  });

  /*Seleccionar el Primer Personaje*/
  let opcion1 = parseInt(prompt("Elige el número del primer personaje")) - 1;
  while (opcion1 < 0 || opcion1 >= personajes.length) {
    opcion1 =
      parseInt(
        prompt("Opción inválida. Elige el número del primer personaje")
      ) - 1;
  }
  let personajesA = personajes[opcion1];

  /*Seleccionar el Segundo Personaje*/
  let opcion2 = parseInt(prompt("Elige el número del segundo personaje")) - 1;
  while (opcion2 < 0 || opcion2 >= personajes.length || opcion2 === opcion1) {
    opcion2 = parseInt(prompt("Opción inválida o personaje repetido")) - 1;
  }
  let personajesB = personajes[opcion2];

  console.log(
    `¡El combate comienza entre ${personajesA.nombre} y ${personajesB.nombre}!`
  );
  return [personajesA, personajesB];
}

/*Funcion de Ataque*/
function atacar(atacante, defensor) {
  let daño = atacante.danio - defensor.defensa;
  daño = daño > 0 ? daño : 0;
  defensor.salud -= daño;
  console.log(
    `${atacante.nombre} ataca a ${defensor.nombre} e inflige ${daño} puntos de daño.`
  );
  console.log(`Salud de ${defensor.nombre}: ${defensor.salud}`);
}

/*Funcion combate*/
function combate(personajesA, personajesB) {
  while (personajesA.salud > 0 && personajesB.salud > 0) {
    atacar(personajesA, personajesB);
    if (personajesB.salud <= 0) {
      console.log(`${personajesA.nombre} ha ganado el combate!`);
      break;
    }
    atacar(personajesB, personajesA);
    if (personajesA.salud <= 0) {
      console.log(`${personajesB.nombre} ha ganado el combate!`);
      break;
    }
  }
}

/*Realiza 3 combates*/
let [personajesA, personajesB] = elegirPersonaje();
for (let i = 1; i <= 3; i++) {
  console.log(`Comienza el combate ${i}`);
  combate(personajesA, personajesB);

  /*Reiniciar la salud de los personajes después de cada combate */
  personajesA.salud = 100;
  personajesB.salud = 100;
}

/*Inico de Combate*/
combate(personajesA, personajesB);
