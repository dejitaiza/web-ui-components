import * as React from 'react';

const HEADER_FONT = 'Avenir Next';

const H1Styles = {
  wrapper: {
    fontFamily: HEADER_FONT,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '48px',
    letterSpacing: '-0.04em',
    color: '#000000',
    lineHeight: '72px'
  } as React.CSSProperties
};

export const H1 = ({ children, style }: { children: any; style?: any }) => {
  return <div style={{ ...H1Styles.wrapper, ...style }}>{children}</div>;
};

const H2Styles = {
  wrapper: {
    fontFamily: HEADER_FONT,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '36px',
    lineHeight: '60px',
    letterSpacing: '-0.04em',
    color: '#000000'
  } as React.CSSProperties
};

export const H2 = ({ children, style }: { children: any; style?: any }) => {
  return <div style={{ ...H2Styles.wrapper, ...style }}>{children}</div>;
};

const H3Styles = {
  wrapper: {
    fontFamily: HEADER_FONT,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '48px',
    letterSpacing: '-0.02em',
    color: '#000000'
  } as React.CSSProperties
};

export const H3 = ({ children, style }: { children: any; style?: any }) => {
  return <div style={{ ...H3Styles.wrapper, ...style }}>{children}</div>;
};

const H4Styles = {
  wrapper: {
    fontFamily: HEADER_FONT,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '28px',
    letterSpacing: '0em',
    color: '#000000'
  } as React.CSSProperties
};

export const H4 = ({ children, style }: { children: any; style?: any }) => {
  return <div style={{ ...H4Styles.wrapper, ...style }}>{children}</div>;
};

const TitleStyles = {
  wrapper: {
    fontFamily: HEADER_FONT,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '15px',
    lineHeight: '40px',
    letterSpacing: '0.02em',
    color: '#000000'
  } as React.CSSProperties
};

export const Title = ({ children, style }: { children: any; style?: any }) => {
  return <div style={{ ...TitleStyles.wrapper, ...style }}>{children}</div>;
};

const TextStyles = {
  wrapper: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '15px',
    lineHeight: '20px',
    color: '#000000'
  } as React.CSSProperties
};

export const Text = ({ children, style }: { children: any; style?: any }) => {
  return <div style={{ ...TextStyles.wrapper, ...style }}>{children}</div>;
};
