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
                    <figure className="smile mouth"></figure>
                </section>
            </article>
            <article className="emoji">
                <section className="head">
                    <section className="eyes">
                        <figure className="eye eye-left"></figure>
                        <figure className="eye eye-right"></figure>
                    </section>
                    <section className='face-mask mouth'>
                        <figure className='strap strap-top-left'></figure>
                        <figure className='strap strap-top-right'></figure>
                        <figure className='strap strap-bottom-left'></figure>
                        <figure className='strap strap-bottom-right'></figure>
                    </section>
                </section>
            </article>
            <article className="emoji">
                <section className="head">
                    <section className="eyes">
                        <figure className="eye eye-left"></figure>
                        <figure className="eye eye-right"></figure>
                    </section>
                    <figure className="open-mouth mouth"></figure>
                </section>
            </article>
        </main>
    );

    return content;
};

export default Emoji;
