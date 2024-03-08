export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-sage-50 dark:bg-slate-900 antialiased'>
        {children}
      </body>
    </html>
  );
}
