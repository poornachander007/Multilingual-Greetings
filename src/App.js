import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const Button = props => {
  const {obj, isActive, onClickChangeLanguageButton} = props
  const {id, buttonText} = obj

  const onClickButton = () => {
    onClickChangeLanguageButton(obj)
  }

  const className = isActive ? `button ${'activeButton'}` : 'button'

  return (
    <li className="li">
      <button onClick={onClickButton} className={className} type="button">
        {buttonText}
      </button>
    </li>
  )
}

// Replace your code here
class App extends Component {
  state = {obj: languageGreetingsList[0]}

  onClickChangeLanguageButton = obj => {
    this.setState({obj})
  }

  render() {
    const {obj} = this.state
    const {id, imageUrl, imageAltText} = obj
    return (
      <div className="page_container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttons_container">
          {languageGreetingsList.map(item => (
            <Button
              onClickChangeLanguageButton={this.onClickChangeLanguageButton}
              isActive={item.id === id}
              key={item.id}
              obj={item}
            />
          ))}
        </ul>
        <div className="image_container">
          <img className="image" alt={imageAltText} src={imageUrl} />
        </div>
      </div>
    )
  }
}

export default App
