import React from 'react';

import { Parallax } from 'react-parallax';
import { Container } from './styles';

const ParallaxBox: React.FC = () => {
  return (
    <Parallax bgImage="/books.png" bgImageAlt="stack of books" strength={200} style={{backgroundPosition: "top"}}>
      <Container/>
    </Parallax>
  )
}

export default ParallaxBox;