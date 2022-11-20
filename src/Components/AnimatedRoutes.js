import React from 'react'
import Programs from "./Programs";
import Plans from "./Plans";
import Hero from "./Hero";

import WhyUs from "./WhyUs";
import { Switch, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import Members from './Members';
const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <div>
            <AnimatePresence initial={true}>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Hero} />
                    <Route exact path="/programs" component={Programs} />
                    <Route exact path="/whyus" component={WhyUs} />
                    <Route exact path="/plans" component={Plans} />
                    <Route exact path="/members" component={Members} />
                </Switch>
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes