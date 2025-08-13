import styled from 'styled-components';

type Props = {
     isActive?: boolean;
};

export const Container = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     padding: 20px;
     border-right: 1px solid #eef1f6;
     width: 250px;
`;

export const Title = styled.h1`
     font-size: 28px;
     color: #333;
     margin-bottom: 20px;
`;

export const Classificacao = styled.ul`
     list-style: none;
`;

export const ClassificacaoItem = styled.li<Props>`
     font-size: 18px;
     color: #000;
     font-weight: 400;
     margin-bottom: 5px;
     cursor: pointer;
     background-color: ${props => (props.isActive ? '#F2F7FC' : 'transparent')};
     padding: 10px;
     border-radius: 5px;
`;

export const Numeros = styled.span`
     font-size: 16px;
     color: #555;
     background-color: #d9dfe9ff;
     padding: 3px 7px;
     border-radius: 15px;
     margin-left: 5px;
`;
