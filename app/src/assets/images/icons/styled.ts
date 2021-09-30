import styled from 'styled-components/native'
import {
  compose,
  space,
  layout,
  flexbox,
  position,
  border,
  color,
} from 'styled-system'

import * as BaseIcons from './components'

// Use this object to define default props for specific
// icons. Each key should be the name of an Icon component
// from the `components/` folder.
const defaults = {
  Application: {
    color: 'brandOrange'
  },
  Arrow: {
    color: 'overlay'
  },
  Calendar: {
    color: 'brandPink'
  },
  CircularArrow: {
    color: 'overlay'
  },
  Property: {
    color: 'white'
  },
  TabBrowse: {
    color: 'overlay'
  },
  TabLeaderboard: {
    color: 'overlay'
  },
  TabSummary: {
    color: 'overlay'
  }
}

// Use this to apply the default styled-system attributes
// to any icons you want to customize more specifically.
const composedProps = compose(
  space,
  layout,
  flexbox,
  position,
  border,
  color,
)

const Icons = {};

// If you want to customize an icon further than just setting
// its default props (example hover animations), you can add it
// to the Icons object as follows:

// import { Foo } from './components'
// Icons.Foo = props => {
//   // Specific customizations could go here or in your
//   // styled component definition.
//   return styled(Foo)(composedProps)
// }



// Inorder to minimize the amount of work necessary to
// add new icons to the application, all icons are
// dynamically exported from this file. This means that
// you cannot use import destructuring to access individual
// icons. Instead you have to access icons as properties
// of the default export.
//
// The following works:
// import Icons from '~/assets'
// <Icons.Calendar />
//
// But the following does not:
// import { Calendar } from '~/assets'
// <Calendar />
//
// The only alternative to this would be to manually
// define every styled version of the icons or to use
// a script to generate the component definitions.
// I'm sticking with the current solution since it's
// requires the least manual work when adding new icons.
export default Object.keys(BaseIcons)
  .reduce((acc, name) => {
    // Only add a new icon to the export if it isn't already defined.
    if (!acc[name]) {
      acc[name] = styled(BaseIcons[name])(composedProps)

      // Add any default props
      if (defaults[name]) acc[name].defaultProps = defaults[name];
    }
    return acc
  }, Icons) as any // TODO Is there a way to type this so Typescript knows what icons are available?


