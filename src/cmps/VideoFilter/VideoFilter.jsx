
import React from 'react'
import './VideoFilter.scss'
import { useState } from 'react';
import { loadStations } from '../../store/actions/stationActions';

export function VideoFilter(props)  {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <form>
            <input type="text" placeholder="Search Video..."  name='searchTerm' onChange={(ev) => {setSearchTerm(ev.target.value)}} /> 
            <button>Search</button>
        </form>
    )

}

