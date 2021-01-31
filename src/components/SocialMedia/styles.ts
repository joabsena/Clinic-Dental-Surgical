import styled, { css, DefaultTheme } from 'styled-components';
import { SocialColors, SocialMediaProps } from './index';

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: SocialColors) => css`
    color: ${theme.colors[color]};
  `,
};

export const Wrapper = styled.main``;

export const List = styled.ul<SocialMediaProps>`
  ${({ theme, color }) => css`
    display: flex;
    list-style: none;
    ${!!color && wrapperModifiers.color(theme, color)}
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`;
