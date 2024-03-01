// components/FadeInUp.js
import { useEffect, useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const FadeInUp = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById(children.props.id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      setIsVisible(elementPosition < screenHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollLink
      activeClass="active"
      to={children.props.id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
      delay={delay}
    >
      <div style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(80px)',
        transition: 'opacity 0.8s, transform 0.9s' // Duração da transição
      }}>
        {children}
      </div>
    </ScrollLink>
  );
};

export default FadeInUp;
