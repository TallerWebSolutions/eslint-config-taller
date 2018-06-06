import React from 'react'

// Single component.
export const Single = () => <div>Content</div>

// Nested component.
export const Nested = () => (
  <div>
    <p>Opa</p>
  </div>
)

// Attributes.
export const Attributes = () => (
  <Nested string='string' object={ { prop: 'value' } } array={ [1, 2, 3] } />
)

// Children expression.
// eslint-disable-next-line react/prop-types
export const Expression = ({ children }) => <div>{ children }</div>
