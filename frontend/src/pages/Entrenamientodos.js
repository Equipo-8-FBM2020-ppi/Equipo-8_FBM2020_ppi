import { Component } from 'react';
import React from 'react';
import Logo from '../img/LOGO.jpg'
import { Link } from 'react-router-dom';
import '../styles/Entrenamiento.css';

class Entrenamiento_dos extends Component {
    render () {
        return(
            <div>
                <div className="fondo">
                <section className="barra">
                    <img src={Logo} />
                    <h1>Plan de entrenamiento</h1>
                </section>
                <section className="plann">
<<<<<<< HEAD
                    <button className="unoo" ><Link className="un">Circuito 1</Link></button>
                    <button className="doss" ><Link className="dos">Circuito 2</Link></button>
                    <button className="tress"><Link className="tres">Circuito 3</Link></button>
                    <button className="cuatroo"><Link className="cuatro">Circuito 4</Link></button>
                    
                    <button className="atras"><Link className="atra" to="/usario">Atras</Link></button>
=======
                    <button className="unoo" ><Link className="un">Circuito 1<br/><p>Abdomen</p></Link></button>
                    <button className="doss" ><Link className="dos">Circuito 2<br/><p>Brazos</p></Link></button>
                    <button className="tress"><Link className="tres">Circuito 3<br/><p>Piernas</p></Link></button>
                    <button className="cuatroo"><Link className="cuatro">Circuito 4<br/><p>Pecho</p></Link></button>
                    <button className="cincoo"><Link className="cinco">Circuito 5</Link></button>
                    <button className="atras"><Link className="atra" to="/">Inicio</Link></button>
>>>>>>> 31c9795dcb87443716fa98597880eb62b0da63d0
                </section>

                </div>
                
            </div>
        );

    }
}
export default Entrenamiento_dos;