import React, { Component } from 'react';
import axios from 'axios';
import { Banner } from './Components/Banner/banner.component';
import { FiltersWrapper } from './Components/Filters Wrapper/filters-wrapper.component';
import { Listing } from './Components/Listing/listing.component';
import { MorePosts } from './Components/More Posts/more-posts.component';
import { Footer } from './Components/Footer/footer.component';

import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      type: '',
      industry: '',
      isLoaded: false,
      page: 1
    }

    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleIndustryChange = this.handleIndustryChange.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  handleTypeChange(event) {
    this.setState({type: event.target.value});
  }

  handleIndustryChange(event) {
    this.setState({
      industry: event.target.value,
      page: 1
    });

    this.fetchPosts();
  }

  fetchPosts() {
    axios.get(`https://crowdriffstg.wpengine.com/wp-json/wp/v2/showcase?per_page=6&page=${this.state.page}`)
      .then(res => this.setState((prevState) => ({
          data: res.data,
          isLoaded: true,
          page: prevState.page + 1
      })))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchPosts();
	}

  render() {
    const { data, type, industry, isLoaded } = this.state;

    let filteredData = data.slice();
    if (type) {
      filteredData = filteredData.filter(item => item.acf.content.includes(type))
    }
    if (industry) {
      filteredData = filteredData.filter(item => item.acf.industry.includes(industry))
    }

    console.log(this.state)

    return (
      <div className="App">
        <Banner />
        <FiltersWrapper
          type={type}
          industry={industry}
          handleTypeChange={this.handleTypeChange}
          handleIndustryChange={this.handleIndustryChange}
        />
        { filteredData.length > 0 &&
          <Listing 
            data={filteredData}
            count={filteredData.length}
          />
        }
        { filteredData.length == 0 && isLoaded &&
          <section className="no-results">
            <div className="container">
              <h2>Sorry, there are no matches. Please try again.</h2>
            </div>
          </section>
        }
        <MorePosts
          handleClick={this.fetchPosts}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
