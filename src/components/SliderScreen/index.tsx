import { Container, Title} from "./styles";
import { StackedCarousel, StackedCarouselSlideProps, ResponsiveContainer } from 'react-stacked-center-carousel';
import React from 'react'
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



const data = [
  {cover: "/Arte01.jpg", title: 'Arte 01'},
  {cover: "/Arte02.jpg", title: 'Arte 02'},
  {cover: "/Arte03.jpg", title: 'Arte 03'},
  {cover: "/Arte04.jpg", title: 'Arte 04'},
  {cover: "/Arte05.jpg", title: 'Arte 06'},
]

interface props {
  fadeDistance?: number;
  transitionTime?: number;
  useGrabCursor?: boolean;
  useButton?: boolean;
  customScales?: number[];
  onActiveSlideChange?: (activeSlide: number) => void;
}

export const Card = React.memo(function (props: StackedCarouselSlideProps) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: '100%',
        height: 500,
        userSelect: 'none'
      }}
      className='my-slide-component'
    >
      <img
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'contain',
          borderRadius: 0,
          boxShadow: "0 4 10rem rgba(0,0,0,1)",    
          border:"4px solid #000000",
          background: "#fff",
        }}
        draggable={false}
        src={cover}
      />
    </div>
  );       

});

// export const CodeHighlight = React.memo(function (props: { code: string }) {
//   return (
//     <Box p={0} pt={1} pb={1}>
//       <Highlight className='typescript'>{props.code}</Highlight>
//     </Box>
//   );
// });


const SliderScreen = (props: props) => {

  const {
    fadeDistance,
    transitionTime = 450,
    useGrabCursor = true,
    useButton = true,
    customScales,
    onActiveSlideChange
  } = props;

  const ref = React.useRef<StackedCarousel>();
  
  return (
   
    <Container>
      
      <Title>ILUSTRAÇÕES</Title>
      
      <div style={{ width: '100%', position: 'relative' }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            let currentVisibleSlide = 5;
            if (width <= 1440) currentVisibleSlide = 3;
            if (width <= 1080) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={width < 800 ? width - 40 : 750}
                carouselWidth={width}
                data={data}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                transitionTime={transitionTime}
                useGrabCursor={useGrabCursor}
                {...(customScales ? { customScales } : {})}
                {...(fadeDistance !== undefined ? { fadeDistance } : {})}
                {...(onActiveSlideChange ? { onActiveSlideChange } : {})}
              />
            );
          }}
        />
        {useButton && (
        <>
          <Fab
            style={{ position: 'absolute', top: '40%', left: 10, zIndex: 10 }}
            size='small'
            color='primary'
            onClick={() => {
              ref.current?.goBack();
            }}
          >
            <ArrowBackIcon />
          </Fab>
          <Fab
            style={{ position: 'absolute', top: '40%', right: 10, zIndex: 10 }}
            size='small'
            color='primary'
            onClick={() => {
              ref.current?.goNext();
            }}
          >
            <ArrowForwardIcon />
          </Fab>
        </>
      )}
        
      </div>
     
    </Container>
  );
}

export default SliderScreen
