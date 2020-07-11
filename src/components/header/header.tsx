
import React, { PureComponent } from 'react';
import {
    View,
    Text
} from "react-native";
import { styles } from './style';
import { customFonts } from '../../constants/font-constants';
import * as Font from 'expo-font';

export interface HeaderProps {
    title: string
}

export interface HeaderState {
    fontLoaded: boolean
}

export class Header extends PureComponent<HeaderProps, HeaderState>{
    constructor(props: HeaderProps) {
        super(props);
        this.state = { fontLoaded: false };
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
                <View style={styles.container}>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
            );
        } else {
            return null;
        }
    }
}