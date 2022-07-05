import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadWallet } from 'actions/Wallet'

import Providers from './_Providers'
import Accounts from './_Accounts'

class Console extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="mt-3 row">
          <div className="col-md-1 col-lg-2 col-xl-3" />
          <div className="col-md-10 col-lg-8 col-xl-6">
            {this.props.externalProvider ? null : (
              <>
                {/* <Providers /> */}
                <Accounts />
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  externalProvider: state.wallet.externalProvider,
  browserHasProvider: state.network.browserProvider ? true : false
})

const mapDispatchToProps = dispatch => ({
  loadWallet: external => {
    dispatch(loadWallet(external))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Console)
