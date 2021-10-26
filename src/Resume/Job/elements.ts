import styled, { css } from "styled-components";
import { divider, overview } from "../elements";

export const Job = styled.li<{ print: boolean }>(
  ({ print }) => css`
    @media print {
      display: ${print ? `block` : `none`};
    }
  `
);

export const JobOverview = styled.div(
  () => css`
    ${overview};
    grid-template-columns:
      [role-start]
      max-content
      [role-end company-start]
      minmax(max-content, 1fr)
      [company-end timeframe-start]
      max-content
      [timeframe-end type-start]
      max-content
      [type-end location-start]
      13ch
      [location-end];

    @media screen {
      margin-bottom: 0.4rem;
    }
  `
);

export const Company = styled.div(
  () => css`
    grid-area: company;
  `
);

export const Timeframe = styled.div(
  ({ children = ``, theme }) => css`
    grid-area: timeframe;
    justify-self: flex-end;
    padding-right: 1ch;
    font-size: 0;

    &:after {
      content: "${(children as string).replace(/\//g, `.`)}";
      font-size: ${theme.sizes.body};
    }
  `
);

export const Type = styled.div(
  () => css`
    ${divider()};
    grid-area: type;
    justify-self: flex-end;
  `
);

export const JobMeta = styled.div(
  ({ theme }) => css`
    display: grid;
    width: 100%;
    margin-bottom: 0.4rem;
    color: ${theme.colors.primary};
    font-size: ${theme.sizes.small};
    font-weight: ${theme.weights.light};
    line-height: ${theme.sizes.label};

    @media screen {
      grid-template:
        "industry technologies"
        / max-content minmax(max-content, 1fr);
      grid-column-gap: 1ch;
    }

    @media print {
      grid-template:
        "industry"
        "technologies";
      grid-row-gap: 0.4rem;
    }
  `
);

export const Industry = styled.div(
  ({ theme }) => css`
    grid-area: industry;

    &:before {
      content: "Industry: ";
      color: ${theme.colors.text};
      user-select: none;
    }
  `
);

export const Highlights = styled.ul(
  ({ theme }) => css`
    padding-left: 3ch;
    font-size: ${theme.sizes.body};
  `
);

export const Highlight = styled.li(() => css``);

export const Role = styled.div<{ showDivider: boolean }>(
  ({ showDivider, theme }) => css`
    ${showDivider ? divider() : ``};
    grid-area: role;
    color: ${theme.colors.secondary};
    font-size: ${theme.sizes.label};
    font-weight: ${theme.weights.semibold};
  `
);
