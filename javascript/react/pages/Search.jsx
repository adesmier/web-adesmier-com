import React   from 'react';
import { unmountComponentAtNode } from 'react-dom';


export default class Search extends React.Component {

    state = { closing: false }


    //--- LIFECYCLE FUNCTIONS ---

    componentDidMount() {
        this.searchEl = document.getElementById('index__react-search-component');

        //we need to listen for end of searchClosing animation to fade out the
        //search componenet before unmount
        this.searchEl.addEventListener('animationend', this.handleSearchClosing);
    }

    componentWillUnmount() {
        this.searchEl.removeEventListener('animationend', this.handleSearchClosing);
    }


    //--- FUNCTION DEFINITIONS ---

    handleSearchClosing = e => {
        const evtName = e.animationName;
        if(evtName === 'searchClosing') unmountComponentAtNode(this.searchEl);
    }

    close = () => {
        this.setState({ closing: true });
    }


    //--- RENDER ---

    render() {
        const { closing } = this.state;

        return (
            <div id="search__search-root" className={closing ? 'searchClosing' : null}>
                <div onClick={this.close}>Close</div>
            </div>
        );
    }
    
}