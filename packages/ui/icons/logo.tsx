import * as React from "react"

function SvgComponent(props: any) {
  return (
    <svg
      width={81}
      height={81}
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M28.3 40.586a6.931 6.931 0 016.93-6.931h19.728a6.931 6.931 0 010 13.862H35.23a6.931 6.931 0 01-6.931-6.931z"
        fill="#2BCBBB"
      />
      <path
        d="M33.727 66.583c0 .613-.497 1.112-1.11 1.087a27.191 27.191 0 010-54.336 1.075 1.075 0 011.11 1.087v11.376c0 .613-.498 1.105-1.109 1.155a13.596 13.596 0 000 27.1c.611.05 1.109.542 1.109 1.155v11.376zM41.423 20.16a6.8 6.8 0 016.8-6.8h19.275a6.8 6.8 0 110 13.601H48.224a6.8 6.8 0 01-6.8-6.8zM41.423 60.897a6.8 6.8 0 1113.602 0 6.8 6.8 0 01-13.602 0z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent