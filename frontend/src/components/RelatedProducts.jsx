import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            // Filter products by category and subCategory
            const productsCopy = products.filter(
                (item) => item.category === category && item.subCategory === subCategory
            );

            // Filering the first 5 related products
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory]);

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item, index) => (
                        <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    ))
                }
            </div>
        </div>
    );
};

//Props Validation for category and subCategory//
RelatedProducts.propTypes = {
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
};

export default RelatedProducts;
