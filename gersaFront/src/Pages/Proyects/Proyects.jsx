import React from 'react'
import { CarruselContainer, DescriptionCarrusel, ImgProyect, ProyectSection } from './ProyectStyled'
import { TitleHome } from '../Home/HomeStyle';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { DescriptionText } from '../Login/LoginStyled';
import img1 from '../../Components/images/carrusel2img1.jpg';
import img2 from '../../Components/images/carrusel2img2.jpg';
import img3 from '../../Components/images/carrusel2img3.jpg';
import img4 from '../../Components/images/carrusel2img4.jpg';

const Proyects = () => {
    const proyectosExitosos = [
      {
        imgSrc:img1,
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
    const CustomPrevArrow = (props) => (
      <div className="custom-prev-arrow" onClick={props.onClick}>
        <span style={{ fontSize: '24px', color: 'black', cursor: 'pointer' }}>{'<'}</span>
        <span style={{ marginLeft: '5px', fontSize: '16px', color: 'black' }}>Previous</span>
      </div>
    );
    
    const CustomNextArrow = (props) => (
      <div className="custom-next-arrow" onClick={props.onClick}>
        <span style={{ fontSize: '24px', color: 'black', cursor: 'pointer' }}>{'>'}</span>
        <span style={{ marginLeft: '5px', fontSize: '16px', color: 'black' }}>Next</span>
      </div>
    );
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };

   
    return (
      <ProyectSection>
        <TitleHome>Proyectos Exitosos</TitleHome>
  
        <CarruselContainer>
          <Slider {...settings}>
            {proyectosExitosos.map((proyecto, index) => (
              <div key={index} className={`carrusel2-${index + 1}`}>
                {console.log('Image Source:', proyecto.imgSrc)}
                <ImgProyect src={proyecto.imgSrc} alt=""  />
            <DescriptionCarrusel>{proyecto.description}</DescriptionCarrusel>
              </div>
            ))}
          </Slider>
        </CarruselContainer>
      </ProyectSection>
    );
  };
  
  export default Proyects;
  