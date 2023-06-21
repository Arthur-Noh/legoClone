import styled from 'styled-components';
import globalFonts from '../../theme/style/globalFonts';

const Text = styled.div`
font-family: ${globalFonts.NanumR}, 'sans-serif';
font-size: ${({ theme }) => theme.typography.size.m1}px;
font-weight: ${({ theme }) => theme.typography.weight.regular};
color: ${({ theme }) => theme.colors.black.base};
`;

export default Text;