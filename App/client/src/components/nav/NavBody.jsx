import React from 'react'
import { Link } from 'react-router-dom';
import { blur, translate } from '../../assets/script/animation';
import { motion } from 'framer-motion'

const NavBody = ({ links, selectedLink, setSelectedLink }) => {
    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - 1) * 0.01]}
                    variants={translate}
                    initial='initial'
                    animate='enter'
                    exit='exit'
                    key={char + i}
                >{char}</motion.span>
            )
        });
        return chars
    }
    return (
        <div className='body'>
            {
                links.map((link, index) => {
                    const { title, href } = link;
                    return <Link key={index} to={href} prefetch="true">
                        <motion.p
                            onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                            onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                            variants={blur}
                            animate={selectedLink.isActive && selectedLink.index !== index ? 'open' : 'closed'}
                        >{getChars(title)}</motion.p>
                    </Link>
                })
            }
        </div>
    )
}

export default NavBody