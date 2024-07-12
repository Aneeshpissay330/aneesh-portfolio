import logo from '../../assets/logo.png';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

type NavbarProps = {

}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank');
  }
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={() => window.location.reload()}>
        <img src={logo} className="mx-2 w-16" alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          onClick={() => openInNewTab("https://www.linkedin.com/in/aneesh-pissay-1559a31a9")}
          className="cursor-pointer"
          title="Linkedin"
        />
        <FaGithub
          onClick={() => openInNewTab("https://github.com/Aneeshpissay330")}
          className="cursor-pointer"
          title="Github"
        />
        <FaSquareXTwitter
          onClick={() => openInNewTab("https://x.com/Aneeshpissay330")}
          className="cursor-pointer"
          title="Twitter"
        />
        <FaInstagram
          onClick={() => openInNewTab("https://www.instagram.com/aneesh_pissay")}
          className="cursor-pointer"
          title="Instagram"
        />
        <FaWhatsapp
          onClick={() => openInNewTab("https://api.whatsapp.com/send?phone=6360584064")}
          className="cursor-pointer"
          title="Instagram"
        />
      </div>
    </nav>
  )
}

export default Navbar;