import Layout from "@/components/Layouts/Article";
import { useLanguage } from "@/context/languageContext";
import { Flex } from "@chakra-ui/react";
import EspacioSanMartinIMG from "@/public/images/Work/EspacioSanMartin.jpg";
import ConsultorioDepierre from "@/public/images/Work/ConsultorioDepierre.jpg";
import WorkCard from "@/components/Work/WorkCard";

const Work = () => {
  const language = useLanguage();
  const customTitle = language === "English" ? "Work" : "Trabajos";
  const WorkList = [
    {
      title: "Consultorio Depierre",
      description: {
        English: `The Medical Office of <strong>Dr. Pablo David Depierre</strong> provides specialized and welcoming cardiological care in Lomas de Zamora.<br/> <strong>Dr. Depierre</strong> leads a dedicated team committed to heart health. We conduct studies to diagnose and treat cardiovascular diseases.
        `,
        Español: `El Consultorio Médico <strong>Dr. Pablo David Depierre</strong> ofrece atención cardiológica especializada y acogedora en <strong>Lomas de Zamora</strong>.<br/>
        El <strong>Dr. Depierre</strong> lidera un equipo comprometido con la salud del corazón. Realizamos estudios para diagnosticar y tratar enfermedades cardiovasculares.
        `,
      },
      IMG: ConsultorioDepierre.src,
      href: "https://www.consultoriodrdepierre.com.ar/",
    },
    {
      title: "Espacio San Martín",
      description: {
        English: `<strong>Espacio San Martín</strong> is a center dedicated to the education and support of the community. They offer courses, free legal advice, and enriching activities to promote the personal and professional development of their neighbors.
        `,
        Español: `<strong>Espacio San Martín</strong> es un centro que se dedica a la formación y apoyo de la comunidad.<br/> Ofrecen cursos, asesoría legal gratuita y actividades enriquecedoras para promover el desarrollo personal y profesional de sus vecinos.
        `,
      },
      IMG: EspacioSanMartinIMG.src,
      href: "https://www.sanmartinjuancruz.com.ar/",
    },
  ];
  return (
    <Layout headTitle={customTitle} pageTitle={customTitle}>
      <Flex gap={5} p={[1, 1, 2, 2]} flexDir="column">
        {WorkList.map((item) => {
          const { title, description, IMG, href } = item;
          return (
            <WorkCard
              key={`word-card-key-${title}`}
              title={title}
              description={description[language]}
              IMG={IMG}
              href={href}
              buttonText={language === "Español" ? "Visitar" : "Visit site"}
            />
          );
        })}
      </Flex>
    </Layout>
  );
};

export default Work;
