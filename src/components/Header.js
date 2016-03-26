import React from 'react';
import { Link } from 'react-router'

export default function Header() {
  return (
    <div className="ui borderless main menu">
      <div className="ui text container">
        <div className="header item">
          <Link className="" to="/">Home</Link>
        </div>
        <Link className="item" to="/home">Home View</Link>
        <Link className="item" to="/about">About View</Link>
      </div>
    </div>
  )
}
