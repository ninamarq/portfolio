import Swal from 'sweetalert2';
import { ChangeEvent, FormEvent, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill, BsPinMap } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import './style.scss';
import BackgroundPage from '../../components/BackgroundPage';
import BackAndForward from '../../components/BackAndForward';
import sendEmail from '../../services/sendEmail';

export default function Contact() {
  const [emailContent, setEmailContent] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailContent({
      ...emailContent,
      [event.target.id]: event.target.value,
    });
  };

  const {
    name, email, subject, message,
  } = emailContent;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* eslint-disable @typescript-eslint/return-await */
    /* eslint-disable @typescript-eslint/no-floating-promises */
    /* eslint-disable @typescript-eslint/no-misused-promises */
    sendEmail(name, email, subject, message);
    return Swal.fire({
      title: 'Email sent!',
      text: `Contratulagions ${name}, you sent a email to Marina 📧`,
      icon: 'success',
      confirmButtonText: 'Cool',
    });
  };

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
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="name">
              Name
              <input onChange={(e) => handleChange(e)} type="text" id="name" />
            </label>
            <label htmlFor="email">
              Email
              <input onChange={(e) => handleChange(e)} type="text" id="email" />
            </label>
          </div>
          <label htmlFor="subject">
            Subject
            <input onChange={(e) => handleChange(e)} type="text" id="subject" className="alone-inline" />
          </label>
          <label htmlFor="message">
            Message
            <input onChange={(e) => handleChange(e)} type="text" id="message" className="alone-inline" />
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
