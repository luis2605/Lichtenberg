import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './EmailForm.module.css';

const EmailForm = () => {
  const [toEmail, setToEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const templateParams = {
      from_email: toEmail,
      subject: subject,
      message: body
    };

    emailjs.send('service_u4nl9o3', 'template_8h9p49o', templateParams, 'jkwvkKVm-ubZY92ZJ')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.log('FAILED...', error);
      });

    setToEmail('');
    setSubject('');
    setBody('');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <label className={styles.formLabel}>
        Von:
        <input className={styles.formInput} type="email" value={toEmail} onChange={(e) => setToEmail(e.target.value)} placeholder="Bitte eine E-Mail Adresse eintragen..." required />
      </label>
      <label className={styles.formLabel}>
        Bettreff:
        <input className={styles.formInput} type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      </label>
      <label className={styles.formLabel}>
        Nachricht:
        <textarea className={styles.formTextarea} value={body} onChange={(e) => setBody(e.target.value)}  placeholder="Bitte schreiben Sie Ihre Nachricht hier..." required />
      </label>
      <button className={styles.formButton} type="submit">Send Email</button>
    </form>
  );
};

export default EmailForm;
