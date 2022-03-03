import React, { useState, useEffect } from 'react'
import { View, StyleSheet }  from 'react-native'
import { NavBar } from './components/NavBar'
import { ArrayBar } from './components/ArrayBar'
import { Timer } from './components/Timer'
import { Divider } from '@mui/material';
import './index.css'


const App = () => {
    const [settings, setSettings] = useState ({
            rand_num_array : new Array(100).fill(0).map((x) => Math.round(Math.random() * 500)),
            sort_method: "Quick Sort (Default)",
            sorted: false,
            swap_left: 0,
            swap_right: 0
        })
    
    const [active, setActive] = useState (true)
    const [time, setTime] = useState(0)

    useEffect (() => {
        let interval = null

        if (active) {
            interval = setInterval (() => {
                setTime(() => time + 10)
            }, 10)
        } 
        else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    })
    
    return (
        <>
            <NavBar states={settings} setSettings={setSettings} rand_num_array={settings.rand_num_array}/>
            <View style={appStyle.simulator}>
                <View style={appStyle.sectionOne}>
                    <ArrayBar arrayHeights={settings.rand_num_array} curr_index={settings.curr_index} left={settings.swap_left} right={settings.swap_right}/> 
                    <Timer time={time}/>
                </View>
                <Divider style={{height:'500px', color:'black'}} orientation="vertical">VERSUS</Divider>
                <View style={{width:'50%'}}>
                    <ArrayBar arrayHeights={settings.rand_num_array} curr_index={settings.curr_index} left={settings.swap_left} right={settings.swap_right}/> 
                    <Timer time={time}/>
                </View>
            </View>
            
        </>
    )
}

const appStyle = StyleSheet.create({
    simulator: {
        margin: 'auto',
        display: 'flex',
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center'
    },

    sectionOne : {
        display: 'flex',
        width: "40%",
    },

    divider : {
        display: 'flex',
        height: "100%",
    }
})

export default App
