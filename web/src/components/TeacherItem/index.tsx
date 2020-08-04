import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherIten = () => {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/62599099?s=460&u=00cc7802f5a60b24e28d1d990d69a6984ee12104&v=4" alt="Mauricio AB"/>
            <div>
                <strong>Maurício AB</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Um Grande estudo
            <br /> <br />
            Uma grande lição muito legal e bacana.
        </p>

        <footer>
            <p>
                Preçp/Hora
                <strong>R$200,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Icone do Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherIten;