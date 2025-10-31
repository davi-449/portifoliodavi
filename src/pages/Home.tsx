import { BackgroundPaths } from '@/components/ui/background-paths'

const Home = () => {
  return (
    <>
      <BackgroundPaths 
        title="Seu site profissional por assinatura" 
        subtitle="Sites de alta performance para negócios que não podem esperar."
        ctaText="Conhecer os Modelos"
        ctaLink="/modelos"
        compactTop 
      />
    </>
  );
};

export default Home;
