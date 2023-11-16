import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        <>
            <nav className="cabecalho_nav">
                <ul className="cabecalho_nav_ul">
                    <li className="cabecalho_nav_li">
                        <Link href="/home">
                            <p className="cabecalho_nav_a">Nova Ficha</p>
                        </Link>
                    </li>
                    <li className="cabecalho_nav_li">
                        <Link href="../Pages/fila.tsx">
                            <p className="cabecalho_nav_a">Fila de Espera</p>
                        </Link>
                    </li>
                    <li className="cabecalho_nav_li">
                    <Link href="/fila.tsx">
                            <p className="cabecalho_nav_a">Fichas Cadastradas</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;
