/** @jsx jsx */
import * as React from "react"
import { jsx, Themed } from "theme-ui"
import useEmiliaConfig from "@lekoarts/gatsby-theme-emilia/src/hooks/use-emilia-config"

const SocialMediaList = () => {
    const { socialMedia } = useEmiliaConfig()

    return (
        <React.Fragment>
            {socialMedia.map((entry) => (
                <Themed.a key={entry.title} href={entry.href}>
                    <img src={entry.title} width="36px"/>
                </Themed.a>
            ))}
        </React.Fragment>
    )
}

export default SocialMediaList
