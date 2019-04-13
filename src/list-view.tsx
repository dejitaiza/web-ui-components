import * as React from 'react';
import { H3 } from './typography';
import { Button } from './button';
import { Spinner } from './spinner';

const icons = {
  empty: `
<svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.903 31.5C5.704 31.5 4.677 30.604 4.515 29.417L0.572998 0.5H29.427L25.485 29.417C25.323 30.605 24.297 31.5 23.097 31.5H6.903Z" fill="#C2E8FF"/>
  <path d="M28.854 1L24.988 29.349C24.86 30.29 24.047 31 23.097 31H6.903C5.953 31 5.14 30.29 5.011 29.349L1.146 1H28.854ZM30 0H0L4.021 29.484C4.217 30.925 5.448 32 6.903 32H23.097C24.552 32 25.783 30.925 25.979 29.484L30 0Z" fill="#7496C4"/>
  <path d="M7 4H6L9 28H10L7 4Z" fill="white"/>
</svg>
`,
  error: `
<svg width="36" height="32" viewBox="0 0 36 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34 32H2C1.283 32 0.622996 31.617 0.265996 30.996C-0.0900041 30.375 -0.0880041 29.611 0.272996 28.992L16.273 0.992C16.631 0.378 17.289 0 18 0C18.711 0 19.369 0.378 19.728 0.992L35.728 28.992C36.089 29.611 36.091 30.375 35.735 30.996C35.379 31.617 34.716 32 34 32Z" fill="#FFC107"/>
  <path d="M16 26.142C16 25.873 16.047 25.627 16.143 25.396C16.237 25.168 16.372 24.97 16.546 24.804C16.717 24.636 16.928 24.505 17.17 24.411C17.414 24.319 17.688 24.27 17.994 24.27C18.3 24.27 18.576 24.319 18.822 24.411C19.072 24.505 19.283 24.636 19.454 24.804C19.629 24.97 19.764 25.168 19.857 25.396C19.953 25.627 20 25.873 20 26.142C20 26.412 19.953 26.658 19.857 26.882C19.763 27.107 19.628 27.301 19.454 27.47C19.283 27.636 19.072 27.766 18.822 27.862C18.576 27.954 18.3 28 17.994 28C17.687 28 17.414 27.954 17.17 27.861C16.928 27.765 16.717 27.635 16.546 27.469C16.371 27.3 16.236 27.106 16.143 26.881C16.047 26.657 16 26.411 16 26.142ZM19.48 22H16.507L16.086 10H19.9L19.48 22Z" fill="#5D4037"/>
</svg>
`
};

const ListViewStyles = {
  wrapper: {},
  listWrapper: {
    display: 'flex',
    flexDirection: 'column'
  } as React.CSSProperties,
  messageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '288px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7F7F7'
  },
  message__text: {
    margin: '16px'
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '48px'
  } as React.CSSProperties,
  item: {
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
    backgroundColor: '#F7F7F7'
  },
  __odd: {
    backgroundColor: '#E3E3E3'
  }
};

export const ListView = ({
  title,
  items = [],
  action,
  empty = { message: 'Empty' },
  error,
  loading,
  onClick
}: {
  title: string;
  action: any;
  empty?: { message: string; action?: { text: string; onClick?: () => any } };
  error?: { message: string; onRetry?: () => any };
  loading: { message: string };
  items: {
    text: string;
  }[];
  onClick?: (item: any) => any;
}) => {
  let message;

  if (!items || !items.length) {
    message = {
      icon: <div dangerouslySetInnerHTML={{ __html: icons.empty }} />,
      text: empty.message,
      action:
        empty.action && empty.action.onClick ? (
          <Button type="primary" compact={true} onClick={empty.action.onClick}>
            {empty.action.text}
          </Button>
        ) : null
    };
  }

  if (error) {
    message = {
      icon: <div dangerouslySetInnerHTML={{ __html: icons.error }} />,
      text: error.message,
      action: error.onRetry ? (
        <Button type="primary" compact={true} onClick={error.onRetry}>
          Retry
        </Button>
      ) : null
    };
  }

  if (loading) {
    message = {
      icon: <Spinner />,
      text: loading.message
    };
  }

  return (
    <div style={ListViewStyles.wrapper}>
      {title || action ? (
        <div style={ListViewStyles.headerWrapper}>
          {title ? <H3>{title}</H3> : null}
          {action}
        </div>
      ) : null}
      {message ? (
        <div style={ListViewStyles.messageWrapper}>
          {message.icon}
          <div style={ListViewStyles.message__text}>{message.text}</div>
          <div>{message.action}</div>
        </div>
      ) : null}
      {!message ? (
        <div style={ListViewStyles.listWrapper}>
          {items.map((item, index) => {
            return (
              <div
                key={item.text}
                onClick={() => onClick(item)}
                style={{
                  ...ListViewStyles.item,
                  ...(index % 2 === 0 ? ListViewStyles.__odd : null)
                }}
              >
                {item.text}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
