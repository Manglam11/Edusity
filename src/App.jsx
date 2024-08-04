import React from 'react'

import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="container">
                <Programs />
            </div>

        </div>
    )
}

export default App
