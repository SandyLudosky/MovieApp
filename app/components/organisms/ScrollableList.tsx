import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Cell, Row } from '../molecules'   
import { Img,  TextTruncate, Accessory} from '../atoms'
import { TextTitleSemiBold, TextDescription } from '../../common/customElements'
import ColorPalette from '../../common/colorPalette'
import { IMovie } from '../../models/movie';

const Content  = (props: any) => {
    const { item } = props
    console.log('movie' + item.title)
    console.log('movie' + item.overview)
    return (<Row style={ styles.row }>
                <TextTitleSemiBold {...{style: ColorPalette.darkgray}}>{item.title}</TextTitleSemiBold>
                 {!item.overview ? 
                 <TextDescription>No Description Available</TextDescription> : 
                 <TextTruncate text={item.overview} characterLength={80}/>
                  }
            </Row>)
}

const ScrollableList = ({ results , onPress }: any) => {
    return (<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
                {results.map( (item: { poster_path: string | null; id: any; }) => {
                    const placeholder = require('../../assets/placeholder.png')
                    //pas hardcodé - placé URL dans fichier constants
                    const imageURI = 'http://image.tmdb.org/t/p/w185' + item.poster_path 
                    const image = item.poster_path != null ? imageURI : placeholder
                    return (<Cell item={item} onPress={onPress} key={item.id}
                                            style={styles.description}> 
                                <Img src={imageURI} style={styles.image} />
                                <Content item={item}/>
                                <Accessory.ChevronIcon style={styles.icon} />
                            </Cell>)})
                }
            </ScrollView>)
}   
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    row: {
        flex: 4,
        padding: 15,    
        backgroundColor: '#f5f5f5',
        height: 130,
        width: 130
    }, 
    icon : {
        flex:1,
        padding: 5,
        flexDirection: 'column',
        justifyContent:'center', 
        color:'#333'
    },
    image: {
        flex: 2,
        width: 130,
        height: 130,
        alignSelf: 'center',
        padding: 20
    },
    description: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'stretch' 
    }
});

//https://www.materialpalette.com/colors
const colors = StyleSheet.create({
    darkblue: { color: 'darkblue'},
    darkgray: { color: '#333'}
})

export default ScrollableList