import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.main`
     padding: 20px;
     margin-left: 26px;
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const Title = styled.h1`
     font-size: 36px;
     color: #333;
     margin-bottom: 20px;
`;

export const Icon = styled(FaUserCircle as React.ComponentType).attrs({
     size: 55,
})`
     color: #1d73f7;
     margin-bottom: 20px;
`;

export const Select = styled.select`
     width: 60%;
     padding: 10px 20px;
     border: 1px solid #ccc;
     border-radius: 4px;
     margin-bottom: 20px;
     color: #333;
     margin-right: 10px;
`;

export const Adicionar = styled.button`
     padding: 10px 20px;
     background-color: #1d73f7;
     color: #fff;
     border: none;
     border-radius: 4px;
     cursor: pointer;
     margin-right: 10px;
     transition: background-color 0.3s ease;

     &:hover {
          background-color: #0056b3;
     }
`;
