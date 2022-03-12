import Styles from './ThankYou.css';
import image from '../assets/logo.svg';

export default function ThankYou() {
  return (
    <div className='flex'>
      <div className='t-64 pr-120'>
        thanks, we will txt <br />
        you answers to <br />
        your homework! <br />- copycat
      </div>
      <div className='t-64'>
        <img src={image} />
      </div>
    </div>
  );
}
