import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ACTIONS from '../store/actions'
import PetListing from './components/PetListing'

function PetSearch(props) {
  const {
    token, getToken, loaded, pets, getPets,
  } = props

  useEffect(() => {
    if (!token) getToken()
    else if (!loaded) {
      getPets(token)
    }
  })

  return (
    <div className="search">
      <h1>Adopt A Pet</h1>
      {loaded && pets.map(pet => <PetListing pet={pet} key={pet.id} />)}
      {!loaded && <h4>Loading...</h4>}
    </div>
  )
}

const mapStateToProps = state => ({
  pets: state.pets,
  token: state.token,
  loaded: state.loaded,
})

const mapDispatchToProps = dispatch => ({
  getPets: token => dispatch(ACTIONS.getAllPets(token)),
  getToken: () => dispatch(ACTIONS.getToken()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PetSearch)
