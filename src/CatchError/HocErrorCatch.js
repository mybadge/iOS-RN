import React from 'react'
import {
    View,
    Text
} from 'react-native'

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default (WrappedComponent)=> {

    class Component extends React.Component {

        constructor(props){
            super(props)
            this.state = {
                error: new Error(),
                hasError: false // UI级代码是否崩溃
            }
        }

        componentDidCatch(error, info){
            this.setState({
                error,
                hasError: true
            })
        }

        render() {
           if (this.state.hasError){
               return <View>
                   <Text>
                       {this.state.error.toString()}
                   </Text>
               </View>
           }
            return <WrappedComponent {...this.props}/>
        }
    }

    Component.displayName = `HOC(${getDisplayName(WrappedComponent)})`;

    return Component
}