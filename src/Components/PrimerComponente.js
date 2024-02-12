import React from 'react'
import whitegold from './img/8.PNG.jpeg';
import sectioncompleta from './img/9.PNG.jpeg';
import helicalelement from './img/10.PNG.jpeg';
import aquazenelement from './img/11.PNG.jpeg';
import magmaseal from './img/13.PNG.jpeg';
import quadrantelement from './img/14.png.jpeg';
import solarvibes from './img/15.PNG.jpeg';
import logo from './img/logo.jpg';



export const PrimerComponente = () => {
  return (
    <div><body><header>
    <a href="#" class="logo">
        <img src={logo} alt="logo de la compania"/>
        <h2 id="encabezado1">Integradora</h2>
    </a>
    
    <nav>
        <a href="../index.html" class="nav-link">Inicio</a>
      
        <a href="" class="nav-link">surf</a>
        <a href="" class="nav-link">wear</a>
        <a href="" class="nav-link">shappers</a>
        <a href="" class="nav-link">outdooor&fitness</a>
        <a href="" target="_self" class="nav-link">marcas</a>

    </nav>
</header>
    
<a href="#"> <img class="board-1" src={whitegold} alt="Tabla-1"/></a> 
<a href="#"> <img class="board-1" src={sectioncompleta} alt="Tabla-2"/></a> 
<a href="#"> <img class="board-1" src={helicalelement} alt="Tabla-3"/></a> 
<a href="#"> <img class="board-1" src={aquazenelement} alt="Tabla-4"/></a> 
<a href="#"> <img class="board-1" src={magmaseal} alt="Tabla-5"/></a> 
<a href="#"> <img class="board-1" src={quadrantelement} alt="Tabla-6"/></a> 
<a href="#"> <img class="board-1" src={solarvibes} alt="Tabla-7"/></a> 
</body>
</div>
  )
}

