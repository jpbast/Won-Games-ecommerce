import { Story, Meta } from '@storybook/react/types-6-0'
import SignInUp, { SignInUpProps } from '.'

export default {
  title: 'SignInUp',
  component: SignInUp
} as Meta

export const Default: Story<SignInUpProps> = () => <SignInUp />
