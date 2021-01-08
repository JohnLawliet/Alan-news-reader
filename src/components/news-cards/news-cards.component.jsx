import React from 'react'
import {Grid, Grow} from '@material-ui/core'
import NewsCard from '../Card/card.component'
import { useSelector } from 'react-redux'
import { selectData } from '../redux/articleSlice'


import useStyles from './news-cards.styles';

const NewsCards = ({ activeArticle }) => {
    const articles = useSelector(selectData)
    const classes = useStyles()

    // passing cards from app to news card
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {articles.map( (article, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}}>
                    <NewsCard
                        index={i} article={article}
                        activeArticle={activeArticle}/>
                </Grid>
                )
            )}
            </Grid>
        </Grow>
    )
}

export default NewsCards
