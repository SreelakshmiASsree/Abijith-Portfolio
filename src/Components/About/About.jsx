import React, { useState } from 'react';
import abijith from '../../assets/work9.png';

const About = () => {
   

   
    return (
        <div>
            <h1 className='text-white my-10 text-center text-4xl font-bold'>ABIJITH E A</h1>
            <div className='flex gap-x-10  justify-center '>
                {/* Image Section */}
                <div className='text-center'>
                    <img src={abijith} className=' w-full h-96 mx-auto' alt="" />
                </div>
                {/* Text Section */}
                <div className=' max-w-2xl '>
                    <p className='text-white '>
                        Antony Gormley is widely acclaimed for his sculptures, installations, and public artworks
                        that investigate the relationship of the human body to space. His work has developed the potential
                        opened up by sculpture since the 1960s through a critical engagement with both his own body and those
                        of others, confronting fundamental questions of where human beings stand in relation to nature and
                        the cosmos.Gormley continually tries to identify the space of art as a place of becoming in which new behaviours,
                        thoughts, and feelings can arise. His work has been widely exhibited throughout the UK and internationally
                        at renowned institutions such as Musée Rodin, Paris (2023); Lehmbruck Museum, Duisburg (2022); National
                        Gallery Singapore (2021); Royal Academy of Arts, London (2019); and many others. Gormley's permanent public works include the Angel of the North (Gateshead, England), Another Place
                        (Crosby Beach, England), Inside Australia (Lake Ballard, Western Australia), and more. He was awarded
                        the Turner Prize in 1994, the Bernhard Heiliger Award for Sculpture in 2007, and was knighted in 2014.
                        Antony Gormley was born in London in 1950 and continues to influence the art world with his profound
                        explorations of the human form and its surroundings.
                    </p>
                </div>
                <div />
            </div>
        </div>

    );
}

export default About;


