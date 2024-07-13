import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import AOS from 'aos'; 
// import MyExperience from './Experience/MyExperience';
import { experiences } from "../../data/constants";

const ExperienceSection = styled.section`
  padding: 30px 0;
`;

const ExperienceContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -10px;
`;

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const CompanyDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h3`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};

  margin-bottom: 0px;
`;

const CompanyType = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 0px;
`;

const RolesTimeline = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 35px;
`;

const RoleItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const TimelineDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(211, 211, 211, 0.77);
  margin-right: 10px;
  margin-left: -15px;
  margin-bottom: 50px;

  /* Custom styling for the first role dot */
  ${({ firstRole, theme }) =>
    firstRole &&
    `
    background-color: ${theme.primary};
    width: 12px;
    height: 12px;
  `}
`;

const TimelineLine = styled.div`
  width: 2px;
  height: 90px;
  background-color: rgba(211, 211, 211, 0.77);
  position: absolute;
  left: -11px;
  top: 60%;
  bottom: 0;
  margin: auto;
`;

const RoleInfo = styled.div`
  flex: 1;
  margin-left: 35px;
`;

const RolePosition = styled.h3`
  font-size: 20px;
  padding: 30px 0 0 0;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 5px;
`;

const RoleDate = styled.p`
  font-size: 16px;
  color: #999;
  margin-bottom: 5px;
`;

const RoleLocation = styled.p`
  font-size: 16px;
  color: #999;
  margin-bottom: 5px;
`;


const ExperienceCard = ({ experience, index }) => {
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

    return (
        <ExperienceSection id="Experience">
      <ExperienceContent>
        {experiences
          ?.sort((a, b) => +b["CompanyOrder"] - +a["CompanyOrder"])
          .map((company, index) => (
            <div key={index}>
              <CompanyHeader>
                <CompanyLogo>
                  <img src={company.companyLogo} alt={company.company} />
                </CompanyLogo>
                <CompanyDetails>
                  <CompanyName>{company.company}</CompanyName>
                  <CompanyType>Full-time</CompanyType>
                </CompanyDetails>
              </CompanyHeader>
              <RolesTimeline>
                {company.roles.map((role, roleIndex) => (
                  <RoleItem key={roleIndex}>
                    <TimelineDot
                      firstRole={roleIndex === 0 && index === 0}
                    />
                    {roleIndex < company.roles.length - 1 && (
                      <TimelineLine />
                    )}
                    <RoleInfo>
                      <RolePosition>{role.position}</RolePosition>
                      <RoleDate>{role.date}</RoleDate>
                      <RoleLocation>{role.location}</RoleLocation>
                    </RoleInfo>
                    <div className="role--description">
                      <p>{role.description}</p>
                    </div>
                  </RoleItem>
                ))}
              </RolesTimeline>
            </div>
          ))}
      </ExperienceContent>
    </ExperienceSection>
    );
}

export default ExperienceCard;