import React from 'react';
import FormAuthentication from '../organismos/FormAuthentication';
import Ancor from '../moleculas/Ancor';

import bgWeb from '../../assets/img/login-bg-web.jpg'
import LogoIcon from '../../assets/icons/logoIcon';

const AuthenticationTemplade = ({ handleLoginUser, isLogin }) => {
  const buttonLabel = isLogin ? 'Entrar' : 'Cadastrar';
  const ancorLabel = isLogin ? 'Cadastrar' : 'Entrar';
  const href = isLogin ? '/signup' : '/login';

  return (
    <section className="auth">
      <aside className="auth__aside">
        <img src={bgWeb} alt="" />
      </aside>
      <div className="auth__container">
        <section className="auth__logo">
          <LogoIcon width="150" height="150" />
          <h1 className="auth__logo--title">Cook Notes</h1>
        </section>
        <FormAuthentication handleLoginUser={handleLoginUser} buttonLabel={buttonLabel} isLogin={isLogin} />

        <div className="auth__ancor--container">
          <Ancor className="auth__ancor--link" href={href}>
            {ancorLabel}
          </Ancor>
        </div>
      </div>
    </section>
  )
}

export default AuthenticationTemplade;
