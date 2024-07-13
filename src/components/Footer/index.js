import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 30px;
  color: ${({ theme }) => theme.primary};
  transition: color 0.8s ease-in-out; /* Smooth color transition on hover */
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
    font-size: 20px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease, background-color 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
    left: 0;
    background: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 14px;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: rotate(20deg) scale(1.3); 
  }
`;

const RightsNotice = styled.div`
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
  font-size: 12px;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

const NoticeText = styled.p`
  margin: 0;
`;

function Footer({toggleTheme, darkMode}) {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Sankar Mukesh Yalamandla</Logo>

        <SocialMediaIcons>
          <SocialMediaIcon href="mailto:ysankarmukesh@gmail.com" target="display" title='Email'><EmailIcon /></SocialMediaIcon>
          <SocialMediaIcon href="https://www.linkedin.com/in/sankar-mukesh-yalamandla-2b0946199/" target="display" title='LinkedIn'><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href="https://www.instagram.com/sanmuk25/?hl=en" target="display" title='Instagram'><InstagramIcon /></SocialMediaIcon>
          <SocialMediaIcon href="tel:+91 919912114088" target="display" title='Phone'><PhoneIcon /></SocialMediaIcon>
          <SocialMediaIcon href="https://wa.me/9912114088" target="display" title='Whatsapp'><WhatsAppIcon /></SocialMediaIcon>
          <SocialMediaIcon
                title={darkMode ? "Light Mode" : "Dark Mode"}
                onClick={toggleTheme}
                target="display"
                style={{cursor: 'pointer'}}
              >
                {darkMode ? <Brightness7Icon /> : <NightsStayIcon />}
              </SocialMediaIcon>
        </SocialMediaIcons>
        
        {/* Uncomment and update this section if you want to add navigation links */}
        {/* <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav> */}

        <RightsNotice>
          <NoticeText>Copyright &copy; 2024, All Rights Reserved</NoticeText>
        </RightsNotice>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
