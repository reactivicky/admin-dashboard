import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { getData } from '../../api/api'
import Sidebar from '../../components/Sidebar/Sidebar'
import DashboardCards from '../../components/DashboardCards/DashboardCards';
import DashboardTable from '../../components/DashboardTable/DashboardTable';


class Dashboard extends Component {
    state = {
      fakeData: []
    }


  async componentDidMount() {
    this._isMounted = true;
    try{
      const responseData = await getData()
      if(this._isMounted) {
        this.setState({ fakeData: responseData.data.data })
      }
    } catch(e) {
      console.log('something went wrong!')
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const token = localStorage.getItem('token')
    if (token === null) {
      return <Redirect to="/" />
    }
    return (
      <div className="appContainer">
        <Sidebar />
        <DashboardCards fakeData={this.state.fakeData} />
        <DashboardTable fakeData={this.state.fakeData} />
      </div>
    )
  }
}

export default Dashboard
