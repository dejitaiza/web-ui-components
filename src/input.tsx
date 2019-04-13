import * as React from 'react';

const InputStyles = {
  wrapper: {
    padding: '6px 10px',
    userSelect: 'none',
    minWidth: '100px',
    fontSize: '15px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2px',
    border: '2px solid #BDBDBD',
    margin: '2px'
  } as React.CSSProperties,
  __error: {
    border: '2px solid #EB5757'
  }
};

export class Input extends React.Component<{
  value;
  placeholder;
  onChange;
  hasError;
}> {
  render() {
    const {
      value,
      placeholder = 'Placeholder',
      onChange,
      hasError
    } = this.props;
    return (
      <input
        style={{
          ...InputStyles.wrapper,
          ...(hasError ? InputStyles.__error : null)
        }}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}
