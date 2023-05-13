import { NavLink } from 'react-router-dom';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import User from '../components/User';
import ReposPainel from '../components/ReposPainel';

const Perfil = () => {
    return (
        <main>
            <nav
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    background: '#ffffff' 
                }}
            >

                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <h1
                        style={{ 
                            color: '#8C19D2', 
                            fontSize: '2rem', 
                            fontWeight: '700', 
                            margin: '1.3rem 7rem'
                        }}
                    >
                        <span style={{ color: '#0069CA' }}>Search</span> d_evs
                    </h1>
                </NavLink>

                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        value=""
                        placeholder="Search"
                        style={{ 
                            width: '36rem', 
                            borderRadius: '.3rem', 
                            border: '2px solid #8C19D2', 
                        }} 
                    />
                </span>
            </nav>
            
            <section
                style={{ 
                    width: '100%',
                    height: '100%', 
                    display: 'flex',
                    padding: '5rem 2rem',
                    background: '#f2f2f2', 
                    justifyContent: 'space-evenly',
                }}
            >

                <div>
                    <User />
                    
                    <Button
                        type="button"
                        label="Contato"
                        className="p-button-raised p-button-help p-p-3"
                        style={{ 
                            width: '17.5rem', 
                            borderRadius: '6px', 
                            marginTop: '2.5rem', 
                        }}
                    />
                </div>

                <div>
                    <ReposPainel />
                </div>
                
            </section>
        </main>
    );
};

export default Perfil;