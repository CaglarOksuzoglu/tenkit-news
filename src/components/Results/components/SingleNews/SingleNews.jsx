import React from 'react'

const SingleNews = ({singleNews}) => {
  return (
    <li key={singleNews._id}>
      <br />
      {singleNews.media}
      <br />
      <strong>Yazar: {singleNews.author}</strong> <br />
      {singleNews.title} <br />
      {singleNews.rights} <br />
      {singleNews.authors} <br />
      {singleNews.published_date} <br />
      {singleNews.summary} <br />
      {singleNews.rank} <br />
      {singleNews.link} <br />
    </li>
  )
}

export default SingleNews
