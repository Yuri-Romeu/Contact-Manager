import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';

export const ContatoContainer = styled.div`
     position: relative;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 10px;
     border: 2px solid #eef1f6;
     border-radius: 8px;
     max-width: 450px;
     width: 100%;
`;

export const Nome = styled.h1`
     font-size: 20px;
     color: #333;
     margin: 10px 0;
     letter-spacing: 1px;
`;

export const Numero = styled.p`
     font-size: 16px;
     color: #555;
     margin: 5px 0;
`;

export const Email = styled.p`
     font-size: 14px;
     color: #777;
     margin: 5px 0;
`;

export const Icon = styled(FaUserCircle)`
     color: #1d73f7;
     position: absolute;
     left: 10px;
     top: 18%;
     transform: translateY(-50%);
`;

export const IconDelete = styled(FaRegTrashCan)`
     color: #ff4d4d;
     cursor: pointer;
     position: absolute;
     right: 10px;
     top: 10px;

     &:hover {
          color: #e60000;
     }
`;

export const Classificacao = styled.span`
     font-size: 14px;
     background-color: #f0f2fb;
     color: #2676f2;
     padding: 5px 10px;
     border-radius: 10px;
     margin-top: 10px;
`;
