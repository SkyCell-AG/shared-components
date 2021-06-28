import flow from 'lodash/flow'
import getContacts from './getContacts'
import useQueryGetContacts from './useQueryGetContacts'

const getAddresses = flow([
    getContacts,
    (promise) => {
        return promise.then((contacts) => {
            if (!contacts || contacts.length === 0) return []
            return contacts.map((contact) => {
                return contact.address
            })
        })
    },
])

const useUserAddresses = () => {
    return useQueryGetContacts(getAddresses)
}

export default useUserAddresses
