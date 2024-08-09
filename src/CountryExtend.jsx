import ExtendStyle from "./css/CountryExtend.module.css";


const CountryExtend = ({ countrySel, handle, allCount }) => {
  

  const current = (pro, bool) => {
    const list = [];
    switch (bool) {
      case true:
        for (let element in pro) {
        if (list.length < 1) {
          const item = pro[element].name;
          list.push(`${item}`);
        } else {
          const item = pro[element].name;
          list.push(", " + item);
        }
      }
        break;
      case false:
        for (let element in pro) {
        const item = pro[element];
        if (list.length < 1) {
          list.push(`${item} `);
        } else {
          list.push(", " + item);
        }
      }
      break;
      case null:
        for(let element in pro){
        const item = pro[element].common;
        list.push(item)}
        break;
    }
    return list;
  };
  
  const cur = current(countrySel?.currencies, true);
  const lagu = current(countrySel?.languages, false);
  const native = current(countrySel?.nativeName, null);
  const bor = countrySel?.borders?.map(e => allCount?.find((a) => 
    String(e) == String(a?.cca3)));
 
 
  return (
    <>
      <article className={ExtendStyle.country}>
        <picture className={ExtendStyle.pic}>
          <img
            src={countrySel?.flags}
            alt="flag"
            className={ExtendStyle.img}
          />
        </picture>
        <section className={ExtendStyle.information}>
          <h2>{countrySel?.name}</h2>
          <section className={ExtendStyle.sideone}>
          <p><b>Native Name:</b> {native[native.length -1]} </p>
          <p><b>Population:</b> {countrySel?.population}</p>
          <p><b>Region:</b>  {countrySel?.region}</p>
          <p><b>Sub Region:</b>  {countrySel?.subregion}</p>
          <p><b>Capital:</b>  {countrySel?.capital ? countrySel?.capital : countrySel}</p>
          </section>
          <section className={ExtendStyle.sidetwo}>
          <p><b>Top Level Domain:</b>  {countrySel?.tld}</p>
          <p><b>Current:</b> {cur}</p>
          <p><b>Languages: </b>
            {lagu.map((e) => {
              return e;
            })}
          </p>
          </section>

          <section className={ExtendStyle.borders}>
          <p><b>Border Countries:</b></p>
            {bor != null
              ? bor?.map((element, i) => (
                  <button
                    key={i}
                    className={ExtendStyle.bor}
                    onClick={(e) => {
                      e.preventDefault();
                      handle(element);
                    }}
                  >
                    <span>
                    {element?.name}
                    </span>
                  </button>
                ))
              : <p>N/A</p>}
          </section>
        </section>
      </article>
    </>
  );
};
export default CountryExtend;
