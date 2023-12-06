import styled, { css } from "styled-components";

export const fonts = css`
    font-family: var(--font-primary);
`

export const FontTitle = styled.h1`
    ${fonts};
    font-size: 1rem;
    color: var(--color-white);
`

export const FontLabel = styled.label`
    ${fonts};
    font-size: .875rem;
    color: var(--color--grey-1);
`

export const FontParagraph = styled.p`
    ${fonts};
    font-size: .875rem;
    color: var(--color--grey-1);
`

export const FontA = styled.a`
    ${fonts};
    font-size: .875rem;
    color: var(--color--grey-1);
`