import React, { useState } from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items=[
    {
        title:'What is React>',
        content: 'React is a front end javascript framework'
    },
    {
        title:'Why use react?',
        content:'React is a favourite JS library'
    },
    {
        title:'How to use react?',
        content:'You use React by creating components'
    }
]

const options=[
    {
        label:'The color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'Green'
    },
    {
        label:'A shade of Blue',
        value:'blue'
    }
    ]

export default ()=>{

    const [selected,setSelected]=useState(options[0])
    // const [showDropdown,setShowDropdown]= useState(true)

    return(
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                label="Select a color"
                options={options}
                selected={selected}
                onSelectedChanged={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>


        </div>
    )
}

