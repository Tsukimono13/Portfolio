import './App.css';
import {Header} from "layout/header/Header";
import {Main} from "layout/sections/main/Main";
import {StackBlock} from "layout/sections/stack/StackBlock";
import {Footer} from "layout/footer/Footer";
import {Contact} from "layout/sections/contacts/Contact";
import {Works} from "layout/sections/works/Works";
import {GoTop} from "components/goTopBtn/GoTop";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <StackBlock/>
            <Works/>
            <Contact/>
            <Footer/>
            <GoTop/>
        </div>
    );
}

export default App;

