import * as React from 'react';

const ButtonStyles = {
  wrapper: {
    padding: '8px 16px',
    userSelect: 'none',
    minWidth: '100px',
    fontSize: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    margin: '2px'
  },
  __compact: {
    padding: '6px 12px',
    fontSize: '15px',
    minWidth: '72px'
  },
  __primary_default: {
    backgroundColor: '#2F80ED',
    color: 'white'
  },
  __primary_pressed: {
    backgroundColor: '#2267C5',
    color: 'white'
  },
  __danger_default: {
    backgroundColor: '#EB5757',
    color: 'white'
  },
  __danger_pressed: {
    backgroundColor: '#C24848',
    color: 'white'
  },
  __base_default: {
    backgroundColor: '#E0E0E0',
    color: 'black'
  },
  __base_pressed: {
    backgroundColor: '#CACACA',
    color: 'black'
  },
  __disabled: {
    backgroundColor: '#E0E0E0',
    color: 'white'
  }
};

type ButtonState = 'pressed' | 'default';

export class Button extends React.Component<
  {
    children: any;
    type?: any;
    disabled?: boolean;
    onClick?: () => any;
    compact?: boolean;
  },
  {
    state: ButtonState;
  }
> {
  state = {
    state: 'default' as ButtonState
  };
  startPress = () => {
    this.setState({
      state: 'pressed'
    });
  };
  stopPress = () => {
    this.setState({
      state: 'default'
    });
  };
  render() {
    const { state } = this.state;
    const { children, type = 'base', disabled, onClick, compact } = this.props;
    let style = {
      ...ButtonStyles.wrapper,
      ...(compact ? ButtonStyles.__compact : null),
      ...(disabled
        ? ButtonStyles.__disabled
        : ButtonStyles['__' + type + '_' + state])
    };

    return (
      <div
        onClick={onClick}
        onMouseDown={this.startPress}
        onMouseUp={this.stopPress}
        onMouseOut={this.stopPress}
        style={style}
      >
        {children}
      </div>
    );
  }
}

const ButtonGroupStyles = {
  wrapper: {
    padding: '8px 16px',
    userSelect: 'none',
    minWidth: '100px',
    fontSize: '18px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '4px',
    margin: '2px'
  },
  groupWrapper: {
    display: 'flex',
    padding: '0'
  },
  buttonWrapper: {
    listStyle: 'none',
    padding: '0',
    borderRadius: '100',
    margin: '0 -1px',
    overflow: 'hidden',
    display: 'block',
    boxSizing: 'border-box',
    position: 'relative'
  } as React.CSSProperties
};

export class ButtonGroup extends React.Component<{
  children: any[];
}> {
  renderButton(buttonElement) {
    return <li style={ButtonGroupStyles.buttonWrapper}>{buttonElement}</li>;
  }

  render() {
    const { children } = this.props;

    return (
      <ul style={ButtonGroupStyles.groupWrapper}>
        {children.map(button => this.renderButton(button))}
      </ul>
    );
  }
}
