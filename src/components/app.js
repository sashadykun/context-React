import React from 'react';
import UserCreate from './user_create';


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
                <UserCreate />
            </div>
            
        </div>
    }
    
}

export default App;