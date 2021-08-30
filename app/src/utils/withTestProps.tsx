import React, { Component } from 'react'

interface ITest {
  testID: string
}

function withTestProps<T>(WrappedComponent: React.FC) {
  return class extends Component<ITest & T> {
    public render() {
      return <WrappedComponent testID={this.props.testID} {...this.props} />
    }
  }
}

export default withTestProps
