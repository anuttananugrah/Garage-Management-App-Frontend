import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Landing() {
    return (
        <div >
            <Header />
            <div className='container-fluid' style={{ minHeight: "80vh" }}>
                <div className="row">
                    <div className="col-sm-12 col-md-6 bg-dark text-light">
                        <h3>Garage Guru</h3>
                        <p>The complete Garage management app</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur dolorem nemo dolorum nihil cumque sapiente dolor magni eveniet ipsam placeat, ut doloribus sequi, quae, quisquam et molestiae officiis accusantium.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 p-0 ">
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/car-repair-services-poster-design-template-7bdbf99cb15fab1bc3f0d9fdbf67482c_screen.jpg?ts=1690555573" alt="" className='w-100' />
                     </div>
                    
                </div>
                <div className="container-fluid">
                    <h3 className='text-center my-5'>About Us</h3>
                    <p style={{textAlign:"justify"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nulla officiis ratione voluptates sequi minus repudiandae vel ipsa recusandae sit labore, quis soluta inventore similique illo perferendis aperiam itaque! Nemo.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eum iusto vitae ipsam unde, nobis quo optio odit beatae reiciendis a itaque quae officiis hic soluta odio quam vel facilis!

                    </p>
                </div>
            </div>
            <Footer />


        </div>
    )
}

export default Landing