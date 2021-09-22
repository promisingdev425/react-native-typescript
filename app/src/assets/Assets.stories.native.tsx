import React from 'react'

import {
  spaceArgTypes,
  colorArgTypes,
  backgroundColorArgTypes,
  borderArgTypes,
  flexboxArgTypes,
  layoutArgTypes,
  positionArgTypes,
} from '~/storybook-utils'

import { Icons } from '~/assets/images/icons'
import { themes} from '~/theme'

import { Box, Title } from '~/components'

export default {
  title: 'Theming/Assets',
  argTypes: {
    title: {
      control: 'text',
      description: 'Sets the `<title>` of the SVG. This should be used to ensure your icons are accessible.',
    },
    width: {
      control: 'number',
      description: 'Icon width',
    },
    height: {
      control: 'number',
      description: 'Icon height',
    },
    ...colorArgTypes,
    ...backgroundColorArgTypes,
    ...spaceArgTypes,
    ...layoutArgTypes,
    ...flexboxArgTypes,
    ...positionArgTypes,
    ...borderArgTypes,
    ref: {
      description: 'You can use the `ref` prop to access the underlying SVG element.',
    },
  },
}

const IconExample = ({name, children}) => (
  <Box
    m="sm"
    alignItems="center"
    justifyContent="center"
  >
    <Box m="xs">{children}</Box>
    <Title>{name}</Title>
  </Box>
);

export const IconGallery = (props) => (
  <Box flexDirection="row" flexWrap="wrap" alignItems="flex-end">
    { Object.keys(Icons).map((name) => {
      const Icon = Icons[name]
      return (
        <IconExample name={name} key={name}>
          <Icon {...props} />
        </IconExample>
      )
    })}
  </Box>
)

const Template = props => <Icons.Calendar {...props} />

export const StyledExample = Template.bind({})
StyledExample.args = {
  color: 'warning',
  bg: 'brandOrange',
  border: '1px dashed black',
  borderRadius: 6,
  margin: 10,
  padding: 10,
  width: 100,
  height: 100,
}
