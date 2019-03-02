import React from 'react';
import LanguageContext from '../components/contexts/language_context';
import ColorContext from '../components/contexts/color_context';


class Button extends React.Component {
    // static contextType = LanguageContext; // added property to class so now we can use this.context property

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'подати';
        return (
            <ColorContext.Consumer>
            
            {(color) =>
                <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {(value) => 'english' ? 'Submit' : 'Подати'}
                    </LanguageContext.Consumer>
                
                </button>
            }
            
                
            </ColorContext.Consumer>
        )
    }
}

export default Button;