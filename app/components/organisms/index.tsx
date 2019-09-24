import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Cell, Row } from '../molecules'
import { Img, TextTruncate, Accessory } from '../atoms'
import { TextTitleSemiBold, TextTitleSmallBold, TextDescription} from '../../common/styles/customElements'
import ColorPalette from '../../common/styles/colors'
import { Constants } from '../../config/constants'

const Content = (props: any) => {
    const { item } = props
    return (<Row style={styles.row}>
                {item.title.length > 15 ?
                 <TextTitleSmallBold {...{ style: ColorPalette.darkgray }}>{item.title}</TextTitleSmallBold> :
                 <TextTitleSemiBold {...{ style: ColorPalette.darkgray }}>{item.title}</TextTitleSemiBold> 
                }
                {!item.overview ?
                <TextDescription>No Description Available</TextDescription> :
                <TextTruncate text={item.overview} characterLength={item.overview.length} />
                }
            </Row>)
}
export const ScrollableList = ({ movies, onPress }: any) => {
    return (<ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
            {movies.map((item: { poster_path: string | null; id: any; }) => {
            const imageURI = item.poster_path != null ? `${Constants.IMAGE_BASE_URL}${item.poster_path}` : Constants.PLACEHOLDER

            return (<Cell item={item} onPress={onPress} key={item.id}
                        style={[styles.cell, styles.rounded]}>
                        <Img src={imageURI} style={styles.image} />
                        <Content item={item} />
                        <Accessory.ChevronIcon style={styles.icon} />
                    </Cell>)
            })}
            </ScrollView>)
}
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    row: {
        flex: 4,
        paddingLeft: 40,
        paddingTop: 20,
        paddingBottom: 20,
        height: 130,
        width: 130
    },
    icon: {
        flex: 1,
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        color: '#fff'
    },
    image: {
        flex: 2,
        marginLeft: 10,
        width: 130,
        height: 130,
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,

    },
    rounded: {
        borderRadius: 10
    },
    cell: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'rgba(189, 195, 199,.2)',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5
    }
});
