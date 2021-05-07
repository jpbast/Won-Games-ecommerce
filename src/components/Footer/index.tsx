import * as Styles from './styles'
import Logo from '../Logo'

export default function Footer() {
  return (
    <Styles.Wrapper>
      <Logo color="black" size="normal" />
      <section>
        <ul>
          <li>CONTACT</li>
          <li>jp_bast@hotmail.com</li>
        </ul>
        <ul>
          <li>FOLLOW US</li>
          <li>
            <a href="https://www.instagram.com/won-games">Instagram</a>
          </li>
          <li>
            <a href="https://www.twitter.com/won-games">Twitter</a>
          </li>
          <li>
            <a href="https://www.youtube.com/won-games">YouTube</a>
          </li>
          <li>
            <a href="https://www.facebook.com/won-games">Facebook</a>
          </li>
        </ul>
        <ul>
          <li>LINKS</li>
          <li>Home</li>
          <li>Store</li>
          <li>Find</li>
        </ul>
        <ul>
          <li>LOCATION</li>
          <li>Centro</li>
          <li>Pelotas - RS, Brasil</li>
        </ul>
      </section>
      <span>Won Games 2021 © All Rights Reserved.</span>
    </Styles.Wrapper>
  )
}
