import { assets } from "../assets/assets"


const Footer = () => {
    return (
        <div>

            {/*Footer Section*/}
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa temporibus rem pariatur omnis officia dolore tenetur quod recusandae voluptatibus, nisi aliquam dignissimos voluptates facilis ipsum, assumenda autem mollitia ducimus laudantium.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Deliveries</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH WITH US</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+00 123-456-7890</li>
                        <li>abc@example.com</li>
                    </ul>
                </div>

            </div>

            {/*Copyrights Section*/}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyrights 2024 @ lavaniya.com - All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer



