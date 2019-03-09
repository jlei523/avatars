import * as PropTypes from 'prop-types'
import * as React from 'react'

import Avatar, { AvatarStyle } from './avatar'
import { OptionContext, allOptions } from './options'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, OptionContext, allOptions } from './options'

import { default as PieceComponent } from './avatar/piece'

export interface Props {
  avatarBackground?: string
  avatarStyle: string
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hatColor?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

export default class AvatarComponent extends React.Component<Props> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  }
  private optionContext: OptionContext = new OptionContext(allOptions)

  getChildContext() {
    return { optionContext: this.optionContext }
  }

  componentWillMount() {
    this.updateOptionContext(this.props)
  }

  componentWillReceiveProps(nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  render() {
    const { avatarStyle, style, avatarBackground } = this.props
    return <Avatar avatarStyle={avatarStyle as AvatarStyle} style={style} avatarBackground={avatarBackground} />
  }

  private updateOptionContext(props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}

export class Piece extends React.Component<Props> {
  static childContextTypes = {
    optionContext: PropTypes.instanceOf(OptionContext)
  }
  private optionContext: OptionContext = new OptionContext(allOptions)

  getChildContext() {
    return { optionContext: this.optionContext }
  }

  componentWillMount() {
    this.updateOptionContext(this.props)
  }

  componentWillReceiveProps(nextProps: Props) {
    this.updateOptionContext(nextProps)
  }

  render() {
    const { avatarStyle, style, pieceType, pieceSize, viewBox } = this.props
    return <PieceComponent avatarStyle={avatarStyle as AvatarStyle} style={style} pieceType={pieceType} pieceSize={pieceSize} viewBox={viewBox} />
  }

  private updateOptionContext(props: Props) {
    const data: { [index: string]: string } = {}
    for (const option of allOptions) {
      const value = props[option.key]
      if (!value) {
        continue
      }
      data[option.key] = value
    }
    this.optionContext.setData(data)
  }
}
