import React from 'react';
// import PropTypes from 'prop-types';

import ImagesList from '../../Shared/ImagesList';
import LabelledInput from '../../Shared/Fields/LabelledInput';

const ImageInput = ({
    images,
    onAddImage,
    onDeleteImage,
}) => {

    const handleInput = event => {
        const file = event.target.files[0];
        onAddImage(file);
    }

    return (
        <div className="ImagesInput flex-column-center">
            <ImagesList images={images} onDelete={onDeleteImage} />
            <LabelledInput type="file" label="Dodaj zdjęcia" onChange={handleInput} />
        </div>
    )
}

export default ImageInput;