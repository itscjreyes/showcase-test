import React, { Component } from 'react';

class Form extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '2719325',
                    formId: 'f8be0243-3c37-4e98-be47-1d39d1b37fb9',
                    target: '#hubspot-form'
                })
            }
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <div className="container">
                    <div id="hubspot-form"></div>
                </div>
            </div>
        )
    }
}

export default Form;