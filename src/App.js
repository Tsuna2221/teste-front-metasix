import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Header from "./components/Header"
import SectionSelector from './components/SectionSelector'
import FAQSection from './components/FAQSection'

//Client
import { getFaq } from './client'

class App extends Component {
    render() {
        const { questions } = this.state

        return (
            <Router>
                <div className='App'>
                    <Header/>
                    <section className="mar-h-40">
                        <Route path="/" component={SectionSelector} />
                        <Route path="/home" render={() => <h1>Home</h1>} />
                        <Route path="/faq">
                            <FAQSection questions={questions}/>
                        </Route>
                        <Route path="/locais" render={() => <h1>Locais</h1>} />
                        <Route path="/categorias" render={() => <h1>Categorias</h1>} />
                    </section>
                </div>
            </Router>
        );
    }

    state = {
        questions: {
            loading: true,
            results: []
        }
    }

    componentDidMount = () => {
        Promise.all([getFaq() /* Add more necessary calls */])
            .then(res => this.setState({...this.state, questions: { loading: false, results: res[0].results.sort((a, b) => a.position-b.position) }}))
    }
}

export default App;