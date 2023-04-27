import shuffle from "lodash.shuffle";
import Iconos from "./iconos";
const NumCartas = 15;   

export default () =>{
    const icons = Iconos();
    let cartas = [];

    while(cartas.length < NumCartas){
        const index = Math.floor(Math.random() * icons);
        const carta ={
            icono: icons.splice(index, 1)[0],
            acierto: false
        };
        cartas.push(carta);
        cartas.push({...carta});
    }
    return shuffle(cartas);
};