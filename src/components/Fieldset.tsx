import { View, Flex } from '@aws-amplify/ui-react';

interface FieldsetProps {
  children: React.ReactNode;
  legend: string;
  direction?: 'row' | 'column'
}

export const Fieldset = ({legend, children, direction = 'column', ...rest}: FieldsetProps) => {
  return (
    <View as="fieldset" {...rest}>
      <legend className="amplify-visually-hidden">{legend}</legend>
      <Flex direction={direction}>
        <View aria-hidden="true" className="amplify-label">{legend}</View>
        <View>{ children }</View>
      </Flex>
    </View>
  )
}