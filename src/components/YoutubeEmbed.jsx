import { React, useState } from 'react'
import Loading from './Loading'

function YoutubeEmbed({ youtubeId }) {
  const [loading, setLoading] = useState(true)

  return (
    <div>
      <iframe
        style={{ display: !loading ? 'block' : 'none' }}
        onLoad={() => setLoading(false)}
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
      {loading && <Loading />}
    </div>
  )
}

export default YoutubeEmbed
