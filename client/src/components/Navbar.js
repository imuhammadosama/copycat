import logo from '../assets/logo.svg';
import Styles from './Navbar.module.css';

export default function Navbar(props) {
  return (
    <div>
      <div>
        <img src={logo} className='pt-40 pl-40' />
      </div>
    </div>
  );
}
