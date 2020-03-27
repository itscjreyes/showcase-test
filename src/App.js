import React, { Component } from 'react';
import { IndustryFilter } from './Components/Filters/filter.industry.component';
import { TypeFilter } from './Components/Filters/filter.type.component';
import { Listing } from './Components/Listing/listing.component';

import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      type: '',
      industry: '',
      isLoaded: false
    }

    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleIndustryChange = this.handleIndustryChange.bind(this);
  }

  handleTypeChange(event) {
    this.setState({type: event.target.value});
  }

  handleIndustryChange(event) {
    this.setState({industry: event.target.value});
  }

  componentDidMount() {
		fetch('https://crowdriffstg.wpengine.com/wp-json/wp/v2/showcase')
			.then(response => response.json())
			.then(data => 
				this.setState({
					data: data,
					isLoaded: true
				})
			)
			.catch(err => console.log(err))
	}

  render() {
    const { data, type, industry, isLoaded } = this.state;

    let filteredData = data.slice();
    if (type) {
      filteredData = filteredData.filter(item => item.acf.type.includes(type))
    }
    if (industry) {
      filteredData = filteredData.filter(item => item.acf.industry.includes(industry))
    }

    console.log(filteredData)

    return (
      <div className="App">
        <div className="container">
          <h1>Industry Showcase</h1>
          <div className="filters">
            {/* <TypeFilter
              value={type}
              handleChange={this.handleTypeChange}
            /> */}
            <IndustryFilter
              value={industry}
              handleChange={this.handleIndustryChange}
            />
          </div>
        </div>
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
      </div>
    )
  }
}

export default App;
