
export const setUserType = (value:string) => {
    localStorage.setItem(StorageKeys.USER_TYPE,value)
}

export const getUserType = () => {
    return localStorage.getItem(StorageKeys.USER_TYPE)
}


const enum StorageKeys { 
    USER_TYPE = 'userType'
}