import React from 'react'

function AppLayout({children}) {
  return (
    <div class='min-h-screen lg:mx-32 mx-8 xl:mx-48'>
      <main class='pt-12'>
        {children}
      </main>
    </div>
  )
}

export default AppLayout