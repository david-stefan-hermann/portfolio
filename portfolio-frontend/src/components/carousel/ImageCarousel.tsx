import { Carousel, Container, Image } from 'react-bootstrap'
import { Box } from '@mui/material'


const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: { xs: '80%', sm: '100%' },
        }}
      >
        {
          images.length > 1 ?
            <Carousel>
              {
                images?.map((image, index) => (
                  <Carousel.Item key={index}>
                    <Image src={image} />
                  </Carousel.Item>
                ))
              }
            </Carousel> :
            <>
              <Image
                src={images[0]}
                onError={(e: any) => {
                  e.target.src = 'https://via.placeholder.com/600x400'
                }}
              />
            </>
        }
      </Box>
    </Box>
  )
}

export default ImageCarousel