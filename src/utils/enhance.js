const EnhancedComponent = component => (
    class extends component {
        constructor(props) {
            super(props);
        }

        push(...args) {
            this.props.navigation.push(...args)
        }

        back(...args) {
            this.props.navigation.goBack(...args)
        }
    }
)

export default EnhancedComponent;