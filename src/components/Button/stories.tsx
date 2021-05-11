import { Story, Meta } from '@storybook/react/types-6-0'
import { ReactNode } from 'react'
import Button from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: Story<ReactNode> = () => <Button>testando</Button>
