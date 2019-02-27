import React from "react";
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';

import image from '../images/image.jpg';
import Container from "../components/Container/Container";
import Title from "../components/Title/Title";
import Hr from "../components/Hr/Hr";
import Section from "../components/Section/Section";
import Text from '../components/Text/Text';

const ProductsPage = () => (
    <Layout>
        <Hero imageUrl={image}>products</Hero>
        <Container>
            <Title as="h2" primary>who we are</Title>
            <Hr></Hr>
            <Section>
                <div>
                    <img src={image}></img>
                </div>
                <div>
                    <Title secondary>Lorem ipsum</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Pellentesque at vestibulum nisi, vitae fermentum diam. Ut in lorem sit amet dui vehicula ultricies id id arcu.
                         Quisque eu blandit quam. In tincidunt erat et eleifend commodo. Sed in lacus lacus.
                         Cras faucibus sapien elit, non rhoncus libero pharetra eget.
                         Curabitur fringilla accumsan finibus. Sed eget mi porta, malesuada nibh ac, dapibus leo.
                    </Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Pellentesque at vestibulum nisi, vitae fermentum diam. Ut in lorem sit amet dui vehicula ultricies id id arcu.
                         Quisque eu blandit quam. In tincidunt erat et eleifend commodo. Sed in lacus lacus.
                         Cras faucibus sapien elit, non rhoncus libero pharetra eget.
                         Curabitur fringilla accumsan finibus. Sed eget mi porta, malesuada nibh ac, dapibus leo.
                    </Text>
                </div>
            </Section>
            <Section reversed>
                <div>
                    <Title secondary>Lorem ipsum</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Pellentesque at vestibulum nisi, vitae fermentum diam. Ut in lorem sit amet dui vehicula ultricies id id arcu.
                         Quisque eu blandit quam. In tincidunt erat et eleifend commodo. Sed in lacus lacus.
                         Cras faucibus sapien elit, non rhoncus libero pharetra eget.
                         Curabitur fringilla accumsan finibus. Sed eget mi porta, malesuada nibh ac, dapibus leo.
                    </Text>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Pellentesque at vestibulum nisi, vitae fermentum diam. Ut in lorem sit amet dui vehicula ultricies id id arcu.
                         Quisque eu blandit quam. In tincidunt erat et eleifend commodo. Sed in lacus lacus.
                         Cras faucibus sapien elit, non rhoncus libero pharetra eget.
                         Curabitur fringilla accumsan finibus. Sed eget mi porta, malesuada nibh ac, dapibus leo.
                    </Text>
                </div>
                <div>
                    <img src={image}></img>
                </div>
            </Section>
        </Container>
    </Layout>
)

export default ProductsPage;
