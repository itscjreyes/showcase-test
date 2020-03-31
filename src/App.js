import React, { Component } from 'react';
import axios from 'axios';
import { Banner } from './Components/Banner/banner.component';
import { FiltersWrapper } from './Components/Filters Wrapper/filters-wrapper.component';
import { Loader } from './Components/Loader/loader.component';
import { Listing } from './Components/Listing/listing.component';
import { MorePosts } from './Components/More Posts/more-posts.component';
import { NoResults } from './Components/No Results/no-results.component';
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
      pageSize: 4
    }

    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleIndustryChange = this.handleIndustryChange.bind(this);
    this.handleMorePosts = this.handleMorePosts.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  handleTypeChange(event) {
    this.setState({
      type: event.value,
      pageSize: 4
    });
  }

  handleIndustryChange(event) {
    this.setState({
      industry: event.value,
      pageSize: 4
    });
  }

  handleMorePosts() {
    this.setState((prevState) => ({
      pageSize: prevState.pageSize + 4
    }))
  }

  fetchPosts() {
    axios.get(`https://crowdriffstg.wpengine.com/wp-json/wp/v2/showcase/`)
      .then(res => this.setState({
          data: res.data,
          isLoaded: true
      }))
      .catch(err => console.log(err))
  }

  sortData() {
    this.state.data.sort((a,b) => parseFloat(b.acf.date) - parseFloat(a.acf.date))
  }

  componentDidMount() {
    this.fetchPosts();
	}

  render() {
    const { data, type, industry, isLoaded, pageSize } = this.state;

    this.sortData();
    console.log(data)

    let filteredData = data.slice();
    if (type) {
      filteredData = filteredData.filter(item => item.acf.content.includes(type))
    }
    if (industry) {
      filteredData = filteredData.filter(item => item.acf.industry.includes(industry))
    }

    // console.log(this.state)

    return (
      <div className="App">
        <Banner />
        <FiltersWrapper
          type={type}
          industry={industry}
          handleTypeChange={this.handleTypeChange}
          handleIndustryChange={this.handleIndustryChange}
        />
        { !isLoaded &&
          <Loader />
        }
        { filteredData.length > 0 && isLoaded ?
          (
            <div>
              <Listing 
                data={filteredData}
                size={pageSize}
              />
              <MorePosts
                handleClick={this.handleMorePosts}
              />
            </div>
          ) :
          (<NoResults />)
        }
        <Footer />
      </div>
    )
  }
}

export default App;
