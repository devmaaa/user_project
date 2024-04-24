import { styled } from 'styled-components';

interface BallProps {
  checked: boolean;
}

export const ToggleWrapper = styled.div`
  display: inline-block;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
`;

export const ToggleLabel = styled.label`
  background-color: #111;
  width: 50px;
  border-radius: 50px;
  position: relative;
  padding: 2px 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Ball = styled.span<BallProps>`
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 3px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.2s ease;
  transform: translateX(${(props) => (props.checked ? '30px' : '2px')});
`;
