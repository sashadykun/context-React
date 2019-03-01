import React from 'react';
import LanguageContext from '../components/contexts/language_context';


class Button extends React.Component {
    static contextType = LanguageContext; // added property to class so now we can use this.context property

    render() {
        const text = this.context === 'english' ? 'Submit' : 'подати';
        return <button className="ui button primary">{text}</button>
    }
}

export default Button;