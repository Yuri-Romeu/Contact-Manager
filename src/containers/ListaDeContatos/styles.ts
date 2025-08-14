import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

export const Container = styled.main`
     padding: 20px;
     margin-left: 26px;
`;

export const SearchInput = styled.input`
     width: 80%;
     padding: 10px 30px;
     border: 1px solid #ccc;
     border-radius: 4px;
     margin-bottom: 20px;
     color: #333;
     margin-right: 10px;

     &::placeholder {
          color: #999;
          font-size: 16px;
          font-weight: 500;
     }
`;

export const BotaoAdicionarContato = styled(Link)`
     text-decoration: none;
     padding: 10px 20px;
     background-color: #1d73f7;
     color: #fff;
     border: none;
     border-radius: 4px;
     cursor: pointer;
     font-size: 16px;

     &:hover {
          background-color: #155bb5;
     }
`;

export const ListaContatos = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
     gap: 20px;
`;

export const Icon = styled(IoIosSearch as React.ComponentType).attrs({
     size: 22,
})`
     position: absolute;
     left: 6px;
     top: 31%;
     transform: translateY(-50%);
     color: #999;
`;
