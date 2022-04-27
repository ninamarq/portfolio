import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill, BsPinMap } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <section>
        <div>
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
              <input type="text" id="name" placeholder="Your Name" />
            </label>
            <label htmlFor="email">
              <input type="text" id="email" placeholder="Your Email" />
            </label>
          </div>
          <label htmlFor="subject">
            <input type="text" id="subject" placeholder="Subject" />
          </label>
          <label htmlFor="message">
            <input type="text" id="message" placeholder="Message" />
          </label>
          <button type="submit">
            <BiMailSend />
          </button>
        </form>
      </section>
    </div>
  );
}
