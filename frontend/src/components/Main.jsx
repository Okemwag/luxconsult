import React, { useEffect, useState } from 'react';
    import { motion } from 'framer-motion';
    import House1 from '../assets/House1.jpg';
    import House2 from '../assets/House2.jpg';
    import House3 from '../assets/House3.jpg';
    import House4 from '../assets/House4.jpg';
    import '../styles/main.css';

    const Main = () => {
        const images = [House1, House2, House3, House4];
        const [currentIndex, setCurrentIndex] = useState(0);

        const imageVariants = {
            initial: { x: '-100%', opacity: 0 },
            animate: { x: '0%', opacity: 1, transition: { duration: 2, ease: 'linear' } },
        };

        useEffect(() => {
            const imageAnimation = async () => {
                while (true) {
                    for (let i = 0; i < images.length; i++) {
                        setCurrentIndex(i);
                        await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay between animations (2 seconds in this example)
                    }
                }
            };

            imageAnimation();
        }, [images.length]);

        return (
            <div className="main-container">
                {images.map((imageUrl, index) => (
                    <motion.div
                        key={index}
                        className={`cool-image ${index === currentIndex ? 'visible' : 'hidden'}`}
                        variants={imageVariants}
                        initial="initial"
                        animate={index === currentIndex ? 'animate' : 'initial'} // Animate only the current image
                    >
                        <img src={imageUrl} alt={`House ${index + 1}`} style={{ width: '100%' }} />
                    </motion.div>
                ))}
            </div>
        );
    };

    export default Main;
  




  


/*
<div className="main-container">
          <div className="background-image" style={{ backgroundImage: `url(${HouseImage})` }}>
              
        <div className="content">
        <h1>Welcome to LuxConsult: Your Gateway to Exceptional Real Estate Experiences.</h1>
        <p>
          At LuxConsult, we redefine luxury living by blending innovation, expertise, and a passion for perfection. As your trusted partners in real estate, we don't just offer properties; we craft lifestyles. Our commitment to delivering the highest standard of service, paired with our deep knowledge of the market, ensures that every client journey with us is a seamless and extraordinary one.
        </p>
              </div>
        
          </div>
    </div>
*/