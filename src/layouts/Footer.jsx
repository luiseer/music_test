import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAmazonPay,
  faSpotify,
  faItunes,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="container">
        <div className="footer-icons">
          <div className="footer-icon">
            <FontAwesomeIcon icon={faAmazonPay} />
          </div>
          <div className="footer-icon">
            <FontAwesomeIcon icon={faSpotify} />
          </div>
          <div className="footer-icon">
            <FontAwesomeIcon icon={faItunes} />
          </div>
          <div className="footer-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
