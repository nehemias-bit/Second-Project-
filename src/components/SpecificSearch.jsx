import React from 'react';

class SpecificSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: this.props.search
    }
    console.log(props)
  }


  render() {

    return (
      <>

      </>
    )
  }
}

export default SpecificSearch;