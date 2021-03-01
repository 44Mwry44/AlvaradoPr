import React from 'react';
import '../Styles/Views/MainPage.scss'
import meme from '../resources/resumen_img1.png'
import memes from '../resources/resumen_img2.png'


function main() {
    return (
      <div>
        <div className = "Articulo">    
            <h1>Una página web - portafolio</h1>
            <h2>Esta página que ve ahora mismo es mi último proyecto</h2>
            <div className = "Bloque1">
                
                <p className = "Texto1">
                    Mi profesor de <i>Programación web</i> nos pidio este sitio como primer trabajo. Por lo que quise implementar mis conocimientos previos en ella, así como una forma de prácticar y reforzar mis conocimientos. El sitio está desarrollado en React, construido a partir de "piezas de Lego" que son algunas de las cosas que puede ver, como estos cuadros de texto diseñados para dividir la página sin problema, así como la barra de navegación superior y la hoja de presentación lateral.
                </p>
                <img className = "img1" src= {meme} />

            </div>

            <div className = "Bloque2">
            <h2>Objetivos y puntos claves del proyecto</h2>
                <div className = "Lista">
                    <ol>
                        <li><b>Práctica</b></li>
                        como se meciona al principio, está página unicamente era una tarea.                   
                        <li><b>Profundizar el conocimiento sobre el alumno</b></li>
                        Gracias a que el alumno habla sobre sus conocimientos, el profesor aprende de nosotros mientras de forma paralela nosotros aprendemos de las tecnologías empleadas para crear una página web.
                        <li><b>Impresión</b></li>
                        La verdad es que me gustaría causar una buena impresión al presentar esta página tan elaborada, donde aplico algunos de mis cocimientos previos que poseo.
                        <li><b>Inversión a futuro</b></li>
                        Me encantaria dar mantenimiento este sitio para posteriormente poder utilizarlo como portafolio web y mostrar mis habilidades y fortalezas.

                    </ol>
                </div>
                <img className = "img2" src = {memes}/>
            </div>
        </div>
      </div>
    );
  }
  
  export default main;
  