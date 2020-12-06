import React, { PureComponent } from 'react';
import {
    View,
    FlatList,
    AsyncStorage
} from "react-native";
import { styles } from './style';
import { Header } from '../header';
import { EventCard } from '../event-card';
import { EventCardProps } from '../event-card/event-card';
import { ParseConfig } from '../../constants/parse-config';

const Parse = require('parse/react-native.js');

function initializeServer() {
    Parse.setAsyncStorage(AsyncStorage);
    Parse.initialize(ParseConfig.APP_ID, ParseConfig.JAVASCRIPT_KEY);
    Parse.serverURL = ParseConfig.SERVER_URL;
}

async function getEvents() {
    const Event = Parse.Object.extend('Event');
    const query = new Parse.Query(Event);

    // Query for the earliest 10 events
    query.limit(10);
    query.ascending("dateTime");
    const results = await query.find();

    return results;
}

function convertToEventCardProp(event) {
    const prop: EventCardProps = {
        title: event.get('title'),
        date: event.get('dateTime').toDateString(),
        description: event.get('description'),
        location: event.get('location'),
        imageSource: { uri: event.get('imageSource') }
    };
    return prop;
}

function getEventCardProps() {
    const eventCardProps: EventCardProps[] = [];
    const events = getEvents();
    events.then((results) => {
        results.forEach(result => {
            eventCardProps.push(convertToEventCardProp(result));
        });
    }).catch((error) => {
        console.log("Error retrieving list of events.")
        console.log(error);
    })

    return eventCardProps;
}

initializeServer();

export class ListView extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Header title='protests' />
                <View style={styles.listContainer}>
                    <FlatList
                        data={getEventCardProps()}
                        renderItem={({ item }) => (
                            <EventCard
                                title={item.title}
                                description={item.description}
                                date={item.date}
                                location={item.location}
                                imageSource={item.imageSource}
                            />
                        )}
                    />
                </View>
            </View>
        );
    }
}