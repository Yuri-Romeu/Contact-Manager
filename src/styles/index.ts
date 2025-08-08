import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: #F9FAFC;
}
`;

export const Container = styled.div`
     max-width: 1200px;
     margin: 30px auto;
     padding: 16px;
     background-color: #fff;
     display: grid;
     grid-template-columns: 224px auto;
`;

export default EstiloGlobal;
