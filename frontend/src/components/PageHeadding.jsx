

export default function PageHeadding({className,headding}) {
  return (
    <h2 className={` ${className} capitalize text-sky-700 border-b border-sky-400 text-center text-3xl font-semibold my-8 pb-6 `}>{headding}</h2>
  )
}
