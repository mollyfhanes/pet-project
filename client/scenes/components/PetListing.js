import React from 'react'
import PropTypes from 'prop-types'

function PetListing({ pet }) {
  console.log(pet)
  const { name, photos } = pet
  const icon = photos && photos.length ? photos[0].small : null
  return (
    <div className="listing">
      <h2>{name}</h2>
      <img src={icon} alt="pet pic" />
    </div>
  )
}

export default PetListing

PetListing.propTypes = {
  pet: PropTypes.shape({ id: PropTypes.number }),
}

PetListing.defaultProps = {
  pet: {
    id: 0,
    name: PropTypes.string,
    photos: PropTypes.array,
  },
}
