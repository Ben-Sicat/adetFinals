import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/keycult.png'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk" />
      <article>
        <div className="title">
          <h2>the story</h2>
          <div className="underline"></div>
        </div>
        <p>College students who shared the same love and passion for computer peripherals led to the creation
          of this store. A small business revolving around keyboards and other peripherals. We aim to produce the best
          and only the best kind of products for quality is the most important thing.
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
