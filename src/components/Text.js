import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-family: 'Poppins', sans-serif;
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
`;

const Text = ({ text, size, color, weight, margin }) => {
  return (
    <Paragraph size={size} color={color} weight={weight} margin={margin}>
      {text}
    </Paragraph>
  );
};

export default Text;
