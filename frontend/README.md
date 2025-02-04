**To start the frontend part, open the folder in integrated terminal and in the powershell command, type: npm run dev
    -- to launch the website under a developemental server and can be used to view the updated developements made in the website UI.

**To start the backend part, open the folder in integrated terminal and in the powershell command: npm run server.
    -- npm run server -- in the backend portion is for development after activating "nodemon" and the server updated live on the network, for uses limited to read-only the backend command -- npm start server -- can be run in the integrated powershell terminal, this activated the default Node.js server, suited only for testing, debugging or read-only purposes.\

//Both of these commands should start the frontend and backend part of the website explicitly independent of each other hence allowing for swift corrections in developement life cycle of the website.

*************This is a portion of a code that can be copied and pasted into the PlaceOrder.jsx in the frontend part of the Project code for integrating payment methods other than Razorpay and Stripe in this project:
            
            {/* Google Pay */}
            <div onClick={()=>setMethod('gpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'gpay' ? 'bg-green-600' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.gpay_logo} alt="GooglePay" />
            </div>
            
            {/* Phonepe */}
            <div onClick={()=>setMethod('phonepe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'phonepe' ? 'bg-green-600' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.phonepe_logo} alt="PhonePe" />
            </div>
            
            {/* Paytm */}
            <div onClick={()=>setMethod('paytm')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paytm' ? 'bg-green-600' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.paytm_logo} alt="Paytm" />
            </div>
            
            {/* PayPal */}
            <div onClick={()=>setMethod('paypal')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'paypal' ? 'bg-green-600' : ''}`}></p>
              <img className='h-5 mx-4' src={assets.paypal_logo} alt="PayPal" />
            </div>