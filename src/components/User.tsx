export function User(props: { firstName: string, lastName: string }) {

  return (
    <div className="user">
      <div className="user-initials">
        <div>{props.firstName.charAt(0).toUpperCase() + props.lastName.charAt(0).toUpperCase()}</div>
      </div>
      <div className="user-name">{props.firstName + ' ' + props.lastName}</div>
    </div>
  )
}
