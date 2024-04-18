import React, { useContext } from 'react'
import Theme from './Theme'
import Remainder from './Remainder'
import Priority from './Priority'
import AccountFunction from './AccountFunction'
import { Context } from '../../context/Context'

function Settings() {
  const {theme}=useContext(Context)
  return (
    <React.Fragment>
        <div>
          <section>
            <header className={` px-2 font-semibold text-sm py-2 text-white ${theme} fromt-me`}>
              <p>Samuel Samson</p>
              <p>samuelsamson@gmail.com</p>
            </header>
            <Theme/>
            <Remainder/>
            <Priority/>
            <br />
            <AccountFunction/>
          </section>
        </div>
    </React.Fragment>
  )
}

export default Settings