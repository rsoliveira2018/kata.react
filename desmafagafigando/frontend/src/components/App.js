import React from 'react';
import { ContactPage } from '../pages/ContactPage'
import { StoriesPage } from '../pages/StoriesPage'
import { HomePage } from '../pages/HomePage'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {currentPage: props.renderedPage}
    this.handleHomePageClick = this.handleHomePageClick.bind(this);
    this.handleStoriesPageClick = this.handleStoriesPageClick.bind(this);
    this.handleContactPageClick = this.handleContactPageClick.bind(this);
  }

  handleHomePageClick(){
    this.setState({
      currentPage: "home"
    });
  }

  handleStoriesPageClick(){
    this.setState({
      currentPage: "stories"
    });
  }

  handleContactPageClick(){
    this.setState({
      currentPage: "contact"
    });
  }

  render() {
    
    const currentPage = this.state.currentPage;
    let renderedPage;

    if(currentPage === "stories") {
      renderedPage = (
        <div>
          <StoriesPage />
        </div>
      );
    } else if(currentPage === "contact") {
      renderedPage = (
        <div>
          <ContactPage />
        </div>
      );
    } else {
      renderedPage = (
        <div>
          <HomePage />
        </div>
      );
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12 centered">

            <button className="btn btn-link links" onClick={this.handleHomePageClick} >
              Home
            </button>
            |
            <button className="btn btn-link links" onClick={this.handleStoriesPageClick} >
              Relatos
            </button>
            |
            <button className="btn btn-link links" onClick={this.handleContactPageClick} >
              Contato
            </button>

          </div>
        </div>
        {renderedPage}
      </div>
    );

  }
}

export { App };