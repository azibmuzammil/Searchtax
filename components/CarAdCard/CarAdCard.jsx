import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CarAdCard = () => {
    return (
        <View style={{ flexDirection: 'row', width: 320, height: 140, borderWidth: 1, margin: 5, borderRadius: 20, overflow: "hidden" }}>

            <Image source={require('../../assets/like.png')} style={{ height: 20, width: 20, position: "absolute", top: 10, right: 10 }} />

            <Image source={require('../../assets/car.png')} style={{ height: '100%', width: '45%', resizeMode: 'stretch' }} />

            <View style={{ paddingHorizontal: 10, paddingVertical: 5, width: '55%', justifyContent: "center" }}>
                <Text>Toyota Corolla Altis {'\n'} Grande 1.8 CVT-i</Text>
                <Text style={{ fontWeight: "800", fontSize: 20 }}>PKR 59 lacs</Text>
                <View style={[styles.bigRow, { marginBottom: 5 }]}>
                    <View style={styles.row}>
                        <Image source={require('../../assets/cal.png')} style={styles.smallImage} />
                        <Text style={styles.smallText}>2022</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", width: '45%', }}>
                        <Image source={require('../../assets/speed.png')} style={styles.smallImage} />
                        <Text style={styles.smallText}>20000 KM</Text>
                    </View>
                </View>

                <View style={styles.bigRow}>
                    <View style={styles.row}>
                        <Image source={require('../../assets/petrol.png')} style={styles.smallImage} />
                        <Text style={styles.smallText}>Petrol</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", width: '45%' }}>
                        <Image source={require('../../assets/loc.png')} style={styles.smallImage} />
                        <Text style={styles.smallText}>Lahore</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default CarAdCard

const styles = StyleSheet.create({
    bigRow:
    {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        justifyContent: 'space-between',
    }
    ,
    smallText:
    {
        color: 'grey',
        fontSize: 10,
    },
    smallImage:
    {
        height: 20,
        width: 20, resizeMode: "center",
        marginRight: 5
    },
    row:
    {
        flexDirection: "row",
        alignItems: "center",
    }
})