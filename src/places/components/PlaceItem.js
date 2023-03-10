import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const { image, title, address, description } = props;
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <>
      <li className='place-item'>
        <Modal
          show={showMap}
          onCancel={closeMapHandler}
          header={props.address}
          contentClass='place-item__modal-content'
          footerClass='place-item__modal-action'
          footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
        >
          <div className='map-container'>
            <Map center={props.coordinates} zoom={15} />
          </div>
        </Modal>

        <Card className='place-item__content'>
          <div className='place-item__image'>
            <img src={image} alt={title} />
          </div>
          <div className='place-item__info'>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{description}</p>
          </div>
          <div className='place-item__actions'>
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
