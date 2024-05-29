import { Carousel, Image } from 'react-bootstrap'


const ImageCarousel: React.FC<{ images: string[] }> = ({ images }) => {

  return (
    <div className=''>
      {
        images.length > 1 ?
          <Carousel>
            {
              images?.map((image, index) => (
                <Carousel.Item key={index}>
                  <Image src={image} rounded />
                </Carousel.Item>
              ))
            }
          </Carousel> :
          <>
            <Image
              src={images[0]}
              rounded
              onError={(e: any) => {
                e.target.src = 'https://via.placeholder.com/600x400'
              }}
            />
          </>
      }
    </div>
  )
}

export default ImageCarousel