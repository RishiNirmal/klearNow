import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {AccordionContext} from './AccordionWrapper';
import ReceivedTable from './ReceivedTable';



const AccordionItem = (props) => {

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(index);
     }

    return (
        <>
        <div>
            <h3 className="accordion-title">
                <button 
                    onClick={(e) => eventHandler(e, props.index)}
                    className={ active === props.index ? 'active' : 'inactive'}
                    aria-expanded={ active === props.index ? 'true' : 'false' }
                    aria-controls={ 'sect-' + indexCount(props.index) }
                    aria-disabled={ active === props.index ? 'true' : 'false' }
                >
                    {/* <span className="title-wrapper">{props.title}
                    </span>   */}
                    <span className="icon-wrapper">
                        <span className={ active === props.index ? 'minus' : 'plus'}></span>
                    </span>
                </button>
            </h3>
        </div>
        <div className="accordion-item">
            
            <div className="accordion-panel">
                <div id={ 'sect-' + indexCount(props.index) } className={ active === props.index  ? 'panel-open' : 'panel-close' }>
                <ReceivedTable/>
                    {/* {props.description} */}
                    <div className="arrive-at-port">
          <p className="shipment-title-tw">Shipment was received, Port of Ho Chi Minh City, Vietnam</p>
          <em>Tuesday, February 2nd 2020, 10:05:51 pm </em>
        </div>
                </div>
            </div>
        </div>
        </>
    )
}

AccordionItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default AccordionItem; 