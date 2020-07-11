import React, { PureComponent } from 'react';
import {
    View,
    FlatList,
} from "react-native";
import { styles } from './style';
import { Header } from '../header';
import { EventCard } from '../event-card';
import { EventCardProps } from '../event-card/event-card';

// TODO: Remove this when coding the backend
const data: EventCardProps[] = [
    {
        date: 'July 13, 2020 5:30 PM',
        description: 'This is a description of the protest happening at some time about some thing. ya digs! This is a description of the protest happening at some time about some thing. ya digs!',
        location: 'Los Angeles, CA',
        imageSource: {uri: 'https://www.pngrepo.com/png/103442/180/protest.png'},
    },
    {
        date: 'July 16, 2020 5:30 PM',
        description: 'This is a description of the protest happening at some time about some thing. ya digs! This is a description of the protest happening at some time about some thing. ya digs!',
        location: 'Simi Valley, CA',
        imageSource: {uri: 'https://www.pngrepo.com/png/103442/180/protest.png'},
    },
    {
        date: 'July 16, 2020 5:30 PM',
        description: 'This is a description of the protest happening at some time about some thing. ya digs! This is a description of the protest happening at some time about some thing. ya digs!',
        location: 'Simi Valley, CA',
        imageSource: {uri: 'https://www.pngrepo.com/png/103442/180/protest.png'},
    },
    {
        date: 'July 16, 2020 5:30 PM',
        description: 'This is a description of the protest happening at some time about some thing. ya digs! This is a description of the protest happening at some time about some thing. ya digs!',
        location: 'Simi Valley, CA',
        imageSource: {uri: 'https://www.pngrepo.com/png/103442/180/protest.png'},
    },
    {
        date: 'July 16, 2020 5:30 PM',
        description: 'This is a description of the protest happening at some time about some thing. ya digs! This is a description of the protest happening at some time about some thing. ya digs!',
        location: 'Simi Valley, CA',
        imageSource: {uri: 'https://www.pngrepo.com/png/103442/180/protest.png'},
    },
    {
        date: 'July 16, 2020 5:30 PM',
        description: 'This is a description of the protest happening at some time about some thing. ya digs! This is a description of the protest happening at some time about some thing. ya digs!',
        location: 'Simi Valley, CA',
        imageSource: {uri: 'https://www.pngrepo.com/png/103442/180/protest.png'},
    }
  ];

export class ListView extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Header title='protests' />
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <EventCard
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