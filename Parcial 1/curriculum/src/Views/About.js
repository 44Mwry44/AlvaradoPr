import React from 'react';
import '../Styles/Views/About.scss'
import img1 from '../resources/c++_logo.png'
import img2 from '../resources/cSharp_logo.png'
import img3 from '../resources/java_logo.png'
import img4 from '../resources/css_logo.png'
import img5 from '../resources/html_logo.png'
import img6 from '../resources/js_logo.png'
import img7 from '../resources/mysql_logo.png'
import img8 from '../resources/react_logo.png'
import img9 from '../resources/sqlServer_logo.png'



const About = (props) => 
{
    return(
        <div className = "about">
            <div className = "Resumen">
                <h1>¿Quien soy yo?</h1>
                <p>Bueno, eso es una respuesta complicada. Puedo resumirla unicamente con mi nombre, pero eso lo dejo para otro rublo y, además, puede verlo desplegarse en la hoja de presentación que está a su izquierda en todo momento.
                <br />Soy una chica-T de 20 años que le apasiona la tecnología y los videojuegos. También me gustan otras cosas como la animación, dibujo, psicología y las ciencias en general.
                <br />Una de mis más grandes aspiraciones es el trabajar como una desarrolladora freelance y mudarme a Cánada, donde busco conseguir una vivienda pequeña y vivir tranquilamente de mis conocimientos en la programación.</p>
            </div> 

            <div className = "Curriculum">
                
                <h2>¿Cómo me llamo?</h2>
                Mi nombre es: Amelia Maxine Alvarado Preciado, es un gusto tenerle aquí.
                
                <h2>¿Cuándo es mi cumpleaños? (Fecha de nacimiento)</h2>
                Es el 19/Abril/2000, actualmente tengo 20 años.
                
                <h2>¿De dondé soy?</h2>
                Soy de México. (SAQUÉN ME DE LATINOAMÉRICA!!!)
                
                <h2>¿Cuál es mi trayectoria laboral?</h2>
                Muy corta/nula. Hasta el momento no he tenido ningún trabajo real.
                ¿Buscas una desarrolladora? Estas de suerte, estoy disponible y no cobro mucho... PORFA, CONTRATAME, TENGO HAMBRE Y DESEO UNA GRÁFICA NUEVA PARA MI PC.

                <h2>¿Cuáles son mis estudios?</h2>
                Soy egresada y titulada del CBTis 137 con la especialidad de <i><b>Técnico Programadora</b></i>.

                Actualmente curso la carrera de Ing. en Sistemas Computacionales en el Tecnológico Nacional de México.

                <h2>¿He obtenido algún logro o reconocimiento importante?</h2>
                Supongo que si.
                Durante mi educación preparatoria participe en la <i>Olimpiada Mexicana de Informática</i>, quedando en 3er Lugar a nivel Región.

                <h2>¿Qué idiomas hablo?</h2>
                Hablo Español e inglés.
            </div>
            
            <div className = "TechList">
                <h1>¿Qué tecnologías manejo?</h1>
                <div className = "imgs">
                    <img className = "img" src = {img1} />
                    <img className = "img" src = {img2} />
                    <img className = "img" src = {img3} />
                    <img className = "img" src = {img4} />
                    <img className = "img" src = {img5} />
                    <img className = "img" src = {img6} />
                    <img id = "delfin"className = "img" src = {img7} />
                    <img className = "img" src = {img8} />
                    <img className = "img" src = {img9} />
                </div>
            </div>
            
        </div>
    );
}

export {About as default};

{/* <div className = "TechList">
                <h1>¿Qué tecnologías manejo?</h1>
                <div className = "imgs">
                    <img className = "img" src = {img1} />
                    <img className = "img" src = {img2} />
                    <img className = "img" src = {img3} />
                    <img className = "img" src = {img4} />
                    <img className = "img" src = {img5} />
                    <img className = "img" src = {img6} />
                    <img id = "delfin"className = "img" src = {img7} />
                    <img className = "img" src = {img8} />
                    <img className = "img" src = {img9} />
                </div>
            </div> */}