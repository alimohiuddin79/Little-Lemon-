import heroImage from "../utils/restauranfood.png"
import greekSalad from "../utils/greek salad.png"
import bruchetta from "../utils/Bruchetta.png"
import lemonDesert from "../utils/lemon dessert.png"
import bikeIcon from "../utils/ic_sharp-pedal-bike.svg"
import aboutImage from "../utils/about image.png"

const Main = () => {
    return (
        <main>
            <section id="heroSection">
                <div className="heroContainer">
                    <div className="row">
                        <div className="col">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>we are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist.</p>
                            <button className="primaryBtn">Reserve a Table</button>
                        </div>
                        <div className="col">
                            <img src={heroImage} alt="heroImage" className="heroImage" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="weekSpecial">
                <div className="weekSpecialContainer">
                    <div className="head">
                        <h2>This weeks specials!</h2>
                        <button className="primaryBtn">Online Menu</button>
                    </div>
                    <div className="content">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <img src={greekSalad} alt="cardImage" className="cardImage" />
                                    <div className="cardContent">
                                        <div className="cardHeading">
                                            <h3 className="title">Greek Salad</h3>
                                            <p className="price">$12.99</p>
                                        </div>

                                        <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

                                        <div className="order">
                                            <p>Order a delivery </p>
                                            <img src={bikeIcon} alt="bikeIcon" className="bikeIcon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={bruchetta} alt="cardImage" className="cardImage" />
                                    <div className="cardContent">
                                        <div className="cardHeading">
                                            <h3 className="title">Bruchetta</h3>
                                            <p className="price">$5.99</p>
                                        </div>

                                        <p className="description">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>

                                        <div className="order">
                                            <p>Order a delivery </p>
                                            <img src={bikeIcon} alt="bikeIcon" className="bikeIcon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <img src={lemonDesert} alt="cardImage" className="cardImage" />
                                    <div className="cardContent">
                                        <div className="cardHeading">
                                            <h3 className="title">Lemon Dessert</h3>
                                            <p className="price">$5.00</p>
                                        </div>

                                        <p className="description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                                        </p>

                                        <div className="order">
                                            <p>Order a delivery </p>
                                            <img src={bikeIcon} alt="bikeIcon" className="bikeIcon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials">
                <div className="testimonialsContainer">
                    <h1>Testimonials</h1>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <h3 className="rating">Rating</h3>
                                <div className="details">
                                    <img src="" alt="" />
                                    <p>John</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <h3 className="rating">Rating</h3>
                                <div className="details">
                                    <img src="" alt="" />
                                    <p>John</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <h3 className="rating">Rating</h3>
                                <div className="details">
                                    <img src="" alt="" />
                                    <p>John</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <h3 className="rating">Rating</h3>
                                <div className="details">
                                    <img src="" alt="" />
                                    <p>John</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="aboutContainer">
                <div className="row">
                        <div className="col">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>we are a family owned Mediterranean restuarant, focused on traditional recipes served with a modern twist.</p>
                        </div>
                        <div className="col">
                            <img src={aboutImage} alt="aboutImage" className="aboutImage" />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="whiteSpace"></section> */}
        </main>
    )
}

export default Main;