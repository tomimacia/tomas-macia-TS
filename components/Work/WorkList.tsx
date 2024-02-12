import { Flex } from '@chakra-ui/react';
import React from 'react';
import WorkCard from './WorkCard';
import EspacioSanMartinIMG from '@/public/images/Work/EspacioSanMartin.jpg';
import CarniceriasManzo from '@/public/images/Work/CarnieceriasManzo.png';
import ConsultorioDepierre from '@/public/images/Work/ConsultorioDepierre.jpg';
import { LanguageStateType } from '@/types/LanguageType';

const WorkList = ({ language }: { language: LanguageStateType }) => {
  const WorkList = [
    {
      title: 'Consultorio Depierre',
      description: {
        English: `The Medical Office of <strong>Dr. Pablo David Depierre</strong> provides specialized and welcoming cardiological care in Lomas de Zamora.<br/> <strong>Dr. Depierre</strong> leads a dedicated team committed to heart health. We conduct studies to diagnose and treat cardiovascular diseases.
            `,
        Español: `El Consultorio Médico <strong>Dr. Pablo David Depierre</strong> ofrece atención cardiológica especializada y acogedora en <strong>Lomas de Zamora</strong>.<br/>
            El <strong>Dr. Depierre</strong> lidera un equipo comprometido con la salud del corazón. Realizamos estudios para diagnosticar y tratar enfermedades cardiovasculares.
            `,
      },
      IMG: ConsultorioDepierre.src,
      href: 'https://www.consultoriodrdepierre.com.ar/',
    },
    {
      title: 'Espacio San Martín',
      description: {
        English: `<strong>Espacio San Martín</strong> is a center dedicated to the education and support of the community. They offer courses, free legal advice, and enriching activities to promote the personal and professional development of their neighbors.
            `,
        Español: `<strong>Espacio San Martín</strong> es un centro que se dedica a la formación y apoyo de la comunidad.<br/> Ofrecen cursos, asesoría legal gratuita y actividades enriquecedoras para promover el desarrollo personal y profesional de sus vecinos.
            `,
      },
      IMG: EspacioSanMartinIMG.src,
      href: 'https://www.sanmartinjuancruz.com.ar/',
    },
    {
      title: 'Carnicerías Manzo',
      description: {
        English: `<strong>Carnicerías Manzo</strong> is a company specializing in high-quality meat with over 60 years of experience. It offers a wide variety of premium cuts and fresh meat products, renowned for its excellence and commitment to customer satisfaction.`,
        Español: `<strong>Carnicerías Manzo</strong> es una empresa familiar especializada en carne de alta calidad con más de 60 años de experiencia. Ofrece una amplia variedad de cortes premium y productos cárnicos frescos, destacándose por su excelencia y compromiso con la satisfacción del cliente.`,
      },
      IMG: CarniceriasManzo.src,
      href: 'https://www.carniceriasmanzo.com.ar/',
    },
  ];

  return (
    <Flex gap={5} p={[1, 1, 2, 2]} flexDir='column'>
      {WorkList.map((item) => {
        const { title, description, IMG, href } = item;
        return (
          <WorkCard
            key={`word-card-key-${title}`}
            title={title}
            description={description[language]}
            IMG={IMG}
            href={href}
            buttonText={language === 'Español' ? 'Visitar' : 'Visit site'}
          />
        );
      })}
    </Flex>
  );
};

export default WorkList;
