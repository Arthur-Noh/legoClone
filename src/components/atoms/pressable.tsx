import styled from 'styled-components';

const Pressable = styled.div`
:hover {
    cursor: pointer;
}
/* Disable drag option */
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
`;

export default Pressable;