
import AccordionWrapper from './AccordionWrapper'; 
import AccordionItem from './AccordionItem';
import './Rangetracker.css'
import ShipmentInfo from './Shipment-info'
import { Image } from 'semantic-ui-react'
import LocationImg from '../assets/location.png'

function Rangetracker() {

  const data = [
    {
    //   "title": "Item 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
    },
    {
    //   "title": "Item 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
    },
    {
    //   "title": "Item 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
    },
    {
    //   "title": "Item 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
    }
  ];

  return (
    <div className="ranger">
      <div className="content">
      <div className="location-icon">
          <Image src={LocationImg}></Image>
        </div>
        <div className="app-description">
          <p className="shipment-title-tw">Shipment was received, Port of Ho Chi Minh City, Vietnam</p>
          <em>Tuesday, February 2nd 2020, 10:05:51 pm </em>
        </div>
          <AccordionWrapper>
            {data.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description} />
            ))}
          </AccordionWrapper>
      </div>
      
    </div>
  );
}

export default Rangetracker;