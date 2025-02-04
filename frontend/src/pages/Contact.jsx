import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"


const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'> 
        <Title text1={"Contact "} text2={"Us"}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact_Image"/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>12, Barrister P. Mitra Road, Dakkhin Kali Housing Complex, Building: Bhawani, Flat: 2K<br/>Kolkata - 700035, West Bengal, India</p>
          <p className='text-gray-500'>Telephone: (+91) 629-036-3351 <br/> E-Mail: admin@lavaniya.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Lavaniya</p>
          <p className='text-gray-500'>Learn more about our Teams and Job Openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-red-600 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact