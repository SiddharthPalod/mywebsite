import React from 'react';
import { subheadingItems, productDesigns, artGalleria , moreDesigns , webappDesigns } from '../data';
import { Subheading,Box } from '../subcomponents';

function getBoxDataByName(name) {
  const formattedName = name.replace(/\s+|\//g, '');
  return eval(formattedName);
}

const ContentCategorized = () => {
  return (
    <div className="md:h-screen bg-white items-center flex-col md:flex-row md:inline-flex">
      {subheadingItems.map((item, index) => (
        <div key={index} className={'md:inline-flex md:flex-row md:justify-evenly ' + (index % 2 === 0 ? 'bg-purple-100' : 'bg-white')}>
        <Subheading name={item} />
          {getBoxDataByName(item).map((design, index) => (
            <Box
              key={index}
              title={design.title}
              description={design.description}
              image={design.image}
              imagelink={design.imageLink}
            />
          ))}

        </div>
      ))}
    </div>
  );
};

export default ContentCategorized;
