import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/author/jim.jpg'
import ImageSlider from "../components/image-slider"

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        I have neither a Masters in Theology or a Doctorate in Divinity,
                        but what I do have is a personal experience of having been
                        taught by the Spirit of God as promised in John 16:13. I have
                        been studying the books of Daniel and Revelation since 1993. I
                        did not have an agenda when I began my studies and none of the
                        views that I had had previously were sustained from the Bible. 


                        </p>
                        
                        <button className="btn-book-featured-red">
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        <h1 className="author-name-tag">
                            <span></span>
                            <span>James Reule</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>
                    <div className="group-sec">
                        <img src={AuthorImg}/>
                      </div>
                </div>
            </section>
        </>
    )
}

export default Author;