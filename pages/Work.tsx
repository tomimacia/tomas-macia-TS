import Layout from "@/components/Layouts/Article";
import { useLanguage } from "@/context/languageContext";

import WorkList from "@/components/Work/WorkList";

const Work = () => {
  const language = useLanguage();
  const customTitle = language === "English" ? "Work" : "Trabajos";

  return (
    <Layout headTitle={customTitle} pageTitle={customTitle}>
      <WorkList language={language} />
    </Layout>
  );
};

export default Work;
