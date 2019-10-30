import * as React from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface Props {
    avatarStyle: AvatarStyle;
    style?: React.CSSProperties;
    avatarBackground?: string;
}
export default class Avatar extends React.Component<Props> {
    render(): any;
}
