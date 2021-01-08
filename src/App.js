import React, {useEffect, useState} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsCards from './components/news-cards/news-cards.component'
import wordsToNumbers from 'words-to-numbers'

import { useDispatch } from 'react-redux';
import { getData } from './components/redux/articleSlice';
import { useSelector } from 'react-redux'
import { selectData } from './components/redux/articleSlice'

import useStyles from './App.styles';
import Homepage from './components/homepage/homepage';

const App = () => {
    const alanKey= '80b97b4126c591105f769343ca0751e72e956eca572e1d8b807a3e2338fdd0dc/stage'

    const dispatch = useDispatch()

    // index of article being read
    const [activeArticle, setActiveArticle] = useState(-1)
    const classes = useStyles();

    const articles = useSelector(selectData)

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === "newHeadlines"){
                    dispatch(getData(articles))
                    setActiveArticle(-1)
                }

                else if (command === "highlight"){
                    // recommended by react as way to change state when it is dependant on prev state
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1)
                }

                else if (command ==="open"){
                    // if we get two or for etc, number.length > 2... just 3 would have number.length = 1
                    // fuzzy search converts for to four
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number
                    const article = articles[parsedNumber - 1]

                    if (parsedNumber > articles.length){
                        alanBtn().playText('Does not exist bruh')
                    }
                    else if (article){
                        window.open(article.url, '_blank')
                        alanBtn().playText("Opening...")
                    }
                }

                else if(command==="refresh")
                    window.location.reload(true)
            }
        })
    }, [])

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
            </div>
            {
                Object.keys(articles).length !==0 ?
                <NewsCards activeArticle={activeArticle}/> :
                <Homepage />
            }

        </div>
    )
}

export default App
