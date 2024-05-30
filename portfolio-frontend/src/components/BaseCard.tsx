import React from 'react'
import ImageCarousel from './carousel/ImageCarousel'
import { Button, CardContent, Grid, Paper, Typography } from '@mui/material'

const BaseCardImage: React.FC<{ images: string[] | undefined }> = ({ images }) => {
    return (
        <>
            {images && images[0] && (
                <Grid item xs={12} sm={3}>
                    <ImageCarousel images={images} />
                </Grid>
            )}
        </>
    )
}

interface BaseCardProps {
    imageLeft: boolean
    link: string | undefined
    images: string[] | undefined
    children: React.ReactNode
}

const BaseCard: React.FC<BaseCardProps> = ({ imageLeft, link, images, children }) => {

    return (
        <Paper
            elevation={3}
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mb: 2,
                width: '100%',
                overflow: 'hidden'
            }}>
            <Grid container spacing={2}>
                {imageLeft && <BaseCardImage images={images} />}
                <Grid item xs={12} sm={9} sx={{ justifyContent: "right" }}>
                    <CardContent>
                        {children}
                        {link && (
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ mt: 1 }}
                                onClick={() => {
                                    link && (
                                        window.open(link.startsWith('http://') || link.startsWith('https://') ? link : `http://${link}`)
                                        , '_blank')
                                }}
                            >
                                <Typography variant="body2">
                                    Webseite besuchen
                                </Typography>
                            </Button>
                        )}
                    </CardContent>
                </Grid>
                {!imageLeft && <BaseCardImage images={images} />}
            </Grid>
        </Paper>
    )
}

export default BaseCard
