import React from 'react';

// export default  function(props) {
//     console.log(props)

// }


export default class MenuItem extends React.Component {

    getIcon() {
        if (!this.props.color) {
            return null
        }
        return (<span className="badge" />)
    }
    getClasses() {
        // let classes = "personal "
        if (this.props.hasBg) {
            // classes += " bg"
            return "nav-item bg"
        }
        return "nav-item"
    }

    render() {
        const { label, url } = this.props;
        return (

            <a href={url} className={this.getClasses()}>
                {this.getIcon()}
                {label}
            </a>
        )
    }
}

