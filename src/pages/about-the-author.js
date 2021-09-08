import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/jim.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title='About the Author | James Reule '/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />
{/* 
                                    <h1>James Ruele</h1> */}
                            </div>

                            <div className="heading-quote">
                                <h4>
                              -  A wise man tells us that "When a man who is honestly mistaken, hears the truth, he will either quit being mistaken or else cease from being honest" by Richard Humpal. Winston Churchill said, "most people, sometime in their lives, stumble across truth. Most jump up, brush themselves off, and hurry on about their business as if nothing had happened." May we take the words of these wise men to heart.
                               - </h4>
                                {/* <span className="ata-span-fx">
                                    
                                </span> */}
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            I have neither a Masters in Theology or a Doctorate in Divinity, but
                            what I do have is a personal experience of having been taught by
                            the Spirit of God as promised in John 16:13. I have been studying
                            the books of Daniel and Revelation since 1993. I did not have an
                            agenda when I began my studies and none of the views that I had
                            had previously were sustained from the Bible. I just wanted to
                            see if I could understand what God had shown to humanity and
                            never could have imagined where my studies would lead me. Eight
                            years ago I had a dream in which I was told to write a book. At
                            the breakfast table that morning my wife told me she thought I
                            should write a book. She did not know of my dream. Coincidence?
                            God challenged the false gods who the nation of Israel had been
                            worshipping to show what would happen in the future (Isaiah
                            41:22-23). Only God knows the end from the beginning and can
                            with 100% accuracy foretell the future. Ever since becoming a
                            Christian in 1973, I have loved the truths found in the Bible. I am
                            just God’s humble servant doing what He asked me to do in writing
                            this book. Numbers 6:24-26. 

                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">James Reule </span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;