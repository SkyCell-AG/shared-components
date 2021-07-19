import flow from 'lodash/flow'
import getContacts from './getContacts'
import useQueryGetUserContacts from './useQueryGetUserContacts'

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
    return useQueryGetUserContacts(getAddresses)
}

export default useUserAddresses
