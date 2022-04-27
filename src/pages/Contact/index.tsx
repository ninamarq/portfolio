import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill, BsPinMap } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import './style.scss';
import BackgroundPage from '../../components/BackgroundPage';
import BackAndForward from '../../components/BackAndForward';

export default function Contact() {
  return (
    <div className="contact-container">
      <BackgroundPage top="CON" bottom="TACT" />
      <h1>
        Con
        <span>tact</span>
      </h1>
      <section className="card-infos">
        <div className="contact-info">
          <h2>
            <BsFillTelephoneFill />
            +55 31 99751-6603
          </h2>
          <h2>
            <AiOutlineMail />
            marina.marqueso@outlook.com
          </h2>
          <h2>
            <BsPinMap />
            Minas Gerais, Brazil
          </h2>
        </div>
        <form>
          <div>
            <label htmlFor="name">
              Name
              <input type="text" id="name" />
            </label>
            <label htmlFor="email">
              Email
              <input type="text" id="email" />
            </label>
          </div>
          <label htmlFor="subject">
            Subject
            <input type="text" id="subject" className="alone-inline" />
          </label>
          <label htmlFor="message">
            Message
            <input type="text" id="message" className="alone-inline" />
          </label>
          <button type="submit">
            <BiMailSend />
            Send
          </button>
        </form>
      </section>
      <BackAndForward back="/projects" forward="/" />
    </div>
  );
}
