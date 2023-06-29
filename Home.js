import React from 'react'
import './Home.css'
import Product from './Product'



function Home() {
  return (
    <div>
        <div className="home">
            <div className="home-container">
                <img src="https://img.freepik.com/premium-photo/various-groceries-shopping-cart_1134-11563.jpg?w=1800" alt="" className='home_image'/>
                <div className="home_row">
                    <Product 
                    id="8801"
                    title="A bag that's designed to be worn comfortably across the chest or back and secured to the body with a cross-shoulder style strap"
                    price={11.29}
                    rating={5}
                    image="https://media.istockphoto.com/id/1181147567/photo/blank-pale-pink-beautician-for-cosmetics.jpg?s=612x612&w=0&k=20&c=kt7lL1-zZ4YkgWnyjPVClh0gMJRGJWh31UF8ZfyZVeQ="
                    />
                    <Product
                    title="Roborock and more that automatically clean laminate, hardwood and tile floors."
                    price={60}
                    rating={4}
                    image="https://image-us.samsung.com/SamsungUS/home/home-appliances/vaccums/jet-mop/pdp/vr20t6001mw-aa/gallery/PDP-GALLERY-VR20T6001MW-01-1600x1200.jpg?$product-details-jpg$"
                    />
                </div>


                <div className="home_row">
                <Product
                id="8920"
                title=" The iron is the small appliance used to remove wrinkles from fabric."
                price={32}
                rating={3}
                image="https://www.ourshopee.com/ourshopee-img/ourshopee_products/9781945381.jpg"
                />
                <Product
                id="2901"
                title="Ninja blenders have a great build that feels sturdy, even though they have plastic transmissions. "
                price={192}
                rating={2}
                image="https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&itemId=1592427-847&recipeName=680"
                />
                <Product
                id="25671"
                title="Television (TV) is a telecommunication medium for transmitting moving images and sound. "
                price={300}
                rating={5}
                image="https://target.scene7.com/is/image/Target/JulWk1-0704-TVs-04-Type-02-4K_TVs-210617-1623943432760?wid=668&qlt=80&fmt=webp"
                />
               

                    
                </div>
                <div className="home_row">
                <Product
                id="24561"
                title="An air conditioner cools your home with a cold indoor coil called the evaporator."
                price={250}
                rating={5}
                image="https://m.economictimes.com/thumb/msid-97868489,width-640,height-427,resizemode-4,imgsize-6444/best-2-ton-split-air-conditioners.jpg"
                />
                <Product
                id="209145"
                title="An oven is a tool which is used to expose materials to a hot environment."
                price={59}
                rating={4}
                image="https://www.foodandwine.com/thmb/wtSAc8XIifwjyd8BMFZbErAOyQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/faw-product-breville-smart-rkilgore-44-c5a16502b0084c71aca178479399f2b8.jpg"
                />
          
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home