import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeroImage from './assets/hero-image.png'
import { WhyChooseCard } from './WhyChooseCard'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const whyChooseUsCard = [{
    title:"Premium Quality Ingredients",
    description: "We use scientifically backed, high-quality ingredients with proven results."
  },
  {
    title:"Lab Tested & Certified",
    description: "Every batch is tested for purity, potency, and safety.",
  },
  {
    title:"Trusted by Thousands",
    description: "Loved by athletes, gym-goers, and health enthusiasts nationwide."
  }]

  return (
    <div className="h-screen">
      <nav className='bg-green-400 p-4 text-white font-bold flex gap-4'>
        <h1>Core Beast Nutrition</h1>
        <ul className='flex flex-row gap-4 ml-auto'>
          <li className='cursor-pointer'>Home</li>
          <li className='cursor-pointer'>Shop</li>
          <li className='cursor-pointer'>Protein</li>
          <li className='cursor-pointer'>Vitamins & Wellness</li>
          <li className='cursor-pointer'>About Us</li>
        </ul>
      </nav>
      <section className='hero bg-green-100 h-full p-8 text-center
       flex justify-center items-center'>
        <div className='flex-1'>
          <h1 className='text-6xl p-4 m-4'>Power Your <span className='text-red-600 font-semibold'>Workouts</span><br/> Elevate Your <span className='text-green-600 font-bold'>Results</span></h1>
          <p>Clinically formulated supplements designed to boost energy, build muscle, burn fat, and optimize recovery.</p>
          <button className='bg-green-600 text-white px-6 py-3 m-2 rounded-lg hover:bg-green-700 font-bold'>Shop Now</button>
          <button className='bg-yellow-600 text-white px-6 py-3 m-2 rounded-lg hover:bg-yellow-700 font-bold'>Reviews</button>
        </div>
        <div className='flex-1'>
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </section>
      <section>
        <h2 className='text-center p-4 text-3xl font-semibold'>Why Athletes Trust Us</h2>
        <div className='flex'>
          {whyChooseUsCard.map((card,index)=>{
            return <WhyChooseCard title={card.title} 
            description={card.description}></WhyChooseCard>
          })
          }
        </div>
      </section>
      <section >
          <h2 className='text-2xl text-center my-8 font-semibold'>Real Results! Real Reviews!!</h2>
      </section>
      <footer className='bg-red-500 h-20 flex flex-col justify-center'>
          <p className='text-center text-white'>© 2026 Core Beast Nutrition. All Rights Reserved.
<br/>Secure Payments • SSL Encrypted • Trusted by 10,000+ Athletes
          </p>
      </footer>
    </div>
  )
}

export default App
