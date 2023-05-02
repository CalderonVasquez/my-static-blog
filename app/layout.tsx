import Link from 'next/link'

export const metadata = {
  title: "Eric's, Blog",
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  const header = (
     <header>
       <div>
        <Link href="/">
            <h1>Eric's Blog</h1>
        </Link> 
        <p>Welcome to my Blog!</p>
        <br />
      </div>
     </header>
  )

   const footer = (
     <footer>
       <div>
         <br />
         <p>Made by E. Marshall 2023</p>
      </div>
    </footer>
  )
  
  return (
    <html lang="en"> 
      <body>
        {header}
        {children}
        {footer}
      </body>   
    </html>
  )
}

