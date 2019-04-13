import * as React from 'react';
import { H4 } from './typography';

const ModalStyles = {
  wrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    fontSize: '15px',
    fontWeight: 300
  } as React.CSSProperties,
  modal: {
    flex: 0,
    backgroundColor: 'white',
    padding: '24px',
    minWidth: '280px'
  },
  title: {
    padding: '0 0 12px 0'
  },
  content: {}
};

export const Modal = ({
  children,
  title,
  visible,
  onOutsideClick
}: {
  children: any; //React.Component | React.Component[];
  title?: string;
  visible: boolean;
  onOutsideClick?: () => any;
}) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      style={ModalStyles.wrapper}
      onClick={function(e) {
        if (e.currentTarget === e.target) {
          onOutsideClick();
        }
      }}
    >
      <div style={ModalStyles.modal}>
        <div style={ModalStyles.title}>{title ? <H4>{title}</H4> : null}</div>
        <div style={ModalStyles.content}>{children}</div>
      </div>
    </div>
  );
};
