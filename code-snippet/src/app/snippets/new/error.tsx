"use client"

type Props = {
  error: Error
}

const errorPage = ({error}: Props) => {
  return (
    <div>
        <p className="text-center text-red-600 text-gray-600 mt-2">
          {error.message}
        </p>
    </div>
  )
}

export default errorPage