import React from 'react';

export default function Layout(props) {
    const { header, footer } = props;
    return (
        <React.Fragment>
            { header }
            { props.children }
            { footer }
        </React.Fragment>
    )
}
