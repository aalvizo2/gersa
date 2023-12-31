import React from 'react'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { AboutLink, CarruselComponents, ContainerHome, DescriptionHome, HomeSection, TitleHome ,CarruselContainer, DescriptionCarrusel, ImgProyect, ProyectSection, SliderContainer, SliderContent} from './HomeStyle'


import { DescriptionText } from '../Login/LoginStyled';
import img1 from '../../Components/images/carrusel2img1.jpg';
import img2 from '../../Components/images/carrusel2img2.jpg';
import img3 from '../../Components/images/carrusel2img3.jpg';
import img4 from '../../Components/images/carrusel2img4.jpg';
import imgBack2 from'../../Components/images/Backcarrusel2.png';
import imgBack from '../../Components/images/3.jpg'
import imgBack3 from '../../Components/images/Backcarrusel3.png'
import imgBack4 from '../../Components/images/Backcarrusel4.png'
import Mission from '../Mission/Mission';
import FrequentAsk from '../Questions/FrequentAsk';
import Contact from '../Contact/Contact';
import KnonwTheTeam from '../Team/KnonwTheTeam';
import Allies from '../Allies/Allies';



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

  const MainCarrusel=[
    {
      Title:'Conoce Nuestra Empresa',
    Text:'Especializada en Interventoría, certificaciones, inspecciones de equipos, END, seguridad industrial y asesorías en áreas de la Industria cementera a nivel nacional.',
    ButtonText:'Mas de Nostros',
    imgSrc:imgBack,
    
    
    },

{
Title:'Potenciamos Tu Industria',
Text:'Consultorias y capacitaciones en ingenieria.Analisis de integridad y vida residual con Sofware avanzado¡Optimiza tu operacion!  ',
ButtonText:'Mas de Nosotros',
imgSrc:imgBack2,

},
{
  Title:'Equipos E.N.D',
Text:'Facilitamos tecnicas E.N.D con herramientas avanzadas y expertos dedicados .',
ButtonText:'Mas de Nosotros',
imgSrc: imgBack3,


},
{
  Title:'Cotiza Ya',
  Text:'Obten una cotizacion sin compromiso.Servicios adaptados a tus requerimientos.Tusactisfaccion nuestra prioridad.',
  ButtonText:'Mas de Nosotros',
  imgSrc:imgBack4,

}


  
  ]




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

  <Slider{...settings}>
  {MainCarrusel.map((item,index)=>(
    <SliderContainer key={index} >
    <SliderContent  style={{ backgroundImage: `url(${item.imgSrc})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
           <TitleHome>{item.Title}</TitleHome>
           
          

            <DescriptionHome>{item.Text}</DescriptionHome>
          
           
            <AboutLink>{item.ButtonText}</AboutLink>
           </SliderContent>
           </SliderContainer>
            ))}
            </Slider>
            </ContainerHome>
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



      <Mission/>
      <FrequentAsk/>
 <Contact/>
<KnonwTheTeam/>
<Allies/>
      </div>
    );
  };
  


export default Home