import React, { Component } from 'react'
import LanguageContext from '../contexts/language_context';

class LanguageSelector extends Component {
    static contextType = LanguageContext
    render(){
        console.log(this.context)
        
        return (
            <div>
                Select a Language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag ua" onClick={() => this.context.onLanguageChange('ukrainian')} />
                
                
                
            </div>
        )
    }
}

export default LanguageSelector;