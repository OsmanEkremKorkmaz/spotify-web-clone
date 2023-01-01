import React from 'react'
import {modals} from './modals'

export default function Modal({name}) {
    const modal = modals.find(modal => modal.name === name)
  return (
    <modal.element/>
  )
}
