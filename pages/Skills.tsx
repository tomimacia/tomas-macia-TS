import DisplayLogos from "../components/DisplayLogos";
import Layout from "../components/Layouts/Article";
import { MainStack, Strong } from "../data/exportLogos";
const Skills = () => {
  return (
    <Layout headTitle="Skills" pageTitle="Skills">
      <DisplayLogos
        englishTitle="Main stack:"
        spanishTitle="Manejo avanzado:"
        logos={MainStack}
      />
      <DisplayLogos
        englishTitle="Solid Knowledge:"
        spanishTitle="Conocimientos sólidos:"
        logos={Strong}
        startingTime={MainStack.length + 1}
      />
    </Layout>
  );
};

export default Skills;
