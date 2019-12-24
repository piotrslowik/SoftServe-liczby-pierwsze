import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ImagesList = ({
    images,
    onDelete,
}) => {

    const renderImages = () => {
        return images.map((image, index) => {
            return (
                <div className="ImagesList__image-wrapper" key={image.id} >
                    <FontAwesomeIcon icon={faTimes} className="ImagesList__delete-image"
                        onClick={() => onDelete(image.id)} />
                    <img src={image.src} alt={index} className="ImagesList__image" />
                </div>
            )
        })
    }

    return (
        <div className="ImagesList">
            {renderImages()}
        </div>
    )
}

ImagesList.defaultProps = {
    images: [],
    onDelete: () => {},
}

ImagesList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        src: PropTypes.string,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })),
    onDelete: PropTypes.func,
}

export default ImagesList;
