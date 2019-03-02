import React from 'react';
import LanguageContext from '../contexts/language_context';
import ColorContext from '../contexts/color_context';


class Button extends React.Component {
    // static contextType = LanguageContext; // added property to class so now we can use this.context property

    renderSubmit (language) {
        return ( language ) === 'english' ? 'Submit' : 'Подати'
    }

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'подати';
        return (
            <ColorContext.Consumer>
            
            {(color) =>
                <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {({ language }) => this.renderSubmit(language)}
                    </LanguageContext.Consumer>
                
                </button>
            }
            
                
            </ColorContext.Consumer>
        )
    }
}

export default Button;