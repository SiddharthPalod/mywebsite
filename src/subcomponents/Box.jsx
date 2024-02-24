import React ,{useEffect, useState } from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { subheadingItems, productDesigns, artGalleria , moreDesigns , webappDesigns } from '../data';


const Box = ({ title, description, image, imagelink }) => {
    return (
          <motion.div
          onClick={() => window.open(imagelink, "_blank")}
          className='md:mr-10 m-5 md:mt-10 md:mb-0 md:h-screen w-64 hover:cursor-pointer'
          >
            <Tilt
              options={{
                max: 60,
                scale: 1,
                speed: 500,
              }}
                className='border-4 border-gray-400 hover:border-purple-900 w-64 md:h-64'
              >
              <div className='relative bg-contain'>
                      <img
                          src={image}
                          alt='project_image'
                          
                      />
              </div>
            </Tilt>
            <div className='m-3 hidden md:block'>
              <h2 className='text-black text-4xl'>{title}</h2>
              <p className='text-black text-base'>{description}</p>
            </div>
          </motion.div>
        );
};

export default Box