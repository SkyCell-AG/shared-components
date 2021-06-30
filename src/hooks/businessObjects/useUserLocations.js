import flow from 'lodash/flow'
import getContacts from './getContacts'
import useQueryGetContacts from './useQueryGetContacts'

const getLocations = flow([
    getContacts,
    (promise) => {
        return promise.then((contacts = []) => {
            return contacts.map((contact) => {
                return contact.location
            })
        })
    },
])

const useUserLocations = () => {
    return useQueryGetContacts(getLocations)
}

export default useUserLocations
