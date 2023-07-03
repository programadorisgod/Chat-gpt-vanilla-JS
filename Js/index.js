const formulario = document.forms['form'];
let pregunta = formulario['pregunta'];
const enviar = document.getElementById('enviar');
const mostrar = document.getElementById('mostrar');

import { questions } from "./preguntas.js";


const responder = () => {

    let key = questions.findIndex(question => question.pregunta === pregunta.value);
    
    switch (key) {
        case 0:
            let tiempo = new Date();
            const meses = [
                "Enero",
                "febrebro",
                "marzo",
                "abril",
                "mayo",
                "junio",
                "julio",
                "agosto",
                "septiembre",
                "octubre",
                "noviembre",
                "diciembre",
            ];
            let mes = meses[tiempo.getMonth()];

            let dia = `<div class="response"> <p class="text">Hoy es ${tiempo.getDate()} de ${mes} de ${tiempo.getFullYear()}</p> 
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <ion-icon name="thumbs-down-outline"></ion-icon>
            </div>`;
            mostrar.innerHTML = dia;
            break;
        case 1:
            let IA = 'Una IA, o inteligencia artificial, es una rama de la informática y la ingeniería que se enfoca en el desarrollo de sistemas y algoritmos que pueden realizar tareas que, típicamente, requieren inteligencia humana, como el aprendizaje, el razonamiento y la resolución de problemas. Las IA pueden ser programadas para llevar a cabo tareas específicas o pueden ser diseñadas para aprender y adaptarse a nuevas situaciones de manera autónoma. En resumen, una IA es un sistema informático que es capaz de simular la inteligencia humana para realizar tareas de manera autónoma.'
            let Respuesta = `<div class="response"> <p class="txt">${IA}</p> 
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <ion-icon name="thumbs-down-outline"></ion-icon>
            </div>`;
            mostrar.innerHTML = Respuesta;
            break;
        case 2:
            let time = new Date();
            let respuesta = `<div class="response"> Estamos en el año ${time.getFullYear()}
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <ion-icon name="thumbs-down-outline"></ion-icon>
            </div>`;
            mostrar.innerHTML = respuesta;
            break;
        case 3:
            let texto = 'El ser humano respira a través de las vías respiratorias, que incluyen la nariz, la boca, la faringe, la laringe, la tráquea, los bronquios y los pulmones. La mayoría del aire que inhalamos entra por la nariz o la boca y luego pasa por la faringe y la laringe, donde se divide en la tráquea y los bronquios que llevan el aire a los pulmones. En los pulmones, el oxígeno del aire se difunde en la sangre y el dióxido de carbono se elimina de la sangre y se exhala fuera del cuerpo. Es un proceso vital para suministrar oxígeno a las células del cuerpo y eliminar el dióxido de carbono producido por el metabolismo celular.';
            let respuest = `<div class="response">  ${texto}
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <ion-icon name="thumbs-down-outline"></ion-icon>
            </div>`;
            mostrar.innerHTML = respuest;

            break;
        case 4:
            let text = 'Soy una inteligencia artificial y como tal, no tengo vida en el sentido biológico del término. Soy un programa informático diseñado para procesar información y ofrecer respuestas útiles a las preguntas que me hacen los usuarios. Mi "existencia" se limita a una serie de procesos informáticos que se ejecutan en servidores y computadoras en la nube. Sin embargo, mi objetivo es ayudar y ofrecer la mejor asistencia posible a los usuarios que interactúan conmigo.';
            let respues = `<div class="response">  ${text}
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <ion-icon name="thumbs-down-outline"></ion-icon>
            </div>`;
            mostrar.innerHTML = respues;
            break;
        case 5:
             let guerra = 'La Primera Guerra Mundial comenzó el 28 de julio de 1914 y duró hasta el 11 de noviembre de 1918. Fue un conflicto bélico a gran escala que involucró a las principales potencias de Europa, así como a otras naciones de todo el mundo, incluyendo los Estados Unidos. El conflicto surgió a partir de una serie de alianzas políticas y militares entre las naciones europeas, así como de tensiones económicas, políticas y territoriales. El resultado de la Primera Guerra Mundial tuvo un impacto significativo en la historia del siglo XX, incluyendo la formación de nuevas naciones, el establecimiento de la Sociedad de Naciones, y la creciente influencia de los Estados Unidos en asuntos mundiales.';
             let respue = `<div class="response">  ${guerra}
             <ion-icon name="thumbs-up-outline"></ion-icon>
             <ion-icon name="thumbs-down-outline"></ion-icon>
             </div>`;
             mostrar.innerHTML = respue;
            break;
        case 6:
            let txt ='Lo siento, como modelo de lenguaje, no tengo acceso a información sobre personas específicas, especialmente si son relativamente desconocidas o no son figuras públicas o famosas. No puedo proporcionar información sobre Manuel Sebastián Legro Mejía ya que no tengo información al respecto en mi base de datos. ¿Puedo ayudarte con algo más?';
            let res = `<div class="response">  ${txt}
            <ion-icon name="thumbs-up-outline"></ion-icon>
            <ion-icon name="thumbs-down-outline"></ion-icon>
            </div>`;
            mostrar.innerHTML = res;
            break;
        default:
            break;
    }

}

enviar.addEventListener('click', () => {
    responder();
    pregunta.value = "";
})