import { Card } from '@aws-amplify/ui-react';
import { type CardProps } from '@aws-amplify/ui-react';

interface BoxProps extends CardProps {
  children: React.ReactNode;
  size?: 'zero' | 'xxxs' | 'xxs' | 'xs' | 'small' | 'medium' | 'large' | 'xl' | 'xxl' | 'xxxl';
}

export const Box = ({size  = 'medium', children, ...rest}: BoxProps) => {
  return (
    <Card backgroundColor="transparent" padding={size} {...rest}>
      { children }
    </Card>
  )
}