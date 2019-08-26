import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import Clock from './Clock'

describe('Clock', () => {
  let container = null

  let component = null

  beforeEach(() => {
    container = document.createElement('div')

    document.body.appendChild(container)
  })

  afterEach(() => {
    unmountComponentAtNode(container)

    container.remove()

    container = null
  })

  it('should toggle power', () => {
    act(() => {
      component = render(<Clock />, container)

      const powerButton = container.querySelector('#power-toggle')

      powerButton.dispatchEvent(new MouseEvent('click', powerButton))
    })

    expect(component.state.power)
  })

  it('should toggle modulation', () => {
    act(() => {
      component = render(<Clock />, container)

      const modulationButton = container.querySelector('#modulation-toggle')

      modulationButton.dispatchEvent(new MouseEvent('click', modulationButton))
    })

    expect(component.state.modulation === 'AM')
  })
})
