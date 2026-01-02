import React from 'react'
import './Futter.css'
const Futter = () => {
  return (
    <div className='futter'>
        <h1>choose your plan</h1>
        <p>Find the perfect fit for your workflow. From essential features to full-scale solutions, our plans are built to help your team work smarter, collaborate better, and achieve more—without the complexity.</p>
        <div className="plans-container">

            <div className="plan-card">
                 <h3>Gold Plan</h3>
                <h2>$9.99 <span>/month</span></h2>
               <ul>
                    <li>✔ Unlimited movies</li>
                    <li>✔ Watch up to 10 members</li>
                    <li>✔ 720 Resolution</li>
                    <li>✔ 50 Downloads</li>
                </ul>
           <button class="btn dark">Get Trial period</button>
            </div>

            <div className="plan-card">
               <h3>Platinum Plan</h3>
               <h2>$29.99 <span>/year</span></h2>
               <ul>
                    <li>✔ Unlimited movies</li>
                    <li>✔ No Ads</li>
                    <li>✔ Watch up to 15 members</li>
                    <li>✔ 4K HDR Resolution</li>
                    <li>✔ 100 Downloads</li>
                </ul>
             <button class="btn red">Get Trial Period</button>
            </div>

            <div className="plan-card">
                 <h3>Diamond Plan</h3>
                <h2>$19.99 <span>/month</span></h2>
                <ul>
                    <li>✔ Unlimited movies</li>
                    <li>✔ Watch up to 20 members</li>
                    <li>✔ 1080p Resolution</li>
                    <li>✔ 100 Downloads</li>
                </ul>
              <button class="btn dark">Get Trial Period</button>
            </div>

        </div>
      
    </div>
  )
}

export default Futter
