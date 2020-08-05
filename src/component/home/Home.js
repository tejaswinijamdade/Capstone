import React from 'react'
import Product from "./Product"
import "./Home.css"
import { Link } from '@material-ui/core'


function Home() {
    return (
        <div className="home_page">
            <div className="home">
            <div class="intro-container wow fadeIn">
      <h1 className="mb-4 pb-0">Order Your Favourite <br /><span Intercollege /> Food</h1>
      <Link to="/">
          <button className="about-btn scrollto">ORDER NOW</button>
      </Link>
     
      
   
             </div>
            </div>

                    <div className="about">
                    <div className="container">
                       
                        <div className="col-lg-6">
                            <h1>About us</h1>
                            
                            <p>We provide a easiness of finding the all Favourite Food at
                                 one place. The user will find their Favourite and near location Restaurant using this Platform.</p>

                            <div><p>deliver homemade food at the customer’s doorstep.
                            We provide fresh, hygienic, affordable and home made Food through using this Platform</p></div>
                        
                        </div>
                       
                    </div>
                    </div>                    
            
            <div className="home_row">
            <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png"}
                />
                <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/data/pictures/chains/6/5056/22e5007246552ed8ea05a0a65175ef8a.jpg?output-format=webp&fit=around%7C200%3A200&crop=200%3A200%3B*%2C*&output-quality=70"}
                />
                <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png"}
                />
                 
            </div>
            <div className="home_row">
                <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/data/pictures/6/5056/b0a348b779e34e9e89fea7050b1c29d2.jpg"}
                />
                 <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/data/pictures/chains/6/5056/32a39b17171cb0bc74182aa15f0d3676.jpg"}
                />
                 <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png"}
                />
                
            </div><div className="home_row">
                <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/data/pictures/6/5056/b0a348b779e34e9e89fea7050b1c29d2.jpg"}
                />
                <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/data/pictures/chains/6/5056/22e5007246552ed8ea05a0a65175ef8a.jpg?output-format=webp&fit=around%7C200%3A200&crop=200%3A200%3B*%2C*&output-quality=70"}
                />
                 <Product 
                    id=" "
                    title=" "
                    price={11.16}
                    rating={5}
                    image={"https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png"}
                />
                
            </div>
        </div> 
    )
}

export default Home
