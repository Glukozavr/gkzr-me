/** @jsx jsx */
import {mailchimpSubscribeHtml} from "./mailchimp";
import { Box, jsx, Container, Flex, Link, useColorMode } from "theme-ui"
import useEmiliaConfig from "@lekoarts/gatsby-theme-emilia/src/hooks/use-emilia-config"
import SocialMediaList from "@lekoarts/gatsby-theme-emilia/src/components/social-media-list"
import ColorModeToggle from "@lekoarts/gatsby-theme-emilia/src/components/colormode-toggle"
// @ts-ignore
import AboutMeMDX from "@lekoarts/gatsby-theme-emilia/src/texts/about-me"
import * as React from "react";

const Footer = () => {
    const { showThemeAuthor } = useEmiliaConfig()
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `dark`
    const toggleColorMode = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setColorMode(isDark ? `light` : `dark`)
    }

    return (
        <Box
            as="footer"
            variant="layout.footer"
            sx={{
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, ${isDark ? `0.35` : `0.15`}) 100%)`,
            }}
        >
            <Container>
                <div sx={{ display: `grid`, gridGap: 4, gridTemplateColumns: [`1fr`, `1fr`, `1fr`, `2fr 1fr`] }}>
                    <div
                        sx={{
                            p: { mb: 0 },
                            h2: {
                                mt: 0,
                                mb: 1,
                            },
                        }}
                    >
                        <AboutMeMDX />

                        <div  dangerouslySetInnerHTML={{__html: mailchimpSubscribeHtml}} />
                    </div>
                    <Flex
                        sx={{
                            textAlign: [`center`, `center`, `center`, `right`],
                            flexDirection: `column`,
                            justifyContent: `space-between`,
                        }}
                    >
                        <ColorModeToggle isDark={isDark} toggle={toggleColorMode} />
                        <div sx={{ mt: [4, 4, 4, 0] }}>
                            <div sx={{ a: { ml: [1, 1, 1, 2], mr: [1, 1, 1, 0] } }}>
                                <SocialMediaList />
                            </div>
                            <div sx={{ color: `textMuted` }}>Курочкін Віктор Михайлович <br/>
                                contact@gkzr.me <br/>
                                Copyright &copy; {new Date().getFullYear()}. All rights reserved.</div>
                        </div>
                    </Flex>
                </div>
            </Container>
        </Box>
    )
}

export default Footer