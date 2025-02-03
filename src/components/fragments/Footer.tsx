import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="border-t border-t-lines text-secondary6 flex justify-between items-center">
      <div className="flex items-center">
        <div className="border-r border-lines py-3 px-8">Find me in:</div>
        <a
          target="_blank"
          href="https://instagram.com/hilal.adii"
          className="border-r border-lines py-3 px-5 hover:bg-white/10 hover:text-white transition"
        >
          <FaInstagram size={25} />
        </a>
        <a
          target="_blank"
          href="https://linkedin.com/in/abdullah-hilal-adi-sumarno-790841246"
          className="border-r border-lines py-3 px-5 hover:bg-white/10 hover:text-white transition"
        >
          <FaLinkedin size={25} />
        </a>
      </div>
      <a
        target="_blank"
        href="https://github.com/Hilaladiii"
        className="flex items-center gap-3 relative border-l border-lines py-3 px-5 hover:bg-white/10 hover:text-white transition"
      >
        @Hilaladiii
        <FaGithub size={25} />
      </a>
    </footer>
  );
}
