import React from 'react';
import logoImg from '../../assets/logo.svg';

import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/"><FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img src="" alt="foo" />
                    <div>
                        <strong>fooo/bar</strong>
                        <p>yada yada ada</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>9999</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>8888</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>7777</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
            <Issues>


                <Link to="">

                    <div>
                        <strong>dddddddddddddd</strong>
                        <p>ffffffffffffffff</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>



            </Issues>
        </>
    );

}

export default Repository;
