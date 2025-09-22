import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Stack, Box, Heading, Text, Button } from "@chakra-ui/react";
import "./Hero.css";
import { ArrowDownIcon } from "@chakra-ui/icons";

const RESUME_URL = "./MyResume2025.pdf";

const Hero = () => {

 useEffect(() => {
    AOS.init({
      duration: 1000, // or your preferred default duration
      once: false,
    });
  }, []);

  const downloadAtUrl = (url) => {
    const fileName = "SayaniSen-Resume";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  
  return (
    <>
      <div className="hero-section">
        <Box maxW="48rem" my="0" mx="auto">
            <Heading
              size="4xl"              
              pl="1rem"
              py="10rem"
              lineHeight="initial"
              textAlign="center"
              className="anim-head"
            >
              Get ideas turned into <Text className="typed">reality.</Text>
            </Heading>
        </Box>
        <div className="container">
          <div className="item-left">
            <p className="my-details" data-aos="fade-up" data-aos-duration="4000">
              Hi, I’m <span style={{color: '#fef08a', fontWeight: '500'}}>Sayani</span> — a frontend web developer with nearly 2 years of experience in the industry. 
                  I currently work at an eCommerce organization, where I design and develop intuitive UI/UX for both 
                  in-house platforms and client-facing projects. I’m passionate about crafting clean, responsive, and 
                  user-friendly interfaces that bring digital ideas to life. Open to collaboration and freelance 
                  work — let’s connect and build something great together!
                  <button className="btn btn-2 hover-slide-left" onClick={() => { downloadAtUrl(RESUME_URL); }} >
                   <span>Download My Resume</span> 
                    <ArrowDownIcon />
                  </button>
            </p>            
          </div>
          <div className="item-right" style={{overflow: 'hidden'}} ><img src="./images/profile.jpg" alt="profile" data-aos="fade-left" /></div> 
        </div>
        
      </div>
      <div className="hero-mobile">
        <Stack>          
          <Box maxW="20rem">
            <Heading as="h1" size="3xl" ml="3rem">
              I'm Sayani. A front-end developer.
            </Heading>
          </Box>          
        </Stack>
      </div>
    </>
  );
};
export default Hero;
