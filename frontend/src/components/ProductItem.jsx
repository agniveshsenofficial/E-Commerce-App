import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import for prop validation

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name || 'Product'} />
            </div>
            <p className='pt-3 pb-1 text_sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    );
};

// Adding PropTypes for validation
ProductItem.propTypes = {
    id: PropTypes.string.isRequired, // Ensures 'id' is a required string
    image: PropTypes.arrayOf(PropTypes.string).isRequired, // Validates 'image' as an array of strings
    name: PropTypes.string.isRequired, // Ensures 'name' is a required string
    price: PropTypes.number.isRequired, // Ensures 'price' is a required number
};

export default ProductItem;
