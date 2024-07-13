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
  border-radius: 10px;
  padding: 10px;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => {
      const color = theme.primary;
      const { r, g, b } = hexToRgb(color);
      return `rgba(${r}, ${g}, ${b}, 0.8)`; // Slightly more transparent on hover
    }};
    transform: translateY(-2px); // Slight lift effect on hover
  }
`;

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};


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

  const recipientEmail = "ysankarmukesh@gmail.com";

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
              >Submit</Button>
            </ButtonContainer>
          </FormContainer>
        </>
    </Section>
  );
};

export default ContactForm;
