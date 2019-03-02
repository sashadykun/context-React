import React from 'react';
import UserCreate from './user_create';
import { LanguageStore } from '../contexts/language_context';
import ColorContext from '../contexts/color_context';
import LanguageSelector from './language_selector';




class App extends React.Component {

    // state = { language: 'english'}

    // onLanguageChange = (language) => {
    //     this.setState({ language });
    // }

    render(){
        return <div className="ui container">

            <LanguageStore>
                <LanguageSelector />
                
                <ColorContext.Provider value="red">
                    
                    <UserCreate />
                    
                </ColorContext.Provider>
            </LanguageStore>
        </div>
    }
    
}

export default App;