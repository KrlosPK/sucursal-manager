const Error = ({ message }: { message: string }) => {
  return (
    <p role="alert" className="text-sm text-red-500">
      {message}
    </p>
  )
}

export { Error }
