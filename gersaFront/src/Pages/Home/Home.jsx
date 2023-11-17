import React from 'react'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { AboutLink, CarruselComponents, ContainerHome, DescriptionHome, HomeSection, TitleHome } from './HomeStyle'
import Proyects from '../Proyects/Proyects'
import { CarruselContainer, DescriptionCarrusel, ImgProyect, ProyectSection } from '../Proyects/ProyectStyled';
import { DescriptionText } from '../Login/LoginStyled';
import img1 from '../../Components/images/carrusel2img1.jpg';
import img2 from '../../Components/images/carrusel2img2.jpg';
import img3 from '../../Components/images/carrusel2img3.jpg';
import img4 from '../../Components/images/carrusel2img4.jpg';



const Home = () => {
  const proyectosExitosos = [
    {
      imgSrc: img1,
      description: 'PROYECTO HOLCIM COLOMBIA S.A. PLANTA NOBSA (Boyacá) EVALUACION AREAS SITEMA GAS NATURAL PRODUCCIÓN',
    },
    {
      imgSrc: img2,
      description: 'PROYECTO NUEVA TORRE DE CONTROL AEROPUERTO EL DORADO GRUPO FCC',
    },
    {
      imgSrc: img3,
      description: 'PROYECTO CEMEX S.A. PROYECTOS INSPECCION SILOS EN PLANTAS DE CONCRETO GERENCIA SILOS',
    },
    {
      imgSrc: img4,
      description: 'PROYECTO BODEGAS ORION PARQUE IND. INTERPARK CONSTRUCTORA ORION SAS',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };
  
  
  return (
    <div>
<HomeSection>



<ContainerHome>
           <TitleHome>Conoce Nuestra Empresa</TitleHome>
           
          

            <DescriptionHome>Especializada en Interventoría, certificaciones, inspecciones de equipos, END, seguridad industrial y asesorías en áreas de la Industria cementera a nivel nacional.</DescriptionHome>
          
            </ContainerHome>
            <AboutLink>Mas de Nosotros</AboutLink>
           
        
           </HomeSection>

<ProyectSection>
        <TitleHome>Proyectos Exitosos</TitleHome>
  
        <CarruselContainer>
          <Slider {...settings}>
            {proyectosExitosos.map((proyecto, index) => (
              <CarruselComponents key={index} className={`carrusel2-${index + 1}`}>
                <ImgProyect src={proyecto.imgSrc} alt=""  />
            <DescriptionCarrusel>{proyecto.description}</DescriptionCarrusel>
              </CarruselComponents>
            ))}
          </Slider>
        </CarruselContainer>
      </ProyectSection>
      </div>
    );
  };
  


export default Home