import React from 'react'
class UserSummary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showmore: false,
    }
  }

  showMore = (e) => {
    e.stopPropagation()
    this.setState((prevState) => ({
      showMore: !prevState.showMore
    })
    )
  }


  componentWillReceiveProps() {
    this.setState({
      showMore: false
    })
  }


  render() {
    let userInfo = this.props.userData;
    let message = "";


    message = (userInfo === null) ? "Nothing to see here." : (
      <div className="card">
        <div className="front">
          <h1>{userInfo.name.first}</h1>
          <div className="story">
            <svg>
              <circle cx="120" cy="120" r="110" />
            </svg>
            <img className="img-round" src={userInfo.picture.large} alt="who's this?" onClick={this.showMore} />
          </div>
        </div>


        {
          this.state.showMore && (
            <div className="back">
              <h3>Email:</h3> <p>{userInfo.email}</p>
              <h3>Phone:</h3> <p>{userInfo.phone}</p>
              <h3>City:</h3> <p>{userInfo.city}</p>
              <h3>Street:</h3> <p>{userInfo.location.state}</p>
              <h3>Zip:</h3> <p>{userInfo.location.postcode}</p>
            </div>
          )
        }
      </div >
    )

    return (
      <>
        <p>{message}</p>
      </>
    )
  }
}



export default UserSummary