import React from 'react';
import { Link } from 'react-router'

export default function BarView() {
  return (
    <div className="ui borderless main menu">
      <div className="ui text container">
        <div className="header item">
          <Link className="" to="/">Home</Link>
        </div>
        <Link className="item" to="/">Link 1</Link>
        <Link className="item" to="/resources">Link 2</Link>
        <Link className="item" to="/about">About</Link>
      </div>
    </div>
  )
}
