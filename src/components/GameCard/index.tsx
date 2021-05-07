import { useState } from 'react'
import * as Styles from './styles'

export default function GameCard() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Styles.Wrapper>
      <div>
        <img
          width={294}
          height={137}
          src="/img/thumbnail_cyberpunk_2077_bdfb48b5eb.jpg"
        />
      </div>
      <section>
        <Styles.Text>
          <strong>Population Zero</strong>
          <span>Rockstar Games</span>
        </Styles.Text>
        <Styles.Icons>
          <img
            onClick={() => setIsFavorite(!isFavorite)}
            src={
              isFavorite
                ? '/img/icon-favorite-filled.svg'
                : '/img/icon-favorite.svg'
            }
            alt="Coração"
          />
          <span>R$215,00</span>
        </Styles.Icons>
      </section>
    </Styles.Wrapper>
  )
}
