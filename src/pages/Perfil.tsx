import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import User from '../components/User';

const Perfil = () => {
    return (
        <main>
            <nav style={{ display: 'flex', alignItems: 'center',  background: '#ffffff' }}>

                <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#8C19D2', margin: '1.3rem 7rem'}}>
                    <span style={{ color: '#0069CA' }}>Search</span> d_evs
                </h1>

                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText
                        value=""
                        placeholder="Search"
                        style={{ width: '36rem', border: '2px solid #8C19D2', borderRadius: '.3rem' }} 
                    />
                </span>
            </nav>
            
            <section
                style={{ 
                    background: '#f2f2f2', 
                    height: '100%', 
                    padding: '5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%'
                }}>

                <div>
                    
                    <User />
                    
                    <Button
                        type="button"
                        label="Contato"
                        className="p-button-raised p-button-help p-p-3"
                        style={{ width: '17.5rem', marginTop: '2.5rem', borderRadius: '6px' }}
                    />
                </div>

                <div>
                    <section
                        style={{ 
                            width: '56.5rem', 
                            border: '1px solid black', 
                            height: '50rem',
                            background: '#fff',
                            borderRadius: '4px'
                        }}
                    >

                    </section>
                </div>
                
                
            </section>
        </main>
    );
};

export default Perfil;