import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { FaRegTrashCan } from 'react-icons/fa6';
import { MdOutlineModeEdit } from 'react-icons/md';
import { FaRegSave } from 'react-icons/fa';

type Props = {
     isActive?: boolean;
};

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

export const Icon = styled(FaUserCircle as React.ComponentType).attrs({
     size: 40,
})`
     color: #1d73f7;
     position: absolute;
     left: 10px;
     top: 18%;
     transform: translateY(-50%);
`;

export const IconDelete = styled(FaRegTrashCan as React.ComponentType).attrs({
     size: 20,
})``;

export const IconSave = styled(FaRegSave as React.ComponentType).attrs({
     size: 20,
})``;

export const IconEdit = styled(MdOutlineModeEdit as React.ComponentType).attrs({
     size: 20,
})<Props>`
     display: ${props => (props.isActive ? 'none' : 'block')};
`;

export const Classificacao = styled.span`
     font-size: 14px;
     background-color: #f0f2fb;
     color: #2676f2;
     padding: 5px 10px;
     border-radius: 10px;
     margin-top: 10px;
`;

export const IconEditWrapper = styled.span`
     color: #4d9affff;
     cursor: pointer;
     position: absolute;
     right: 10px;
     top: 45px;

     &:hover {
          color: #2b80f0ff;
     }
`;

export const IconDeleteWrapper = styled.span`
     cursor: pointer;
     position: absolute;
     right: 10px;
     top: 10px;

     svg {
          color: #ff4d4d;
          transition: color 0.3s ease;
     }

     &:hover svg {
          color: #e60000;
     }
`;

export const Input = styled.input`
     width: 60%;
     padding: 5px;
     border: 1px solid #ccc;
     border-radius: 4px;
     margin-bottom: 10px;
     color: #333;
`;

export const Select = styled.select`
     width: 60%;
     padding: 5px;
     border: 1px solid #ccc;
     border-radius: 4px;
     margin-bottom: 10px;
     color: #333;
`;
