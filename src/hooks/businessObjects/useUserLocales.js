import flow from 'lodash/flow'
import getContacts from './getContacts'
import useQueryGetContacts from './useQueryGetContacts'

const getLocales = flow([
    getContacts,
    (promise) => {
        return promise.then((contacts) => {
            if (!contacts || contacts.length === 0) return []
            return contacts.map((contact) => {
                return contact.address.addressName
            })
        })
    },
])

const useUserLocales = () => {
    return useQueryGetContacts(getLocales)
}

export default useUserLocales
