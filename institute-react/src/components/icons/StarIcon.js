import React from 'react'

const StarIcon = ({ color = '#F8F044' }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g mask="url(#mask0_38_19911)">
        <path
          d="M8.30005 20.1246C7.91672 20.4246 7.52505 20.4329 7.12505 20.1496C6.72505 19.8663 6.59172 19.4913 6.72505 19.0246L8.15005 14.3996L4.52505 11.8246C4.12505 11.5413 4.00439 11.1663 4.16305 10.6996C4.32105 10.2329 4.64172 9.99961 5.12505 9.99961H9.60005L11.0501 5.19961C11.1334 4.96628 11.2627 4.78694 11.4381 4.66161C11.6127 4.53694 11.8001 4.47461 12.0001 4.47461C12.2001 4.47461 12.3874 4.53694 12.5621 4.66161C12.7374 4.78694 12.8667 4.96628 12.9501 5.19961L14.4001 9.99961H18.8751C19.3584 9.99961 19.6794 10.2329 19.8381 10.6996C19.9961 11.1663 19.8751 11.5413 19.4751 11.8246L15.8501 14.3996L17.2751 19.0246C17.4084 19.4913 17.2751 19.8663 16.8751 20.1496C16.4751 20.4329 16.0834 20.4246 15.7001 20.1246L12.0001 17.2996L8.30005 20.1246Z"
          fill={color}
        />
      </g>
    </svg>
  )
}

export default StarIcon
