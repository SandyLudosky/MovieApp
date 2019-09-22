import React, { useContext } from 'react';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export function SearchComponent(props: any) {
    const { search, onChange } = props
    return (
        <View>
            <SearchBar placeholder="Search Movie..." value={search}
                lightTheme={true} round={true}
                onChangeText={ (e) => {onChange(e) }} />
        </View>
    );
}