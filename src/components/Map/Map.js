import React from 'react'
import styles from './Map.module.css'

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.953839920866!2d69.24426731454042!3d34.50405450123365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16b8ea717bc9f%3A0x7c484ae0501e67de!2sRumi%20Trading%20LLC!5e0!3m2!1sen!2s!4v1586981874220!5m2!1sen!2s"
      className={styles.map}
      title="Gogle Map"
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
    />
  )
}

export default Map
