import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types';


const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null,
            error: false
        }
        static defaultProps = {
            onItemSelected: () => {}
        }
        static PropTypes = {
            onItemSelected: PropTypes.func
        }
    
        componentDidMount() {
    
            getData()
                .then((data) => {
                    this.setState({
                        data,
                        error: false
                    });
                })
            .catch(() => {this.onError()});
        }
        componentDidCatch(){
            this.setState({
                data: null,
                error: true
            })
        }
        onError(){
            this.setState({
                data: null,
                error: true
            })
        }

        render () {

            const {data, error} = this.state;

            if (error) {
                return <ErrorMessage/>
            }
            if (!data) {
                return <Spinner/>
            }

            return <View {...this.props} data={data}/>
        }
    }
}

export default withData;