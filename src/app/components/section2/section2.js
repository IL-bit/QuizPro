import './section2.scss';

const Section2 = () => {
    return(
        <section className="row" id="second_section" aria-labelledby="section2-heading">
            <div className="col-xxl-12 col-12">
                <div className="video" aria-label="Видеопрезентация"></div>
                <div className="items">
                    <article className="item" aria-labelledby="item1-heading">
                        <h3 id="item1-heading"><b>Фильтр-защита от спама</b><br />и нецелевых номеров</h3>
                        <div className="img" aria-label="Иконка фильтра" role="img" aria-hidden="true"></div>
                    </article>
                    <article className="item" aria-labelledby="item2-heading">
                        <h3 id="item2-heading"><b>Простой и понятный</b><br />интерфейс</h3>
                        <div className="img" aria-label="Иконка интерфейса" role="img" aria-hidden="true"></div>
                    </article>
                    <article className="item" aria-labelledby="item3-heading">
                        <h3 id="item3-heading"><b>13 вариантов квизов,</b><br />для любого бизнеса</h3>
                        <div className="img" aria-label="Иконка квизов" role="img" aria-hidden="true"></div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Section2;