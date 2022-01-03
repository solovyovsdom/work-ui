import React, { useContext, useState } from 'react'
import { CalendarDate, CaretUp } from 'react-bootstrap-icons'
import { calendarItems } from '../../constants'
import { TodoContext } from '../../context'
import { useSpring, animated } from 'react-spring'

function Calendar() {
    const [showMenu, setShowMenu] = useState(true)
    const { setSelectedProject } = useContext(TodoContext)

    const spin = useSpring({
        transform : showMenu ? 'rotate(0deg)' : 'rotate(180)',
        config : { friction : 10 }
    })

    const menuAnimation = useSpring({
        display : showMenu ? 'block' : 'none',
        lineHeight : showMenu ? 1.2 : 0
    })

    return (
        <div className='Calendar'>
            <div className="header">
                <div className="title">
                    <CalendarDate size="18" />
                    <p>Calendar</p>
                </div>
                <animated.div 
                    style={spin} 
                    onClick={() => setShowMenu(!showMenu)}
                    className="btns"
                >
                    <span>
                        <CaretUp size="20" />
                    </span>
                </animated.div>
            </div>
            <animated.div style={menuAnimation} className="items">
                {
                    calendarItems.map(item =>
                        <div
                            className="item"
                            key={item}
                            onClick={() => setSelectedProject(item)}
                        >
                            {item}
                        </div>
                    )
                }
            </animated.div>
        </div>
    )
}

export default Calendar