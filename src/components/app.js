import React from 'react';
import UserCreate from './user_create';
import LanguageContext from '../components/contexts/language_context';
import ColorContext from '../components/contexts/color_context';




class App extends React.Component {

    state = { language: 'english'}

    onLanguageChange = (language) => {
        this.setState({ language });
    }

    render(){
        return <div className="ui container">
            <div>
                Select a Language:
                <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                <i className="flag ua" onClick={() => this.onLanguageChange('ukrainian')} />
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
                
                
            </div>
            
        </div>
    }
    
}

export default App;