import './styles.css';

const Emoji = () => {
    const content = (
        <main>
            <article className="emoji">
                <section className="head">
                    <section className="eyes">
                        <figure className="eye eye-left"></figure>
                        <figure className="eye eye-right"></figure>
                    </section>
                    <figure className="smile"></figure>
                </section>
            </article>
            <article className="emoji">
                <section className="head">
                    <section className="eyes">
                        <figure className="eye eye-left"></figure>
                        <figure className="eye eye-right"></figure>
                    </section>
                    <figure className="mouth"></figure>
                </section>
            </article>
            <article className="emoji">
                <section className="head">
                    <section className="eyes">
                        <figure className="eye eye-left"></figure>
                        <figure className="eye eye-right"></figure>
                    </section>
                    <figure className="mouth"></figure>
                </section>
            </article>
        </main>
    );

    return content;
};

export default Emoji;
