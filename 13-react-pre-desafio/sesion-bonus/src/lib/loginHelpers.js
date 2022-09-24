const userKey = 'userData'

export const getUserFromLS = () => {
  const userData = localStorage.getItem(userKey)
  if(userData){
    const user = JSON.parse(userData)
    return user
  }
  return null
}

export const saveUserInLS = (userData) => {
  localStorage.setItem(userKey, JSON.stringify(userData))
}

export const deleteUserFromLS = () => {
  localStorage.removeItem(userKey)
}