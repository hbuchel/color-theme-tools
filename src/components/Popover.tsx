import { View, Button, Icon, Flex,  Text } from '@aws-amplify/ui-react';
import { Box } from '@/components/Box'
import { MdClose } from 'react-icons/md';
import { forwardRef } from 'react';
import { cloneElement } from 'react';
import ReactDOM from 'react-dom';
import { useA11yDialog } from 'react-a11y-dialog'


interface PopoverProps {
  children: React.ReactNode;
  triggerEl: React.ReactElement;
  title: string;
}

export const Popover = forwardRef<HTMLDialogElement, PopoverProps>((props, ref) => {
  const { children, title, triggerEl} = props;

  const [instance, attr] = useA11yDialog({
    // The required HTML `id` attribute of the dialog element, internally used
    // a11y-dialog to manipulate the dialog.
    id: 'my-dialog',
    // The optional `role` attribute of the dialog element, either `dialog`
    // (default) or `alertdialog` to make it a modal (preventing closing on
    // click outside of ESC key).
    role: 'dialog',
    // The required dialog title, mandatory in the document
    // to provide context to assistive technology.
    title: 'My dialog',
  })

  const trigger = cloneElement(triggerEl, {onClick: () => instance.show()})

  const dialog = ReactDOM.createPortal(
    <View {...attr.container} className="popover__wrapper" ref={ref}>
      <View {...attr.overlay} className="popover__backdrop"></View>
      <View className="popover__modal"  {...attr.dialog}>
          <Box>
            <Flex direction="column">
              <Flex alignItems="center">
                <Text {...attr.title}>{ title }</Text>
                <Button {...attr.closeButton} marginInlineStart="auto" type="submit" size="small" variation="link" ariaLabel="Close">
                  <Icon height="20px" ariaLabel="" as={MdClose} />
                </Button>
              </Flex>
              { children }
            </Flex>
          </Box>
      </View>
    </View>,
    document.body
  )


  return (
    <>
      { trigger }
      { dialog }
    </>
  )
});