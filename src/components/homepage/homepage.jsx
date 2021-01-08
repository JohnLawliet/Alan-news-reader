import React from 'react'
import {Grid, Grow, Typography} from '@material-ui/core'

import useStyles from './homepage.styles';


const Homepage = () => {
    const classes = useStyles()
    const infoCards = [
        { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
        { color: '#1565c0', title: 'Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
        { color: '#4527a0', title: 'Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s new in PlayStation 5' },
        { color: '#283593', title: 'Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
    ];

    // homepage cards
    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    infoCards.map((infoCard, i) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>

                                { infoCard.info ?
                                    <Typography variant="h6" >
                                        <strong>
                                            {infoCard.title}<br/>
                                        </strong>
                                        {infoCard.info}
                                    </Typography>
                                    : <Typography variant="h5" >{infoCard.title}</Typography>
                                }
                                <Typography variant="h6">Try saying : <br/><i>{infoCard.text}</i> </Typography>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Grow>
    )
}

export default Homepage
