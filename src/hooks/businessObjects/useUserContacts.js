import getContacts from './getContacts'
import useQueryGetUserContacts from './useQueryGetUserContacts'

const useUserContacts = () => {
    return useQueryGetUserContacts(getContacts)
}

export default useUserContacts
