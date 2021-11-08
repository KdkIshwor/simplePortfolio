import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={6}>
            <Fade bottom duration={500} delay={300} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am an aspiring full-stack engineer with an experience in front-end engineering. I collabrated with Nepalese Entreprenurs and helped them build websites using front end technologies Like  Gatsby, React and other frameworks. In a meantime I felt in love with blockchain technologies and started building projects with truffle, hardhat and brownie.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ' I mostly used python & javascript using which i can build any web and web3.0 projects but I am a quick learner who can learn and adopt according to the project needs. I love programming and learning new tools to become more efficient.  The joy of building something new or adding some features with code and programs is nirvana to me. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'I am an optimist for the Cryptos, and NFTs which i think is going to change the way we live and teach us the importance of community. Solidity has also been my go to language for smart contract development which is my another passion after javaScript and python.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
