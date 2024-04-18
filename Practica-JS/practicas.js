// Declarar jugadores de la partida//

const Jugador1 = {
    nombre: "Ezequiel",
    habilidades: {
        Ataque: 1,
        Defensa: 1,
        Velocidad: 1,
        Vida: 1,
    },
    Articulos: ["Espada","Escudo","Manta"],
};

const Jugador2 = {
    nombre: "Joaco",
    habilidades: {
        Ataque: 1,
        Defensa: 1,
        Velocidad: 1,
        Vida: 1,
    },
    Articulos:["Hacha","Armadura","Casco"], 
};


// Variables usadas para calcular los puntos//

let PuntosJugador1 = 0;
let PuntosJugador2 = 0;

let Ganador;


// Calculo de los puntajes de los jugadores //
// Ataque //
if (Jugador1.habilidades.Ataque > Jugador2.habilidades.Ataque) {
    PuntosJugador1++;

} else if (Jugador1.habilidades.Ataque < Jugador2.habilidades.Ataque) {
    PuntosJugador2++;
} else {
    PuntosJugador1++;
    PuntosJugador2++;
}

// Defensa //
if (Jugador1.habilidades.Defensa > Jugador2.habilidades.Defensa) {
    PuntosJugador1++;

} else if (Jugador1.habilidades.Defensa < Jugador2.habilidades.Defensa) {
    PuntosJugador2++;
} else {
    PuntosJugador1++;
    PuntosJugador2++;
}

// Velocidad //
if (Jugador1.habilidades.Velocidad > Jugador2.habilidades.Velocidad) {
    PuntosJugador1++;

} else if (Jugador1.habilidades.Velocidad < Jugador2.habilidades.Velocidad) {
    PuntosJugador2++;
} else {
    PuntosJugador1++;
    PuntosJugador2++;
}

// Vida //
if (Jugador1.habilidades.Vida > Jugador2.habilidades.Vida) {
    PuntosJugador1++;

} else if (Jugador1.habilidades.Vida < Jugador2.habilidades.Vida) {
    PuntosJugador2++;
} else {
    PuntosJugador1++;
    PuntosJugador2++;
}

// Calculo ganador de la partida //

if (PuntosJugador1 > PuntosJugador2) {
    console.log("El ganador es:", Jugador1.nombre);

} else if (PuntosJugador1 < PuntosJugador2) {
    console.log("El ganador es:", Jugador2.nombre);
} else {
    console.log("la partida queda en empate")
}

