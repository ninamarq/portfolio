import Swal from 'sweetalert2';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillTelephoneFill, BsGithub, BsPinMap } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import { GrLinkedin } from 'react-icons/gr';
import './style.scss';
import emailjs from '@emailjs/browser';
import BackgroundPage from '../../components/BackgroundPage';
import BackAndForward from '../../components/BackAndForward';

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

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      name: { value: string };
      subject: { value: string };
      message: { value: string };
    } & HTMLFormElement;

    const name = target.name.value;

    /* eslint-disable @typescript-eslint/return-await */
    /* eslint-disable @typescript-eslint/no-floating-promises */
    /* eslint-disable @typescript-eslint/no-misused-promises */
    emailjs.sendForm('service_vdhf6sq', 'template_b66imob', target, 'MqYoZL2-7q6SBMPHX')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        /* eslint-disable @typescript-eslint/no-unsafe-member-access */
        console.log(error.text);
      });

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
          <h2 className="title-contact">Get in touch</h2>
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
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/marina-marqueso/" target="_blank" rel="noreferrer">
              <GrLinkedin />
            </a>
            <a href="https://github.com/ninamarq" target="_blank" rel="noreferrer">
              <BsGithub />
            </a>
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="name">
              Name
              <input onChange={(e) => handleChange(e)} type="text" name="from_name" id="name" />
            </label>
            <label htmlFor="email">
              Email
              <input onChange={(e) => handleChange(e)} type="text" name="from_email" id="email" />
            </label>
          </div>
          <label htmlFor="subject">
            Subject
            <input onChange={(e) => handleChange(e)} type="text" name="subject" id="subject" className="alone-inline" />
          </label>
          <label htmlFor="message">
            Message
            <input onChange={(e) => handleChange(e)} type="text" name="message" id="message" className="alone-inline" />
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
