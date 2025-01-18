export const metadata = {
  title: 'Dev Alert',
  description: 'Alert viewers that a component is still under development.',
}

export default function DevAlertLayout({ children }) {
  return (
    <>
      <div className="container-wrapper flex-1">{children}</div>
    </>
  )
}
