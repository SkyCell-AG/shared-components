import getContacts from './getContacts'
import useQueryGetContacts from './useQueryGetContacts'

const useUserContacts = () => {
    return useQueryGetContacts(getContacts)
}

export default useUserContacts
