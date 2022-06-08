/** @jsx jsx */
import { jsx, Container } from "theme-ui"
import { useSpring, config } from "react-spring"
import { IGatsbyImageData } from "gatsby-plugin-image"
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import HeaderProject from "@lekoarts/gatsby-theme-emilia/src/components/header-project"
import SEO from "@lekoarts/gatsby-theme-emilia/src/components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import * as React from "react";

type ProjectProps = {
    data: {
        project: {
            body: string
            excerpt: string
            date: string
            slug: string
            title: string
            areas: string[]
            cover: {
                childImageSharp: {
                    resize: {
                        src: string
                    }
                }
            }
        }
        images: {
            nodes: {
                name: string
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData
                }
            }[]
        }
    }
    pageContext: {
        prev: {
            slug: string
            parent: {
                fileAbsolutePath: string
            }
            title: string
            cover: {
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData
                }
            }
        }
        next: {
            slug: string
            parent: {
                fileAbsolutePath: string
            }
            title: string
            cover: {
                childImageSharp: {
                    gatsbyImageData: IGatsbyImageData
                }
            }
        }
    }
    [key: string]: any
}

const Project = ({ data: { project, images }, pageContext: { prev, next } }: ProjectProps) => {
    const imageFade = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

    return (
        <Layout>
            <SEO
                title={project.title}
                description={project.excerpt}
                pathname={project.slug}
                image={project.cover.childImageSharp.resize.src}
            />
            <HeaderProject title={project.title} areas={project.areas} date={project.date} />
            <Container>
                {project.body && (
                    <div sx={{ maxWidth: `900px`, mx: `auto`, mt: 5, p: { textAlign: `left`, overflowWrap: `break-word` } }}>
                        <MDXRenderer>{project.body}</MDXRenderer>
                    </div>
                )}
            </Container>
        </Layout>
    )
}

export default Project