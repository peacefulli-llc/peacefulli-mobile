
import React, { PureComponent } from 'react';
import {
    Text,
    Image,
    ImageSourcePropType,
    TouchableOpacity
} from "react-native";
import { styles } from './style';
import { customFonts } from '../../constants/font-constants';
import * as Font from 'expo-font';

export interface EventCardProps {
    imageSource: ImageSourcePropType
    date: String
    location: String
    description: String
}

export interface EventCardState {
    fontLoaded: boolean
}

export class EventCard extends PureComponent<EventCardProps, EventCardState>{
    constructor(props: EventCardProps) {
        super(props);
        this.state = { fontLoaded: false };
    }

    onPress() {
        console.log("The event was pressed");
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if (this.state && this.state.fontLoaded) {
            return (
                <TouchableOpacity onPress={this.onPress} style={styles.container}>
                    <Image style={styles.image} source={{ uri: 'https://i.stack.imgur.com/khVpE.png' }} />
                    <Text style={styles.textPrimary}>{this.props.date + " - " + this.props.location}</Text>
                    <Text style={styles.textSecondary}>{this.props.description}</Text>
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    }
}