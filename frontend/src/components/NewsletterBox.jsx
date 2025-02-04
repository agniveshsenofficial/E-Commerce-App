

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe NOW! and get Flat 20% Off on First Order</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-3 border pl-3'>
          <input className='w-full sm:flex-1 outline-none' type="email" placeholder="Enter Your E-Mail" required/>
          <button type='submit' className=' bg-red-600 text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>

    </div>
  )
}

export default NewsletterBox
