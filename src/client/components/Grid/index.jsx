/*
 *       .                             .o8                     oooo
 *    .o8                             "888                     `888
 *  .o888oo oooo d8b oooo  oooo   .oooo888   .ooooo.   .oooo.o  888  oooo
 *    888   `888""8P `888  `888  d88' `888  d88' `88b d88(  "8  888 .8P'
 *    888    888      888   888  888   888  888ooo888 `"Y88b.   888888.
 *    888 .  888      888   888  888   888  888    .o o.  )88b  888 `88b.
 *    "888" d888b     `V88V"V8P' `Y8bod88P" `Y8bod8P' 8""888P' o888o o888o
 *  ========================================================================
 *  Author:     Chris Brame
 *  Updated:    2/5/19 1:26 AM
 *  Copyright (c) 2014-2019. All rights reserved.
 */

import React from 'react'
import PropTypes from 'prop-types'

class Grid extends React.Component {
  render () {
    return (
      <div
        className={'uk-grid uk-grid-collapse uk-clearfix' + (this.props.extraClass ? ' ' + this.props.extraClass : '')}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    )
  }
}

Grid.propTypes = {
  extraClass: PropTypes.string,
  style: PropTypes.object
}

export default Grid
