import React from 'react';
import { Title , Form, Repositories } from './style';
import logoImg from '../../assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';

import './style.ts';
const Dashboard: React.FC = () => {
    return (
    <>
        <img src={logoImg} alt="Github Explorer" />
        <Title>Explore Repositórios no Github</Title>
        <Form action="">
            <input placeholder="Digite o nome do repositório"/>
            <button type="submit">Pesquisar</button>
        </Form>
        <Repositories>
            <a href="">
                <img src="https://avatars0.githubusercontent.com/u/91586?s=460&u=bbe207d90699c26bc18a547ffba76e83b03881df&v=4" alt="fsilva"/>
                <div>
                    <strong>quebrada/foofoo</strong>
                    <p>yada yada yada yda </p>
                </div>
                <FiChevronRight size={20} />
            </a>

            <a href="">
                <img src="https://avatars0.githubusercontent.com/u/91586?s=460&u=bbe207d90699c26bc18a547ffba76e83b03881df&v=4" alt="fsilva"/>
                <div>
                    <strong>quebrada/foofoo</strong>
                    <p>yada yada yada yda </p>
                </div>
                <FiChevronRight size={20} />
            </a>

            <a href="">
                <img src="https://avatars0.githubusercontent.com/u/91586?s=460&u=bbe207d90699c26bc18a547ffba76e83b03881df&v=4" alt="fsilva"/>
                <div>
                    <strong>quebrada/foofoo</strong>
                    <p>yada yada yada yda </p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Repositories>
    </>
    );
}

export default Dashboard;
