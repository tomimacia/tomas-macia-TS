import { Flex } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import WorkCard from './WorkCard';
import CarniceriasManzo from '@/public/images/Work/CarnieceriasManzo.png';
import ConsultorioDepierre from '@/public/images/Work/ConsultorioDepierre.jpg';
import ExiBit from '@/public/images/Work/ExiBit.png';
import GSMapas from '@/public/images/Work/GSMapasLogo.png';
import Abrond from '@/public/images/Work/Abrond.png';
import { LanguageStateType } from '@/types/LanguageType';
import MinimalWorkCard from './MinimalistWorkCard';
import { useWebType } from '@/context/webTypeContext';
import useGetFont from '@/hooks/useGetFont';

const WorkList = ({ language }: { language: LanguageStateType }) => {
  const { font } = useGetFont();
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
      subTitle: {
        English: 'Medical Office',
        Español: 'Consultorio Médico',
      },
    },
    {
      title: 'Carnicerías Manzo',
      description: {
        English: `<strong>Carnicerías Manzo</strong> is a company specializing in high-quality meat with over 60 years of experience. It offers a wide variety of premium cuts and fresh meat products, renowned for its excellence and commitment to customer satisfaction.`,
        Español: `<strong>Carnicerías Manzo</strong> es una empresa familiar especializada en carne de alta calidad con más de 60 años de experiencia. Ofrece una amplia variedad de cortes premium y productos cárnicos frescos, destacándose por su excelencia y compromiso con la satisfacción del cliente.`,
      },
      IMG: CarniceriasManzo.src,
      href: 'https://www.carniceriasmanzo.com.ar/',
      subTitle: {
        English: 'Meat shop',
        Español: 'Carnicería',
      },
    },
    {
      title: 'ExiBit',
      description: {
        English: `<strong>ExiBit</strong> is an application that provides digital signage and invoicing services.<br/> Upload your products and update your digital billboards in real time from the app.`,
        Español: `<strong>ExiBit</strong> es una aplicación que ofrece servicios de cartelería digital y facturación.<br/> Carga tus productos, y actualiza tus carteleras digitales en tiempo real desde la App.`,
      },
      IMG: ExiBit.src,
      href: 'https://www.exibit.com.ar/',
      subTitle: {
        English: 'Digital Signage',
        Español: 'Cartelería Digital',
      },
    },
    {
      title: 'GS Mapas',
      description: {
        English: `<strong>GS Mapas</strong> is a real estate company with an interactive map, displaying all available properties for easy exploration and viewing. Find your next property with ease on <strong>GS Mapas</strong>.`,
        Español: `<strong>GS Mapas</strong> es una inmobiliaria con un mapa interactivo que muestra todas las propiedades disponibles para facilitar la exploración y visualización. Encuentra tu próxima propiedad fácilmente en <strong>GS Mapas</strong>.`,
      },
      IMG: GSMapas.src,
      href: 'https://www.gsmapas.com.ar/',
      subTitle: {
        English: 'Real State',
        Español: 'Inmobiliaria',
      },
    },
    {
      title: 'Abrond',
      description: {
        English: `<strong>Abrond</strong> is a family business established in 1978, offering high-quality doorbells and transformers. With over 46 years of experience, Abrond products are ideal for homes, schools, and factories, combining reliability and durability.`,
        Español: `<strong>Abrond</strong> es una empresa familiar fundada en 1978, que ofrece timbres y transformadores de alta calidad. Con más de 46 años de experiencia, los productos Abrond son ideales para hogares, escuelas y fábricas, combinando fiabilidad y durabilidad.`,
      },
      IMG: Abrond.src,
      href: 'https://www.abrond.com.ar/',
      subTitle: {
        English: 'Doorbell Factory',
        Español: 'Fábrica de Timbres',
      },
    },
  ];
  const webType = useWebType();
  return (
    <Flex fontFamily={font} gap={2} p={[1, 1, 2, 2]} flexDir='column'>
      {WorkList.map((item) => {
        const { title, description, subTitle, IMG, href } = item;
        return (
          <Fragment key={`word-${webType}-card-key-${title}`}>
            {webType === 'Modern' && (
              <WorkCard
                title={title}
                description={description[language]}
                IMG={IMG}
                href={href}
              />
            )}
            {webType === 'Minimalist' && (
              <MinimalWorkCard
                title={title}
                subTitle={subTitle[language]}
                href={href}
              />
            )}
          </Fragment>
        );
      })}
    </Flex>
  );
};

export default WorkList;
