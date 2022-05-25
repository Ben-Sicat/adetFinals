import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/bg2.png'
import heroBcg2 from '../assets/bg.png'

const Hero = () => {
  return <Wrapper className="section-center">
    <article className="content">
    
    <h3>
        <h1>MEHKEE</h1>Create your <br />
        <span>own </span>
        
        <span>Style</span>
      </h3>
      <p>
        We bring you all your peripheral needs
      </p>
      <Link to="/products" className="btn hero-btn">shop now</Link>
    </article>
    <article className="img-container">
      <img src={heroBcg} alt="nice table" className="main-img" />
      <img src={heroBcg2} alt="person working" className="accent-img" />
    </article>
  </Wrapper>
}

const Wrapper = styled.section`
  
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
    background-color:  hsl(217, 50%, 59%);
  }
  h1{
    font-size:4rem;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    &:hover{
        .img-container {
          gap: 3.5rem;
        box-shadow: 0 0 6.5rem 1.5rem var(--clr-grey-5);
        transition: all 1.5s ease-in-out;
        }
        .main-img{
          margin-left:2rem;
          margin-bottom:3rem;
        transition: all 0.5s ease-in-out;
        }
        .accent-img{
          margin-bottom:3rem;
          transition: all 0.5s ease-in-out;
          height:14rem;
          width:20rem;
          transition: all 3.5s ease-in-out;
        }
      }
    h1 {
      font-size:10rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
      &:hover{
        margin-left:1rem;
        transition: all 0.5s ease-in-out;
      }
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);

      &:hover{
        margin-bottom:1rem;
        transition: all 0.5s ease-in-out;
      }
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
