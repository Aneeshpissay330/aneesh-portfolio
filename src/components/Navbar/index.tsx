import logo from '../../assets/ap.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

type NavbarProps = {

}

const Navbar : React.FunctionComponent<NavbarProps> = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img src={logo} className="mx-2 w-10" alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaSquareXTwitter />
          <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar;