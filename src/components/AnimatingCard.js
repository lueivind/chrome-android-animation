import React, { Component } from 'react'

export default class AnimatingCard extends Component {
    state = {
        borderGlow: false,
        borderGlowClass: "card",
        numberGlow: false,
        numberGlowClass: "number"
    }


    toggleBorderGlow() {
        if (this.state.borderGlow) {
            this.setState({
                borderGlow: false,
                borderGlowClass: "card"
            })
        }
        else {
            this.setState({
                borderGlow: true,
                borderGlowClass: "card glow"
            })
        }
    }

    toggleNumberGlow() {
        if (this.state.numberGlow) {
            this.setState({
                numberGlow: false,
                numberGlowClass: "number"
            })
        }
        else {
            this.setState({
                numberGlow: true,
                numberGlowClass: "number glow"
            })
        }
    }



    render() {

        const { borderGlow, borderGlowClass, numberGlow, numberGlowClass } = this.state;

        return (
            <div>

                {/* seperator */}
                <div style={{ height: "50px" }}></div>

                {/* toggle border glow */}
                <div style={{ margin: "5px 0px" }}>
                    <button onClick={this.toggleBorderGlow.bind(this)}>Toggle Border Glow</button>
                    <div>{borderGlow ? "On" : "Off"}</div>
                </div>

                {/* toggle number glow */}
                <div style={{ margin: "5px 0px" }}>
                    <button onClick={this.toggleNumberGlow.bind(this)}>Toggle Number Glow</button>
                    <div>{numberGlow ? "On" : "Off"}</div>
                </div>

                {/* seperator */}
                <div style={{ height: "50px" }}></div>

                {/* animating card */}
                <div className={borderGlowClass}>
                    <div className="inner-border">
                        <div className={numberGlowClass}>515123</div>
                        <div>Watch me go!</div>
                    </div>
                </div>

            </div>
        )
    }
}

