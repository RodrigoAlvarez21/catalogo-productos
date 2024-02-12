import React from 'react'
import logo from './img/logo.jpg';
import eggplantrayada from './img/1.PNG';
import mambaazul from './img/2.PNG';
import flytrapmorado from './img/3.PNG';
import nightfury from './img/4.PNG';
import carbonobat from './img/5.PNG';



export const SegundoComponente = () => {
  return (
    <div><body>
    <header>
        <a href="#" class="logo">
            <img src={logo} alt="logo de la compania"/>
            <h2 id="encabezado1">Integradora</h2>
        </a>
        
        <nav>
            <a href="index.html" class="nav-link">Inicio</a>
          
            <a href="catalogo/catalogo.html" class="nav-link">Boards</a>
            <a href="" class="nav-link">wear</a>
            <a href="" class="nav-link">shappers</a>
            <a href="" class="nav-link">outdooor&fitness</a>
            <a href="" target="_self" class="nav-link">marcas</a>

        </nav>
    </header>
    
  <a href="#"><img src={eggplantrayada} class="img-product-1"  alt="Tabla-surf"/> </a>
  <a href="#"> <img src={mambaazul} class="img-product-2"  alt="Tabla-surf-azul"/> </a>
    <a href="#"> <img src={flytrapmorado} class="img-product-3"  alt="Tabla-surf-morado"/> </a>
    <a href="#"> <img src={nightfury} class="img-product-4"  alt="Tabla-surf-night"/> </a>
    <a href="#"> <img src={carbonobat} class="img-product-5"  alt="Tabla-surf-carbono"/> </a>
</body></div>
  )
}
