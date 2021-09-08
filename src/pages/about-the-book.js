import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-min.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'james-ruele',
        config: { identifier: 12, slug }    
    }


    return (
        <>
            <Layout>
            <Helmet title='About the Book | James Reule '/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Go, Tell the World of their DANGER!`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'forgotten-men-and-women',
                                content:
                                    `
                                        <p>
                                        This book is a chapter by chapter study of the Biblical books of Daniel and Revelation written
                                        by a layman for laymen. It begins with the “time of trouble” mentioned in Daniel 12:1 and ends
                                        with the earth being brought back into harmony with the Universe. Specifi c events together
                                        with specific timing are given and not presented in such a manner that one never knows
                                        whether what is foretold happened or not. “The time of trouble” begins on April 4, 2027 with
                                        a global earthquake accompanied by voices, and thunderings, and lightnings which will set
                                        off many volcanoes, which will be followed by a meteorite shower, which will be followed by
                                        an asteroid impact on an ocean, which will be followed by an asteroid impact on a landmass,
                                        which will be followed by one-third of the atmosphere being clouded over by all the debris
                                        having been injected into it by the previous four events. This is all described in Revelation 8:5-
                                        12. The New World Order will take control of planet earth on May 4, 2027 and will be in control
                                        for the next 42 months. This is described in Revelation 13:1-5. No sooner than 21 months
                                        later Satan will appear on planet earth along with the angels that were thrown out of heaven
                                        with him. Four portions of Daniel and Revelation describe what will be happening during the
                                        remaining “time of trouble” while he is here. Most people are afraid of the unknown. In the end,
                                        God will create a “new heaven and a new earth” wherein will reign everlasting righteousness.
                                        When one considers all the problems facing planet earth, one might ask, is there any solution
                                        to this mess? The solution to all that we are facing is shown in this book.
                                        </p>
                                       
                
                                    `,

                                ebooks: {
                                    // stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/go-tell-the-world-of-their-danger-james-reule/1137021737?ean=9781648955327',
                                    // amazon: 'https://www.amazon.com/America-Come-Get-James Reule-ebook/dp/B096L6K52B/ref=sr_1_1?dchild=1&keywords=9781648954115&qid=1623259921&sr=8-1',
                                },
                                paperback: {
                                    // amazon: 'https://www.amazon.com/America-Come-Get-James Reule/dp/1648954103/ref=sr_1_1?dchild=1&keywords=9781648954108&qid=1623259912&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/go-tell-the-world-of-their-danger-james-reule/1137021737?ean=9781648955310',
                                    // booksamillion: 'https://www.booksamillion.com/p/America-Come-Get/James Reule/9781648954108?id=8255501074287',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;