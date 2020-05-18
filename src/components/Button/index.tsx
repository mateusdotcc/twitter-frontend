import React from 'react';
import { CircleSpinner } from 'react-spinners-kit';

import { Container } from './styles';

interface Props {
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  suffix?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props: Props) => {
  const {
    type = 'button',
    variant = 'primary',
    children,
    suffix,
    disabled = false,
    loading = false,
    onClick,
  } = props;

  return (
    <Container
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {!loading ? (
        <>
          {children}
          {suffix && <img src={suffix} alt="" />}
        </>
      ) : (
          <CircleSpinner size={20} />
        )}
    </Container>
  );
};

export default Button;
