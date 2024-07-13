import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from 'aos'; 


const Section = styled.section`
  display: flex;
  padding: 100px 85px 50px 85px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 64px;

  @media (max-width: 1024px) {
    padding: 100px 50px 0px 50px;
  }

  @media (max-width: 768px) {
    padding: 30px 40px;
  }

  @media (max-width: 480px) {
    padding: 90px 20px;
    gap: 32px;
  }
`;

const Details = styled.div`
  .sub--title {
    color: ${({ theme }) => theme.primary};
    font-size: 24px;
    margin-bottom: 16px;
  }

  h2 {
    color: ${({ theme }) => theme.primary};
    font-size: 28px;
    margin-bottom: 12px;
  }

  .text-lg {
    color: ${({ theme }) => theme.text_primary};
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const FormContainer = styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(5, auto);
  width: 40%;
  row-gap: 18px;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: justify;
  color: ${({ theme }) => theme.primary};
  font-size: 16px; /* Adjust font size for label */
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.primary};
  background: transparent;
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px; /* Adjust font size */
  resize: vertical; /* Allows vertical resizing */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    to right,
    #5a29a4,
    #854ce6,
    #5a29a4,
    #5a29a4,
    #854ce6,
    #5a29a4
  );
  background-size: 250%;
  background-position: left;
  color: ${({ theme }) => theme.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 1s;
  overflow: hidden;

  &:before {
    position: absolute;
    content: "SUBMIT";
    color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 97%;
    height: 90%;
    border-radius: 8px;
    transition-duration: 1s;
    background-color: rgba(0, 0, 0, 0.842);
    background-size: 200%;
  }

  &:hover {
    background-position: right;
    transition-duration: 1s;
  }

  &:hover::before {
    background-position: right;
    transition-duration: 1s;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ContactForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
    });

    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, []);
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const recipientEmail = "ss3177806@gmail.com"; // Replace with your recipient's email address

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    const subject = encodeURIComponent(formData.subject);
    const message = encodeURIComponent(formData.message);
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${message}`;
    window.location.href = mailtoLink;

    setFormData({ subject: "", message: "" });
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const isDisabled =
    formData.subject.trim() === "" || formData.message.trim() === "";

  return (
    <Section id="contact">
      {isSubmitted ? (
        <div className="confirmation-message text-lg">
          <img src="SentMail.svg" alt="svg" />
          Wait a second! We will redirect you to your email.
        </div>
      ) : (
        <>
          <Details>
            <p className="sub--title" data-aos="zoom-in-down">Get In Touch</p>
            <h2 data-aos="zoom-in-down">Contact Me</h2>
            <p className="text-lg" data-aos="zoom-in-right">
              Have a question or want to get in touch? Feel free to reach out
              using the mail below.
            </p>
          </Details>

          <FormContainer className="contact--form--container" data-aos="fade-right">
            <Label htmlFor="subject">Subject</Label>
            <TextArea
              id="subject"
              rows={1}
              placeholder="Type your subject here..."
              name="subject"
              required
              onChange={handleChange}
              value={formData.subject}
            />

            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              rows={8} // Adjust rows as needed
              placeholder="Type your message here..."
              name="message"
              required
              onChange={handleChange}
              value={formData.message}
            />

            <ButtonContainer className="contact-button-container">
              <Button
                type="button"
                onClick={handleClick}
                disabled={isDisabled}
              />
            </ButtonContainer>
          </FormContainer>
        </>
      )}
    </Section>
  );
};

export default ContactForm;
