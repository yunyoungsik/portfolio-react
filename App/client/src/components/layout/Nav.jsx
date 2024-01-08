import React, { useState } from 'react'
import NavBody from '../nav/NavBody'
import NavFooter from '../nav/NavFooter'
import { motion } from 'framer-motion'
import { height } from '../../assets/script/animation'


const Nav = () => {
    const links = [
        {
            title: "Home",
            href: '/',
        },
        {
            title: "Trend Device",
            href: '/td',
        },
        {
            title: "YouTube",
            href: '/youtube',
        },
        {
            title: "Movie",
            href: '/movie',
        },
        {
            title: "Kickoff",
            href: '/kickoff'
        },
        {
            title: "Portfolio",
            href: '/portfolio'
        },
    ];

    const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 })

    return (
        <motion.div variants={height} initial='initial' animate='enter' exit='exit' className="nav">
            <div className="wrapper">
                <div className="container">
                    <NavBody links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
                    <NavFooter />
                </div>
            </div>
        </motion.div>
    )
}

export default Nav