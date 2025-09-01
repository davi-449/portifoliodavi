
const Sobre = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold font-["Poppins"] text-foreground mb-6">
          Sobre
        </h1>
        <p className="text-xl text-foreground/70">
          Aqui você conhecerá mais sobre minha trajetória e experiências.
        </p>
        <img src="/images/profile.png" alt="Foto profissional" class="w-full h-full object-cover aspect-[4/3] mx-auto mt-8 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Sobre;


