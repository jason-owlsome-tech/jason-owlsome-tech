import Image from "next/image";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.owlsome.tech/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative w-5 h-5">
          <Image
            src="/owlsome-tech.png"
            alt="Owlsome-tech logomark"
            layout="fill"
          />
        </div>
        Owlsome Tech 翱翔智慧
      </a>
    </footer>
  );
};
export default Footer;
