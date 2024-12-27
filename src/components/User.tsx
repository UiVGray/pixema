import { IUserProps } from '@/types/types'

export function User(props: IUserProps) {

  return (
    <div className="flex items-center justify-between gap-4 max-h-16 h-full px-5 text-center text-lg font-semibold cursor-pointer">
      <div className="flex items-center justify-center w-14 h-14 bg-violet-700 text-white rounded-lg">
        <div>{props.firstName.charAt(0).toUpperCase() + props.lastName.charAt(0).toUpperCase()}</div>
      </div>
      <div className="dark:text-white">{props.firstName + ' ' + props.lastName}</div>
    </div>
  )
}
