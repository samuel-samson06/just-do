import React from 'react'

function AccountFunction() {
  return (
    <React.Fragment>
        <main className=' flex flex-col gap-4'>
            <button className=' bg-black py-1 rounded-md mx-10 text-white uppercase font-semibold'>Logout</button>
            <button className=' bg-black py-1 rounded-md mx-10 text-white uppercase font-semibold'>Delete Account</button>
        </main>
    </React.Fragment>
  )
}

export default AccountFunction