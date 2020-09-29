import React, { Component } from 'react';
import i18n from '../i18n/i18n';

class Description extends Component {

    render() {
        return (<p>
                {i18n.t('body.descriptionApp')}
            </p>
        )
    }
}

export default Description;