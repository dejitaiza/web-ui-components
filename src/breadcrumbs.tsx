import * as React from 'react';

const BreadcrumbsStyles = {
  wrapper: {
    fontSize: '15px'
  } as React.CSSProperties,
  crumb__clickable: {
    cursor: 'pointer',
    color: '#4CAF50'
  }
};

export const Breadcrumbs = ({
  path
}: {
  path: {
    text: string;
    onClick?: () => any;
  }[];
}) => {
  return (
    <div style={BreadcrumbsStyles.wrapper}>
      {path.map((p, i) => {
        return (
          <span key={i}>
            {i ? <span> ▸ </span> : null}
            <span
              style={p.onClick ? BreadcrumbsStyles.crumb__clickable : null}
              onClick={p.onClick}
            >
              {p.text}
            </span>
          </span>
        );
      })}
    </div>
  );
};
