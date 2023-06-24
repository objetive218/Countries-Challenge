

export const CountryExtend = ({countrySel}) => {
  return (
    <>
      <article className={counStyle.country} onClick={(e) => {setOne(countrySel) }}>
        <picture className={counStyle.test}>

        <img
          className={counStyle.image}
          src={actualizar?.flags?.svg}
          alt="flag"
          />
          </picture>
        <section className={counStyle.info}>
          <h2>{countrySel}</h2>
          <p>Population: {actualizar?.population}</p>
          <p>Region: {actualizar?.region}</p>
          <p>Capital: {actualizar?.capital ? actualizar?.capital : countrySel}</p>
        </section>
      </article>
    </>
  )
}
