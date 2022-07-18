import React from 'react';
import styled from 'styled-components';

const Field = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  padding: 16px 0;
  margin-left: 7%;
  margin-top: ${(props) => props.marginTop};
  font-size: ${(props) => props.fontSize};
  letter-spacing: ${(props) => props.letterSpacing};
  color: ${(props) => props.color};
  &::placeholder {
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
  }
  &:focus {
    outline: none;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

const Icon = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 4%;
`;

const Box = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  border: 1px solid #ffffff;
  border-color: ${(props) => props.borderColor};
  margin: ${(props) => props.margin};
  overflow: hidden;
`;

const Input = ({
  type,
  placeholder,
  src,
  alt,
  margin,
  color,
  borderColor,
  fontSize,
  letterSpacing,
  onChange,
  value,
  marginTop,
}) => {
  return (
    <Box margin={margin} borderColor={borderColor}>
      <Field
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        color={color}
        value={value}
        marginTop={marginTop}
        autocomplete="off"
      />
      <Icon>
        <img src={src} alt={alt} />
      </Icon>
    </Box>
  );
};

export default Input;
