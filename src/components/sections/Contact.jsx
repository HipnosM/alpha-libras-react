import './Contact.css';

export default function Contact() {
    return (
        <section id="contact">
            <div class="__content">
                <h2>Contato</h2>
                <form action="#">
                    <div class="input__group">
                        <input type="text" placeholder="Nome" required />

                        <input type="email" placeholder="E-mail" required />

                        <select name="subject" id="subject" required>
                            <option value="none" selected disabled>Selecionar</option>
                            <option value="ask">Dúvida</option>
                            <option value="support">Apoio</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Outro</option>
                        </select>

                        <textarea name="message" id="message" placeholder="Digite sua mensagem aqui.." rows="8"
                            required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
};