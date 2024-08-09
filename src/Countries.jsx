import counStyle from "./css/Countries.module.css";

const Countries = ({ countrySel, handle }) => {
  

  return (
    <>
      <article
        className={counStyle.country}
        onClick={(e) => {
          handle(countrySel);
        }}
      >
        <picture className={counStyle.test}>
          <img
            className={counStyle.image}
            src={countrySel?.flags}
            alt="flag"
          />
        </picture>
        <section className={counStyle.info}>
          <h2>{countrySel?.name}</h2>
          <p>Population: {countrySel?.population}</p>
          <p>Region: {countrySel?.region}</p>
          <p>
            Capital: {countrySel?.capital ? countrySel?.capital : countrySel?.name}
          </p>
        </section>
      </article>
    </>
  );
};

export default Countries;
